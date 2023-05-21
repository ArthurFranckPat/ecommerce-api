import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Review from './Review'
import Asset from './Asset'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public categoryId: number

  @column()
  public shopId: number

  @column()
  public originalPrice: number

  @column()
  public discountPrice: number

  @column()
  public stock: number

  @column()
  public soldOut: number

  @column()
  public ratings: number

  @hasMany(() => Review)
  public reviews: HasMany<typeof Review>

  @hasMany(() => Asset)
  public assets: HasMany<typeof Asset>

  @manyToMany(() => Category)
  public categories: ManyToMany<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
