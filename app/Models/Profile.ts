import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Address from 'App/Models/Address'
import Asset from './Asset'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public username: string

  @column()
  public phone: string | null

  @column()
  public userId: number

  @column()
  public assetId: number

  @hasOne(() => Asset)
  public avatar: HasOne<typeof Asset>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => Address)
  public addresses: ManyToMany<typeof Address>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
