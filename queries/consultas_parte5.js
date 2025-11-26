
// Todas as consultas solicitadas na atividade

use Hospital

print("=== CONSULTAS - PARTE 5 ===");
print("Executando todas as consultas solicitadas...");

// 1. Todos os dados e o valor médio das consultas do ano de 2020 e das que foram feitas sob convênio
print("\n1. Consultas de 2020 e valor médio:");
var consultas2020 = db.Consultas.find({
  "data_hora": {
    $gte: new Date("2020-01-01"),
    $lt: new Date("2021-01-01")
  }
}).toArray();

var valorMedio2020 = db.Consultas.aggregate([
  {
    $match: {
      "data_hora": {
        $gte: new Date("2020-01-01"),
        $lt: new Date("2021-01-01")
      }
    }
  },
  {
    $group: {
      _id: null,
      valorMedio: { $avg: "$valor" }
    }
  }
]).toArray();

print("Consultas 2020: " + consultas2020.length);
print("Valor médio 2020: R$ " + (valorMedio2020[0] ? valorMedio2020[0].valorMedio.toFixed(2) : "0.00"));

var valorMedioConvenio = db.Consultas.aggregate([
  {
    $match: {
      "convenio_utilizado": true
    }
  },
  {
    $group: {
      _id: null,
      valorMedio: { $avg: "$valor" }
    }
  }
]).toArray();

print("Valor médio com convênio: R$ " + (valorMedioConvenio[0] ? valorMedioConvenio[0].valorMedio.toFixed(2) : "0.00"));

// 2. Todos os dados das internações que tiveram data de alta maior que a data prevista para a alta
print("\n2. Internações com alta após data prevista:");
var internacoesAtraso = db.Internacoes.find({
  $expr: { $gt: ["$data_efetiva_alta", "$data_prevista_alta"] }
}).toArray();

print("Internações com atraso na alta: " + internacoesAtraso.length);
internacoesAtraso.forEach(intern => {
  print("Paciente: " + intern.paciente_id + " - Atraso: " + 
    Math.ceil((intern.data_efetiva_alta - intern.data_prevista_alta) / (1000 * 60 * 60 * 24)) + " dias");
});

// 3. Receituário completo da primeira consulta registrada com receituário associado
print("\n3. Primeira consulta com receituário:");
var primeiraConsultaReceituario = db.Consultas.findOne({
  "receituario.0": { $exists: true }
}, { sort: { "data_hora": 1 } });

if (primeiraConsultaReceituario) {
  print("Data: " + primeiraConsultaReceituario.data_hora);
  print("Receituário:");
  primeiraConsultaReceituario.receituario.forEach(med => {
    print("  - " + med.medicamento + ": " + med.quantidade + " - " + med.instrucoes);
  });
}

// 4. Todos os dados da consulta de maior valor e também da de menor valor (ambas sem convênio)
print("\n4. Consultas de maior e menor valor (sem convênio):");
var consultaMaiorValor = db.Consultas.findOne(
  { "convenio_utilizado": false },
  { sort: { "valor": -1 } }
);

var consultaMenorValor = db.Consultas.findOne(
  { "convenio_utilizado": false },
  { sort: { "valor": 1 } }
);

print("Consulta MAIOR valor: R$ " + (consultaMaiorValor ? consultaMaiorValor.valor : "N/A"));
print("Consulta MENOR valor: R$ " + (consultaMenorValor ? consultaMenorValor.valor : "N/A"));

