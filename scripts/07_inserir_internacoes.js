
// 7 internações entre 2015-2022

use Hospital

print("=== INSERINDO INTERNAÇÕES ===");

// Obter IDs para associar
var medicos = db.Medicos.find().toArray();
var pacientes = db.Pacientes.find().toArray();
var quartos = db.Quartos.find().toArray();
var enfermeiros = db.Enfermeiros.find().toArray();

db.Internacoes.insertMany([
  {
    "paciente_id": pacientes[0]._id, // Lucas Almeida
    "medico_id": medicos[0]._id, // Dr. João Silva
    "data_entrada": new Date("2020-03-20"),
    "data_prevista_alta": new Date("2020-03-25"),
    "data_efetiva_alta": new Date("2020-03-27"),
    "descricao_procedimentos": "Tratamento para pneumonia com antibioticoterapia intravenosa e fisioterapia respiratória",
    "quarto_id": quartos[0]._id, // Apartamento
    "enfermeiros": [enfermeiros[0]._id, enfermeiros[1]._id]
  },
  {
    "paciente_id": pacientes[1]._id, // Mariana Costa
    "medico_id": medicos[4]._id, // Dr. Carlos Lima
    "data_entrada": new Date("2019-07-15"),
    "data_prevista_alta": new Date("2019-07-20"),
    "data_efetiva_alta": new Date("2019-07-19"),
    "descricao_procedimentos": "Cirurgia de apendicite e recuperação pós-operatória",
    "quarto_id": quartos[2]._id, // Quarto Duplo
    "enfermeiros": [enfermeiros[2]._id, enfermeiros[3]._id]
  },
  {
    "paciente_id": pacientes[12]._id, // Felipe Costa
    "medico_id": medicos[5]._id, // Dra. Fernanda Rocha
    "data_entrada": new Date("2021-01-10"),
    "data_prevista_alta": new Date("2021-01-15"),
    "data_efetiva_alta": new Date("2021-01-18"),
    "descricao_procedimentos": "Fratura exposta de fêmur - tratamento cirúrgico e fisioterapia",
    "quarto_id": quartos[4]._id, // Enfermaria
    "enfermeiros": [enfermeiros[4]._id, enfermeiros[5]._id]
  },
  {
    "paciente_id": pacientes[0]._id, // Lucas Almeida (2ª internação)
    "medico_id": medicos[2]._id, // Dr. Pedro Oliveira
    "data_entrada": new Date("2021-08-05"),
    "data_prevista_alta": new Date("2021-08-10"),
    "data_efetiva_alta": new Date("2021-08-09"),
    "descricao_procedimentos": "Tratamento para infecção urinária grave com antibioticoterapia",
    "quarto_id": quartos[1]._id, // Apartamento
    "enfermeiros": [enfermeiros[6]._id, enfermeiros[7]._id]
  },
  {
    "paciente_id": pacientes[13]._id, // Daniela Oliveira
    "medico_id": medicos[7]._id, // Dra. Juliana Martins
    "data_entrada": new Date("2018-11-20"),
    "data_prevista_alta": new Date("2018-11-25"),
    "data_efetiva_alta": new Date("2018-11-30"),
    "descricao_procedimentos": "Parto cesárea e cuidados pós-operatórios com recém-nascido",
    "quarto_id": quartos[3]._id, // Quarto Duplo
    "enfermeiros": [enfermeiros[8]._id, enfermeiros[9]._id]
  },
  {
    "paciente_id": pacientes[8]._id, // Vinícius Alves
    "medico_id": medicos[8]._id, // Dr. Gabriel Nunes
    "data_entrada": new Date("2017-05-12"),
    "data_prevista_alta": new Date("2017-05-17"),
    "data_efetiva_alta": new Date("2017-05-16"),
    "descricao_procedimentos": "Apêndicite aguda - tratamento clínico e observação",
    "quarto_id": quartos[5]._id, // Enfermaria
    "enfermeiros": [enfermeiros[0]._id, enfermeiros[2]._id]
  },
  {
    "paciente_id": pacientes[12]._id, // Felipe Costa (2ª internação)
    "medico_id": medicos[5]._id, // Dra. Fernanda Rocha
    "data_entrada": new Date("2019-09-08"),
    "data_prevista_alta": new Date("2019-09-13"),
    "data_efetiva_alta": new Date("2019-09-15"),
    "descricao_procedimentos": "Complicações pós-cirúrgicas - nova intervenção e fisioterapia intensiva",
    "quarto_id": quartos[0]._id, // Apartamento
    "enfermeiros": [enfermeiros[1]._id, enfermeiros[3]._id]
  }
]);

print("✅ " + db.Internacoes.find().count() + " internações inseridas com sucesso!");
print("👥 Pacientes com múltiplas internações: Lucas Almeida e Felipe Costa");
print("🛏️ Quartos utilizados: Apartamento, Quarto Duplo e Enfermaria");
