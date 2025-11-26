# 🏥 Sistema Hospitalar - MongoDB

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

Sistema de gerenciamento hospitalar desenvolvido em **MongoDB** para controle de médicos, pacientes, consultas e internações. Projeto acadêmico para atividade de banco de dados NoSQL.

## 📋 Descrição do Projeto

Este projeto implementa um sistema completo de gestão hospitalar utilizando **MongoDB**, atendendo aos seguintes requisitos:

- ✅ Cadastro de médicos, pacientes e enfermeiros
- ✅ Controle de consultas médicas com receituário
- ✅ Gerenciamento de internações e quartos
- ✅ Relatórios e consultas analíticas
- ✅ Dados de convênios médicos

## 🗂️ Estrutura do Banco de Dados

### Collections Principais

| Collection | Descrição | Documentos |
|------------|-----------|------------|
| **Medicos** | Profissionais de saúde | 12 |
| **Pacientes** | Pacientes e convênios | 15 |
| **Consultas** | Registro de consultas | 20 |
| **Internacoes** | Controle de internações | 7 |
| **Quartos** | Tipos e valores de quartos | 6 |
| **Enfermeiros** | Profissionais de enfermagem | 10 |

### Modelagem de Dados

```javascript
// Exemplo de documento Médico
{
  _id: ObjectId,
  nome: String,
  especialidades: [String],
  tipo: String, // "Generalista", "Especialista", "Residente"
  em_atividade: Boolean,
  CRM: String
}

// Exemplo de documento Consulta
{
  _id: ObjectId,
  data_hora: Date,
  medico_id: ObjectId,
  paciente_id: ObjectId,
  especialidade: String,
  valor: Number,
  convenio_utilizado: Boolean,
  receituario: [{
    medicamento: String,
    quantidade: String,
    instrucoes: String
  }]
}