// 5. Todos os dados das internações em seus respectivos quartos, calculando o total
print("\n5. Internações com cálculo do total:");
var pipelineInternacoes = [
  {
    $lookup: {
      from: "Quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $unwind: "$quarto"
  },
  {
    $addFields: {
      dias_internacao: {
        $ceil: {
          $divide: [
            { $subtract: ["$data_efetiva_alta", "$data_entrada"] },
            1000 * 60 * 60 * 24
          ]
        }
      }
    }
  },
  {
    $addFields: {
      total_internacao: {
        $multiply: ["$dias_internacao", "$quarto.valor_diaria"]
      }
    }
  }
];

var internacoesComTotal = db.Internacoes.aggregate(pipelineInternacoes).toArray();
internacoesComTotal.forEach(intern => {
  print("Internação: " + intern._id + " - Quarto: " + intern.quarto.tipo + 
        " - Dias: " + intern.dias_internacao + " - Total: R$ " + intern.total_internacao.toFixed(2));
});

// 6. Data, procedimento e número de quarto de internações em quartos do tipo "apartamento"
print("\n6. Internações em apartamentos:");
var internacoesApartamento = db.Internacoes.aggregate([
  {
    $lookup: {
      from: "Quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $unwind: "$quarto"
  },
  {
    $match: {
      "quarto.tipo": "Apartamento"
    }
  },
  {
    $project: {
      data_entrada: 1,
      descricao_procedimentos: 1,
      numero_quarto: "$quarto.numero"
    }
  }
]).toArray();

print("Internações em apartamento: " + internacoesApartamento.length);
internacoesApartamento.forEach(intern => {
  print("Quarto " + intern.numero_quarto + " - Entrada: " + intern.data_entrada);
});

// 7. Nome do paciente, data da consulta e especialidade de consultas com pacientes menores de 18 anos e especialidade não pediatria
print("\n7. Consultas com pacientes <18 anos (não pediatria):");
var pipelineMenores = [
  {
    $lookup: {
      from: "Pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  {
    $unwind: "$paciente"
  },
  {
    $addFields: {
      idade_consulta: {
        $floor: {
          $divide: [
            { $subtract: ["$data_hora", "$paciente.data_nascimento"] },
            1000 * 60 * 60 * 24 * 365
          ]
        }
      }
    }
  },
  {
    $match: {
      "idade_consulta": { $lt: 18 },
      "especialidade": { $ne: "Pediatria" }
    }
  },
  {
    $project: {
      nome_paciente: "$paciente.nome",
      data_consulta: "$data_hora",
      especialidade: 1,
      idade_consulta: 1
    }
  },
  {
    $sort: { "data_consulta": 1 }
  }
];

var consultasMenores = db.Consultas.aggregate(pipelineMenores).toArray();
print("Consultas com pacientes <18 anos (não pediatria): " + consultasMenores.length);
consultasMenores.forEach(cons => {
  print("Paciente: " + cons.nome_paciente + " - Data: " + cons.data_consulta + 
        " - Especialidade: " + cons.especialidade + " - Idade: " + cons.idade_consulta);
});

// 8. Nome do paciente, nome do médico, data da internação e procedimentos de internações por gastroenterologistas em enfermaria
print("\n8. Internações por gastroenterologistas em enfermaria:");
var pipelineGastroEnfermaria = [
  {
    $lookup: {
      from: "Pacientes",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }
  },
  {
    $lookup: {
      from: "Medicos",
      localField: "medico_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  {
    $lookup: {
      from: "Quartos",
      localField: "quarto_id",
      foreignField: "_id",
      as: "quarto"
    }
  },
  {
    $unwind: "$paciente"
  },
  {
    $unwind: "$medico"
  },
  {
    $unwind: "$quarto"
  },
  {
    $match: {
      "medico.especialidades": "Gastroenterologia",
      "quarto.tipo": "Enfermaria"
    }
  },
  {
    $project: {
      nome_paciente: "$paciente.nome",
      nome_medico: "$medico.nome",
      data_internacao: "$data_entrada",
      procedimentos: "$descricao_procedimentos"
    }
  }
];

var internacoesGastro = db.Internacoes.aggregate(pipelineGastroEnfermaria).toArray();
print("Internações por gastroenterologistas em enfermaria: " + internacoesGastro.length);
internacoesGastro.forEach(intern => {
  print("Paciente: " + intern.nome_paciente + " - Médico: " + intern.nome_medico);
});

// 9. Os nomes dos médicos, seus CRMs e a quantidade de consultas que cada um realizou
print("\n9. Quantidade de consultas por médico:");
var consultasPorMedico = db.Consultas.aggregate([
  {
    $lookup: {
      from: "Medicos",
      localField: "medico_id",
      foreignField: "_id",
      as: "medico"
    }
  },
  {
    $unwind: "$medico"
  },
  {
    $group: {
      _id: "$medico.nome",
      CRM: { $first: "$medico.CRM" },
      total_consultas: { $sum: 1 }
    }
  },
  {
    $sort: { "total_consultas": -1 }
  }
]).toArray();

consultasPorMedico.forEach(med => {
  print("Médico: " + med._id + " - CRM: " + med.CRM + " - Consultas: " + med.total_consultas);
});

// 10. Todos os médicos que tenham "Gabriel" no nome
print("\n10. Médicos com 'Gabriel' no nome:");
var medicosGabriel = db.Medicos.find({
  "nome": /Gabriel/
}).toArray();

print("Médicos com 'Gabriel': " + medicosGabriel.length);
medicosGabriel.forEach(med => {
  print(" - " + med.nome + " - " + med.especialidades.join(", "));
});

// 11. Os nomes, CORENs e número de internações de enfermeiros que participaram de mais de uma internação
print("\n11. Enfermeiros com mais de uma internação:");
var enfermeirosMultiplas = db.Internacoes.aggregate([
  {
    $unwind: "$enfermeiros"
  },
  {
    $group: {
      _id: "$enfermeiros",
      total_internacoes: { $sum: 1 }
    }
  },
  {
    $match: {
      "total_internacoes": { $gt: 1 }
    }
  },
  {
    $lookup: {
      from: "Enfermeiros",
      localField: "_id",
      foreignField: "_id",
      as: "enfermeiro"
    }
  },
  {
    $unwind: "$enfermeiro"
  },
  {
    $project: {
      nome: "$enfermeiro.nome",
      COREN: "$enfermeiro.COREN",
      total_internacoes: 1
    }
  },
  {
    $sort: { "total_internacoes": -1 }
  }
]).toArray();

print("Enfermeiros com múltiplas internações: " + enfermeirosMultiplas.length);
enfermeirosMultiplas.forEach(enfer => {
  print(" - " + enfer.nome + " - COREN: " + enfer.COREN + " - Internações: " + enfer.total_internacoes);
});

print("\n🎉 TODAS AS CONSULTAS DA PARTE 5 CONCLUÍDAS!");
