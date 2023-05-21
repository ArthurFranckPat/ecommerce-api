import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Profile from 'App/Models/Profile'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public streetNumber: number

  @column()
  public streetName: string

  @column()
  public city: string

  @column()
  public details: string

  @column()
  public country: string

  @column()
  public zipCode: string

  @column()
  public default: boolean

  @column()
  public profileId: number

  @belongsTo(() => Profile)
  public profile: BelongsTo<typeof Profile>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
