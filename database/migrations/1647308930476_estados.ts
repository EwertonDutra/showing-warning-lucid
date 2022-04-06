import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Estados extends BaseSchema {
  protected tableName = "estados";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome").notNullable();
      table.string("uf", 2).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
