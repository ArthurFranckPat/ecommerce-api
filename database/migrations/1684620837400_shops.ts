import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { ShopRoleEnum } from 'App/Enums/ShopRole'

export default class extends BaseSchema {
  protected tableName = 'shops'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 180).notNullable()
      table.string('email', 180).notNullable().unique()
      table.string('password', 180).notNullable()
      table.text('description')
      table.string('phone').notNullable()
      table.string('role').defaultTo(ShopRoleEnum.SELLER).notNullable()
      table.integer('available_balance').notNullable().defaultTo(0)
      table.integer('address_id').references('addresses.id').onDelete('CASCADE')

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
