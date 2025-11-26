
// 20 consultas entre 2015-2022

use Hospital

print("=== INSERINDO CONSULTAS ===");

// Primeiro vamos obter alguns IDs para associar
var medicos = db.Medicos.find().toArray();
var pacientes = db.Pacientes.find().toArray();

db.Consultas.insertMany([
  {
    "data_hora": new Date("2020-03-15T09:00:00"),
    "medico_id": medicos[0]._id,
    "paciente_id": pacientes[0]._id,
    "especialidade": "Clínica Geral",
    "valor": 150.00,
    "convenio_utilizado": true,
    "numero_carteira": "UNI123456",
    "receituario": [
      {
        "medicamento": "Paracetamol",
        "quantidade": "1 caixa com 20 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 6 horas em caso de dor"
      },
      {
        "medicamento": "Ibuprofeno", 
        "quantidade": "1 caixa com 12 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 8 horas em caso de inflamação"
      }
    ]
  },
  {
    "data_hora": new Date("2020-05-20T14:30:00"),
    "medico_id": medicos[1]._id,
    "paciente_id": pacientes[1]._id,
    "especialidade": "Pediatria", 
    "valor": 180.00,
    "convenio_utilizado": true,
    "numero_carteira": "AMI654321",
    "receituario": [
      {
        "medicamento": "Amoxicilina",
        "quantidade": "1 frasco de 100ml", 
        "instrucoes": "Tomar 5ml a cada 8 horas por 7 dias"
      },
      {
        "medicamento": "Xarope para tosse",
        "quantidade": "1 frasco de 120ml",
        "instrucoes": "Tomar 10ml a cada 12 horas"
      }
    ]
  },
  {
    "data_hora": new Date("2019-08-10T10:15:00"),
    "medico_id": medicos[2]._id,
    "paciente_id": pacientes[2]._id,
    "especialidade": "Gastroenterologia",
    "valor": 250.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Omeprazol",
        "quantidade": "1 caixa com 28 cápsulas",
        "instrucoes": "Tomar 1 cápsula pela manhã em jejum"
      },
      {
        "medicamento": "Domperidona",
        "quantidade": "1 caixa com 20 comprimidos", 
        "instrucoes": "Tomar 1 comprimido 30 minutos antes das refeições"
      },
      {
        "medicamento": "Simeticona",
        "quantidade": "1 caixa com 20 cápsulas",
        "instrucoes": "Tomar 1 cápsula após as refeições"
      }
    ]
  },
  {
    "data_hora": new Date("2021-01-12T11:00:00"),
    "medico_id": medicos[3]._id,
    "paciente_id": pacientes[3]._id,
    "especialidade": "Dermatologia",
    "valor": 200.00,
    "convenio_utilizado": true,
    "numero_carteira": "BRA987654",
    "receituario": [
      {
        "medicamento": "Pomada de corticóide",
        "quantidade": "1 tubo de 30g",
        "instrucoes": "Aplicar na área afetada 2 vezes ao dia"
      },
      {
        "medicamento": "Sabonete antisséptico",
        "quantidade": "1 unidade", 
        "instrucoes": "Usar no banho diariamente"
      }
    ]
  },
  {
    "data_hora": new Date("2018-11-05T16:45:00"),
    "medico_id": medicos[4]._id,
    "paciente_id": pacientes[4]._id,
    "especialidade": "Cardiologia", 
    "valor": 300.00,
    "convenio_utilizado": false,
    "receituario": []
  },
  {
    "data_hora": new Date("2020-07-22T08:30:00"),
    "medico_id": medicos[5]._id,
    "paciente_id": pacientes[5]._id,
    "especialidade": "Ortopedia",
    "valor": 220.00,
    "convenio_utilizado": true,
    "numero_carteira": "SUL456789", 
    "receituario": [
      {
        "medicamento": "Dipirona",
        "quantidade": "1 caixa com 10 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 6 horas em caso de dor"
      },
      {
        "medicamento": "Cetoprofeno", 
        "quantidade": "1 caixa com 12 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 12 horas"
      }
    ]
  },
  {
    "data_hora": new Date("2019-04-18T15:20:00"),
    "medico_id": medicos[6]._id,
    "paciente_id": pacientes[6]._id,
    "especialidade": "Neurologia",
    "valor": 280.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Topiramato",
        "quantidade": "1 caixa com 30 comprimidos", 
        "instrucoes": "Tomar 1 comprimido pela manhã e 1 à noite"
      }
    ]
  },
  {
    "data_hora": new Date("2020-09-30T13:10:00"),
    "medico_id": medicos[7]._id,
    "paciente_id": pacientes[7]._id,
    "especialidade": "Pediatria",
    "valor": 180.00,
    "convenio_utilizado": true,
    "numero_carteira": "UNI789012",
    "receituario": [
      {
        "medicamento": "Antitérmico infantil", 
        "quantidade": "1 frasco de 100ml",
        "instrucoes": "Tomar conforme peso a cada 6 horas"
      },
      {
        "medicamento": "Vitamina C",
        "quantidade": "1 frasco de 30 comprimidos",
        "instrucoes": "Tomar 1 comprimido ao dia"
      },
      {
        "medicamento": "Probiótico",
        "quantidade": "1 caixa com 10 sachês", 
        "instrucoes": "Tomar 1 sachê ao dia"
      }
    ]
  },
  {
    "data_hora": new Date("2021-06-14T10:00:00"),
    "medico_id": medicos[8]._id,
    "paciente_id": pacientes[8]._id,
    "especialidade": "Gastroenterologia",
    "valor": 250.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Ranitidina",
        "quantidade": "1 caixa com 20 comprimidos",
        "instrucoes": "Tomar 1 comprimido antes de dormir"
      },
      {
        "medicamento": "Lactobacillus", 
        "quantidade": "1 caixa com 30 cápsulas",
        "instrucoes": "Tomar 1 cápsula 3 vezes ao dia"
      }
    ]
  },
  {
    "data_hora": new Date("2017-12-08T14:00:00"),
    "medico_id": medicos[9]._id,
    "paciente_id": pacientes[9]._id,
    "especialidade": "Dermatologia",
    "valor": 200.00,
    "convenio_utilizado": true,
    "numero_carteira": "AMI135790",
    "receituario": [
      {
        "medicamento": "Hidratante corporal",
        "quantidade": "1 pote de 500ml", 
        "instrucoes": "Aplicar no corpo todo após o banho"
      },
      {
        "medicamento": "Protetor solar FPS 50",
        "quantidade": "1 frasco de 120ml",
        "instrucoes": "Aplicar todas as manhãs"
      }
    ]
  },
  {
    "data_hora": new Date("2020-02-25T11:30:00"),
    "medico_id": medicos[10]._id,
    "paciente_id": pacientes[10]._id,
    "especialidade": "Oftalmologia", 
    "valor": 190.00,
    "convenio_utilizado": false,
    "receituario": []
  },
  {
    "data_hora": new Date("2019-10-17T09:45:00"),
    "medico_id": medicos[11]._id,
    "paciente_id": pacientes[11]._id,
    "especialidade": "Endocrinologia",
    "valor": 270.00,
    "convenio_utilizado": true,
    "numero_carteira": "BRA246810",
    "receituario": [
      {
        "medicamento": "Metformina",
        "quantidade": "1 caixa com 30 comprimidos", 
        "instrucoes": "Tomar 1 comprimido 2 vezes ao dia"
      },
      {
        "medicamento": "Vitamina D",
        "quantidade": "1 frasco com 30 cápsulas",
        "instrucoes": "Tomar 1 cápsula ao dia"
      }
    ]
  },
  {
    "data_hora": new Date("2021-03-08T16:00:00"),
    "medico_id": medicos[0]._id,
    "paciente_id": pacientes[12]._id,
    "especialidade": "Clínica Geral",
    "valor": 150.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Amoxicilina",
        "quantidade": "1 caixa com 21 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 8 horas por 7 dias"
      }
    ]
  },
  {
    "data_hora": new Date("2018-07-19T08:15:00"),
    "medico_id": medicos[1]._id,
    "paciente_id": pacientes[13]._id,
    "especialidade": "Pediatria", 
    "valor": 180.00,
    "convenio_utilizado": true,
    "numero_carteira": "SUL975310",
    "receituario": [
      {
        "medicamento": "Antialérgico",
        "quantidade": "1 frasco de 100ml",
        "instrucoes": "Tomar 5ml a cada 24 horas"
      },
      {
        "medicamento": "Soro fisiológico", 
        "quantidade": "1 frasco de 100ml",
        "instrucoes": "Aplicar nas narinas 3 vezes ao dia"
      }
    ]
  },
  {
    "data_hora": new Date("2020-11-03T14:50:00"),
    "medico_id": medicos[2]._id,
    "paciente_id": pacientes[14]._id,
    "especialidade": "Gastroenterologia",
    "valor": 250.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Buscopan",
        "quantidade": "1 caixa com 20 comprimidos",
        "instrucoes": "Tomar 1 comprimido em caso de cólica" 
      },
      {
        "medicamento": "Laxante",
        "quantidade": "1 frasco de 200ml",
        "instrucoes": "Tomar 15ml antes de dormir"
      }
    ]
  },
  {
    "data_hora": new Date("2019-02-14T10:30:00"),
    "medico_id": medicos[3]._id,
    "paciente_id": pacientes[0]._id,
    "especialidade": "Dermatologia",
    "valor": 200.00,
    "convenio_utilizado": true,
    "numero_carteira": "UNI123456", 
    "receituario": []
  },
  {
    "data_hora": new Date("2021-08-09T15:40:00"),
    "medico_id": medicos[4]._id,
    "paciente_id": pacientes[1]._id,
    "especialidade": "Cardiologia",
    "valor": 300.00,
    "convenio_utilizado": true,
    "numero_carteira": "AMI654321",
    "receituario": [
      {
        "medicamento": "AAS",
        "quantidade": "1 caixa com 30 comprimidos", 
        "instrucoes": "Tomar 1 comprimido ao dia"
      },
      {
        "medicamento": "Sinvastatina",
        "quantidade": "1 caixa com 30 comprimidos",
        "instrucoes": "Tomar 1 comprimido à noite"
      }
    ]
  },
  {
    "data_hora": new Date("2017-05-26T11:20:00"),
    "medico_id": medicos[5]._id,
    "paciente_id": pacientes[2]._id,
    "especialidade": "Ortopedia",
    "valor": 220.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Dorflex",
        "quantidade": "1 caixa com 10 comprimidos",
        "instrucoes": "Tomar 1 comprimido a cada 8 horas em caso de dor muscular"
      }
    ]
  },
  {
    "data_hora": new Date("2020-12-18T09:10:00"),
    "medico_id": medicos[6]._id,
    "paciente_id": pacientes[3]._id,
    "especialidade": "Neurologia", 
    "valor": 280.00,
    "convenio_utilizado": true,
    "numero_carteira": "BRA987654",
    "receituario": [
      {
        "medicamento": "Rivotril",
        "quantidade": "1 caixa com 30 comprimidos",
        "instrucoes": "Tomar 1 comprimido antes de dormir"
      },
      {
        "medicamento": "Fluoxetina", 
        "quantidade": "1 caixa com 30 comprimidos",
        "instrucoes": "Tomar 1 comprimido pela manhã"
      }
    ]
  },
  {
    "data_hora": new Date("2018-09-05T13:25:00"),
    "medico_id": medicos[7]._id,
    "paciente_id": pacientes[4]._id,
    "especialidade": "Alergologia",
    "valor": 230.00,
    "convenio_utilizado": false,
    "receituario": [
      {
        "medicamento": "Loratadina",
        "quantidade": "1 caixa com 12 comprimidos", 
        "instrucoes": "Tomar 1 comprimido ao dia"
      },
      {
        "medicamento": "Descongestionante nasal",
        "quantidade": "1 frasco de 30ml",
        "instrucoes": "Aplicar 2 vezes ao dia"
      }
    ]
  }
]);

print("✅ " + db.Consultas.find().count() + " consultas inseridas com sucesso!");
print("💊 Consultas com receituário: " + db.Consultas.find({"receituario.0": {$exists: true}}).count());
print("📅 Período: 2017-2021");
