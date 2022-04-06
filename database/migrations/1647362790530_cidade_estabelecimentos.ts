import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CidadeEstabelecimentos extends BaseSchema {
  protected tableName = "cidades_estabelecimentos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer("cidade_id")
        .unsigned()
        .notNullable()
        .references("cidades.id");
      table
        .integer("estabelecimento_id")
        .unsigned()
        .notNullable()
        .references("estabelecimentos.id");
      table.unique(["cidade_id", "estabelecimento_id"]);
      table.decimal("custo_entrega", 8, 2).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
