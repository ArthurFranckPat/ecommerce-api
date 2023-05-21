import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  column,
  beforeSave,
  hasOne,
  HasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { ShopRoleEnum } from 'App/Enums/ShopRole'
import Address from './Address'
import Asset from './Asset'

export default class Shop extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public description: string | null

  @column()
  public phone: string

  @column()
  public role: ShopRoleEnum

  @column()
  public availableBalance: number

  @column()
  public addressId: number

  @hasOne(() => Address)
  public address: HasOne<typeof Address>

  @manyToMany(() => Asset)
  public assets: ManyToMany<typeof Asset>

  @beforeSave()
  public static async hashPassword(shop: Shop) {
    if (shop.$dirty.password) {
      shop.password = await Hash.make(shop.password)
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
