
// Adicionar campo em_atividade e atualizar médicos

use Hospital

print("=== ATUALIZAÇÕES - PARTE 4 ===");

// 1. Adicionar campo em_atividade para todos os médicos
print("1. Adicionando campo 'em_atividade' para todos os médicos...");
db.Medicos.updateMany(
  {}, 
  { $set: { "em_atividade": true } }
);

// 2. Atualizar 2 médicos como inativos
print("2. Atualizando 2 médicos como inativos...");
db.Medicos.updateOne(
  { "nome": "Dr. João Silva" },
  { $set: { "em_atividade": false } }
);

db.Medicos.updateOne(
  { "nome": "Dra. Maria Santos" },
  { $set: { "em_atividade": false } }
);

// Verificar resultados
print("✅ Atualizações concluídas!");
print("Médicos ativos: " + db.Medicos.find({ "em_atividade": true }).count());
print("Médicos inativos: " + db.Medicos.find({ "em_atividade": false }).count());

// Mostrar status dos médicos
print("\n📋 Status dos médicos:");
db.Medicos.find({}, { nome: 1, em_atividade: 1, especialidades: 1 }).pretty();
