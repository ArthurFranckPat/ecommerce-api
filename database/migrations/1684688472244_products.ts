import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.integer('category_id').notNullable().references('id').inTable('categories')
      table.integer('shop_id').notNullable().references('id').inTable('shops')
      table.bigInteger('original_price').notNullable()
      table.bigInteger('discount_price').notNullable()
      table.bigInteger('stock').notNullable()
      table.bigInteger('sold_out').notNullable().defaultTo(0)
      table.integer('ratings').nullable()

      //reviews
      //assets
      //categories

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
