import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Produtos extends BaseSchema {
  protected tableName = "produtos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome").notNullable();
      table.string("descricao").nullable();
      table.string("imagem").nullable();
      table.decimal("preco", 10, 2).notNullable();
      table.string("unidade", 3).notNullable();
      table.integer("posicao").notNullable();
      table.boolean("ativo").notNullable().defaultTo(true);
      table
        .integer("categoria_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categorias")
        .onDelete("RESTRICT");
      table.timestamps(true, true);
      table.timestamp("deleted_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
