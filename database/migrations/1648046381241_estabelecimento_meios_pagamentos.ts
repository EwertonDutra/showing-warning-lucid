import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class EstabelecimentoMeiosPagamentos extends BaseSchema {
  protected tableName = "estabelecimento_meios_pagamentos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("estabelecimento_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("estabelecimentos");
      table
        .integer("meio_pagamento_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("meios_pagamentos");
      table.string("instrucao").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
