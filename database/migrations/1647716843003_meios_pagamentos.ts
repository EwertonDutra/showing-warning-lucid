import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class MeiosPagamentos extends BaseSchema {
  protected tableName = "meios_pagamentos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome").notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
