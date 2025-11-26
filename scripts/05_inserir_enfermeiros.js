
// 10 profissionais de enfermagem

use Hospital

print("=== INSERINDO ENFERMEIROS ===");

db.Enfermeiros.insertMany([
  {
    "nome": "Ana Silva",
    "CPF": "111.222.333-44", 
    "COREN": "COREN-SP 123.456"
  },
  {
    "nome": "Carlos Santos",
    "CPF": "222.333.444-55",
    "COREN": "COREN-SP 234.567"
  },
  {
    "nome": "Marina Oliveira", 
    "CPF": "333.444.555-66",
    "COREN": "COREN-SP 345.678"
  },
  {
    "nome": "Ricardo Lima",
    "CPF": "444.555.666-77",
    "COREN": "COREN-SP 456.789"
  },
  {
    "nome": "Fernanda Costa",
    "CPF": "555.666.777-88", 
    "COREN": "COREN-SP 567.890"
  },
  {
    "nome": "Paulo Mendes",
    "CPF": "666.777.888-99",
    "COREN": "COREN-SP 678.901"
  },
  {
    "nome": "Juliana Alves",
    "CPF": "777.888.999-00", 
    "COREN": "COREN-SP 789.012"
  },
  {
    "nome": "Roberto Nunes",
    "CPF": "888.999.000-11",
    "COREN": "COREN-SP 890.123"
  },
  {
    "nome": "Patrícia Rocha",
    "CPF": "999.000.111-22",
    "COREN": "COREN-SP 901.234" 
  },
  {
    "nome": "Gabriel Souza",
    "CPF": "000.111.222-33",
    "COREN": "COREN-SP 012.345"
  }
]);

print("✅ " + db.Enfermeiros.find().count() + " enfermeiros inseridos com sucesso!");
