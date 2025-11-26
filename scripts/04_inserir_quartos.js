
// 3 tipos de quartos com valores diferentes

use Hospital

print("=== INSERINDO QUARTOS ===");

db.Quartos.insertMany([
  {
    "numero": "101",
    "tipo": "Apartamento",
    "descricao": "Quarto individual com banheiro, TV e frigobar",
    "valor_diaria": 350.00
  },
  {
    "numero": "102", 
    "tipo": "Apartamento",
    "descricao": "Quarto individual com banheiro, TV e frigobar",
    "valor_diaria": 350.00
  },
  {
    "numero": "201",
    "tipo": "Quarto Duplo", 
    "descricao": "Quarto compartilhado para dois pacientes",
    "valor_diaria": 200.00
  },
  {
    "numero": "202",
    "tipo": "Quarto Duplo",
    "descricao": "Quarto compartilhado para dois pacientes", 
    "valor_diaria": 200.00
  },
  {
    "numero": "301",
    "tipo": "Enfermaria",
    "descricao": "Ala coletiva para múltiplos pacientes",
    "valor_diaria": 100.00
  },
  {
    "numero": "302",
    "tipo": "Enfermaria",
    "descricao": "Ala coletiva para múltiplos pacientes",
    "valor_diaria": 100.00
  }
]);

print("✅ " + db.Quartos.find().count() + " quartos inseridos com sucesso!");
print("🏨 Tipos disponíveis: Apartamento (R$ 350/dia), Quarto Duplo (R$ 200/dia), Enfermaria (R$ 100/dia)");
