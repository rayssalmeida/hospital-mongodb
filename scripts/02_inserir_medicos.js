// 12 médicos com diferentes especialidades

use Hospital

print("=== INSERINDO MÉDICOS ===");

db.Medicos.insertMany([
  {
    "nome": "Dr. João Silva",
    "data_nascimento": new Date("1980-05-15"),
    "especialidades": ["Clínica Geral"],
    "tipo": "Generalista",
    "contato": {
      "telefone": "(11) 9999-1111",
      "email": "joao.silva@hospital.com"
    },
    "documentos": {
      "CPF": "123.456.789-00",
      "RG": "11.222.333-4"
    },
    "CRM": "CRM-SP 123456",
    "em_atividade": false
  },
  {
    "nome": "Dra. Maria Santos",
    "data_nascimento": new Date("1975-08-20"),
    "especialidades": ["Pediatria"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-2222",
      "email": "maria.santos@hospital.com"
    },
    "documentos": {
      "CPF": "234.567.890-11",
      "RG": "22.333.444-5"
    },
    "CRM": "CRM-SP 234567",
    "em_atividade": false
  },
  {
    "nome": "Dr. Pedro Oliveira",
    "data_nascimento": new Date("1982-03-10"),
    "especialidades": ["Gastroenterologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-3333",
      "email": "pedro.oliveira@hospital.com"
    },
    "documentos": {
      "CPF": "345.678.901-22",
      "RG": "33.444.555-6"
    },
    "CRM": "CRM-SP 345678",
    "em_atividade": true
  },
  {
    "nome": "Dra. Ana Costa",
    "data_nascimento": new Date("1978-11-25"),
    "especialidades": ["Dermatologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-4444",
      "email": "ana.costa@hospital.com"
    },
    "documentos": {
      "CPF": "456.789.012-33",
      "RG": "44.555.666-7"
    },
    "CRM": "CRM-SP 456789",
    "em_atividade": true
  },
  {
    "nome": "Dr. Carlos Lima",
    "data_nascimento": new Date("1985-07-30"),
    "especialidades": ["Cardiologia", "Clínica Geral"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-5555",
      "email": "carlos.lima@hospital.com"
    },
    "documentos": {
      "CPF": "567.890.123-44",
      "RG": "55.666.777-8"
    },
    "CRM": "CRM-SP 567890",
    "em_atividade": true
  },
  {
    "nome": "Dra. Fernanda Rocha",
    "data_nascimento": new Date("1990-01-12"),
    "especialidades": ["Ortopedia"],
    "tipo": "Residente",
    "contato": {
      "telefone": "(11) 9999-6666",
      "email": "fernanda.rocha@hospital.com"
    },
    "documentos": {
      "CPF": "678.901.234-55",
      "RG": "66.777.888-9"
    },
    "CRM": "CRM-SP 678901",
    "em_atividade": true
  },
  {
    "nome": "Dr. Ricardo Alves",
    "data_nascimento": new Date("1988-09-05"),
    "especialidades": ["Neurologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-7777",
      "email": "ricardo.alves@hospital.com"
    },
    "documentos": {
      "CPF": "789.012.345-66",
      "RG": "77.888.999-0"
    },
    "CRM": "CRM-SP 789012",
    "em_atividade": true
  },
  {
    "nome": "Dra. Juliana Martins",
    "data_nascimento": new Date("1983-12-18"),
    "especialidades": ["Pediatria", "Alergologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-8888",
      "email": "juliana.martins@hospital.com"
    },
    "documentos": {
      "CPF": "890.123.456-77",
      "RG": "88.999.000-1"
    },
    "CRM": "CRM-SP 890123",
    "em_atividade": true
  },
  {
    "nome": "Dr. Gabriel Nunes",
    "data_nascimento": new Date("1979-06-22"),
    "especialidades": ["Gastroenterologia", "Clínica Geral"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9999-9999",
      "email": "gabriel.nunes@hospital.com"
    },
    "documentos": {
      "CPF": "901.234.567-88",
      "RG": "99.000.111-2"
    },
    "CRM": "CRM-SP 901234",
    "em_atividade": true
  },
  {
    "nome": "Dra. Patricia Souza",
    "data_nascimento": new Date("1992-04-08"),
    "especialidades": ["Dermatologia"],
    "tipo": "Residente",
    "contato": {
      "telefone": "(11) 9999-0000",
      "email": "patricia.souza@hospital.com"
    },
    "documentos": {
      "CPF": "012.345.678-99",
      "RG": "00.111.222-3"
    },
    "CRM": "CRM-SP 012345",
    "em_atividade": true
  },
  {
    "nome": "Dr. Roberto Ferreira",
    "data_nascimento": new Date("1987-10-15"),
    "especialidades": ["Oftalmologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9888-1111",
      "email": "roberto.ferreira@hospital.com"
    },
    "documentos": {
      "CPF": "112.233.445-56",
      "RG": "11.223.344-5"
    },
    "CRM": "CRM-SP 112233",
    "em_atividade": true
  },
  {
    "nome": "Dra. Amanda Torres",
    "data_nascimento": new Date("1984-02-28"),
    "especialidades": ["Endocrinologia"],
    "tipo": "Especialista",
    "contato": {
      "telefone": "(11) 9777-2222",
      "email": "amanda.torres@hospital.com"
    },
    "documentos": {
      "CPF": "223.344.556-67",
      "RG": "22.334.455-6"
    },
    "CRM": "CRM-SP 223344",
    "em_atividade": true
  }
]);

print("✅ " + db.Medicos.find().count() + " médicos inseridos com sucesso!");
print("🎯 Especialidades incluídas: Pediatria, Clínica Geral, Gastroenterologia, Dermatologia, Cardiologia, Ortopedia, Neurologia, Alergologia, Oftalmologia, Endocrinologia");
