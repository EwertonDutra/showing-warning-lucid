import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Categorias extends BaseSchema {
  protected tableName = "categorias";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome").notNullable();
      table.string("descricao");
      table.integer("posicao").notNullable();
      table.boolean("ativo").defaultTo(true).notNullable();
      table
        .integer("estabelecimento_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("estabelecimentos")
        .onDelete("RESTRICT");
      table.timestamps(true, true);
      table.timestamp('deleted_at').nullable()
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
