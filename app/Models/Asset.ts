import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { AssetTypeEnum } from 'App/Enums/AssetType'
import { AttachmentContract, attachment } from '@ioc:Adonis/Addons/AttachmentLite'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: AssetTypeEnum

  @attachment({ preComputeUrl: true, folder: 'assets' })
  public content: AttachmentContract

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
