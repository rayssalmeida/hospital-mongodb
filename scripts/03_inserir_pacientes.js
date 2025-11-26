
// 15 pacientes com e sem convênio

use Hospital

print("=== INSERINDO PACIENTES ===");

db.Pacientes.insertMany([
  {
    "nome": "Lucas Almeida",
    "data_nascimento": new Date("1990-03-15"),
    "endereco": "Rua A, 123 - São Paulo, SP",
    "telefone": "(11) 97777-1111",
    "email": "lucas.almeida@email.com",
    "documentos": {
      "CPF": "111.222.333-44",
      "RG": "11.111.111-1"
    },
    "convenio": {
      "nome": "Unimed",
      "CNPJ": "12.345.678/0001-90",
      "tempo_carencia": 90,
      "numero_carteira": "UNI123456"
    }
  },
  {
    "nome": "Mariana Costa",
    "data_nascimento": new Date("1985-07-22"),
    "endereco": "Av. B, 456 - São Paulo, SP",
    "telefone": "(11) 96666-2222",
    "email": "mariana.costa@email.com",
    "documentos": {
      "CPF": "222.333.444-55",
      "RG": "22.222.222-2"
    },
    "convenio": {
      "nome": "Amil",
      "CNPJ": "23.456.789/0001-01",
      "tempo_carencia": 120,
      "numero_carteira": "AMI654321"
    }
  },
  {
    "nome": "Rafael Santos",
    "data_nascimento": new Date("2005-11-30"),
    "endereco": "Rua C, 789 - São Paulo, SP",
    "telefone": "(11) 95555-3333",
    "email": "rafael.santos@email.com",
    "documentos": {
      "CPF": "333.444.555-66",
      "RG": "33.333.333-3"
    },
    "convenio": null
  },
  {
    "nome": "Carla Oliveira",
    "data_nascimento": new Date("1978-04-18"),
    "endereco": "Av. D, 321 - São Paulo, SP",
    "telefone": "(11) 94444-4444",
    "email": "carla.oliveira@email.com",
    "documentos": {
      "CPF": "444.555.666-77",
      "RG": "44.444.444-4"
    },
    "convenio": {
      "nome": "Bradesco Saúde",
      "CNPJ": "34.567.890/0001-12",
      "tempo_carencia": 60,
      "numero_carteira": "BRA987654"
    }
  },
  {
    "nome": "Diego Lima",
    "data_nascimento": new Date("1995-09-05"),
    "endereco": "Rua E, 654 - São Paulo, SP",
    "telefone": "(11) 93333-5555",
    "email": "diego.lima@email.com",
    "documentos": {
      "CPF": "555.666.777-88",
      "RG": "55.555.555-5"
    },
    "convenio": null
  },
  {
    "nome": "Beatriz Rocha",
    "data_nascimento": new Date("2010-12-12"),
    "endereco": "Av. F, 987 - São Paulo, SP",
    "telefone": "(11) 92222-6666",
    "email": "beatriz.rocha@email.com",
    "documentos": {
      "CPF": "666.777.888-99",
      "RG": "66.666.666-6"
    },
    "convenio": {
      "nome": "SulAmérica",
      "CNPJ": "45.678.901/0001-23",
      "tempo_carencia": 180,
      "numero_carteira": "SUL456789"
    }
  },
  {
    "nome": "Thiago Martins",
    "data_nascimento": new Date("1982-01-25"),
    "endereco": "Rua G, 147 - São Paulo, SP",
    "telefone": "(11) 91111-7777",
    "email": "thiago.martins@email.com",
    "documentos": {
      "CPF": "777.888.999-00",
      "RG": "77.777.777-7"
    },
    "convenio": null
  },
  {
    "nome": "Isabela Ferreira",
    "data_nascimento": new Date("1998-06-08"),
    "endereco": "Av. H, 258 - São Paulo, SP",
    "telefone": "(11) 90000-8888",
    "email": "isabela.ferreira@email.com",
    "documentos": {
      "CPF": "888.999.000-11",
      "RG": "88.888.888-8"
    },
    "convenio": {
      "nome": "Unimed",
      "CNPJ": "12.345.678/0001-90",
      "tempo_carencia": 90,
      "numero_carteira": "UNI789012"
    }
  },
  {
    "nome": "Vinícius Alves",
    "data_nascimento": new Date("2008-03-20"),
    "endereco": "Rua I, 369 - São Paulo, SP",
    "telefone": "(11) 98888-9999",
    "email": "vinicius.alves@email.com",
    "documentos": {
      "CPF": "999.000.111-22",
      "RG": "99.999.999-9"
    },
    "convenio": null
  },
  {
    "nome": "Laura Nunes",
    "data_nascimento": new Date("1975-10-14"),
    "endereco": "Av. J, 741 - São Paulo, SP",
    "telefone": "(11) 97777-0000",
    "email": "laura.nunes@email.com",
    "documentos": {
      "CPF": "000.111.222-33",
      "RG": "00.000.000-0"
    },
    "convenio": {
      "nome": "Amil",
      "CNPJ": "23.456.789/0001-01",
      "tempo_carencia": 120,
      "numero_carteira": "AMI135790"
    }
  },
  {
    "nome": "Gustavo Silva",
    "data_nascimento": new Date("1993-08-03"),
    "endereco": "Rua K, 852 - São Paulo, SP",
    "telefone": "(11) 96666-1111",
    "email": "gustavo.silva@email.com",
    "documentos": {
      "CPF": "111.333.555-77",
      "RG": "11.333.555-7"
    },
    "convenio": null
  },
  {
    "nome": "Camila Torres",
    "data_nascimento": new Date("2003-05-17"),
    "endereco": "Av. L, 963 - São Paulo, SP",
    "telefone": "(11) 95555-2222",
    "email": "camila.torres@email.com",
    "documentos": {
      "CPF": "222.444.666-88",
      "RG": "22.444.666-8"
    },
    "convenio": {
      "nome": "Bradesco Saúde",
      "CNPJ": "34.567.890/0001-12",
      "tempo_carencia": 60,
      "numero_carteira": "BRA246810"
    }
  },
  {
    "nome": "Felipe Costa",
    "data_nascimento": new Date("1989-12-01"),
    "endereco": "Rua M, 159 - São Paulo, SP",
    "telefone": "(11) 94444-3333",
    "email": "felipe.costa@email.com",
    "documentos": {
      "CPF": "333.555.777-99",
      "RG": "33.555.777-9"
    },
    "convenio": null
  },
  {
    "nome": "Daniela Oliveira",
    "data_nascimento": new Date("2000-07-19"),
    "endereco": "Av. N, 753 - São Paulo, SP",
    "telefone": "(11) 93333-4444",
    "email": "daniela.oliveira@email.com",
    "documentos": {
      "CPF": "444.666.888-00",
      "RG": "44.666.888-0"
    },
    "convenio": {
      "nome": "SulAmérica",
      "CNPJ": "45.678.901/0001-23",
      "tempo_carencia": 180,
      "numero_carteira": "SUL975310"
    }
  },
  {
    "nome": "Rodrigo Santos",
    "data_nascimento": new Date("1997-02-28"),
    "endereco": "Rua O, 486 - São Paulo, SP",
    "telefone": "(11) 92222-5555",
    "email": "rodrigo.santos@email.com",
    "documentos": {
      "CPF": "555.777.999-11",
      "RG": "55.777.999-1"
    },
    "convenio": null
  }
]);

print("✅ " + db.Pacientes.find().count() + " pacientes inseridos com sucesso!");
print("📊 Estatísticas: " + db.Pacientes.find({"convenio": {$ne: null}}).count() + " pacientes com convênio");
