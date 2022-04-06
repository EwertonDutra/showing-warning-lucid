import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class CreateEstabelecimentos extends BaseSchema {
  protected tableName = "estabelecimentos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.string("nome", 255).notNullable();
      table.string("logo", 255);
      table.boolean("bloqueado").notNullable().defaultTo(false);
      table.boolean("online").notNullable().defaultTo(false);
      table.timestamp("updated_at").notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
