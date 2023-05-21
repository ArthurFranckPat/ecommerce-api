import { Attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AssetTypeEnum } from 'App/Enums/AssetType'

export default class ImageUploadsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const profile = await auth.user?.related('profile').query().first()

    const images = request.files('images', {
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const imgs: AttachmentContract[] = []
    images.map(async (img) => {
      await profile?.related('assets').create({
        type: AssetTypeEnum.IMAGE,
        content: Attachment.fromFile(img),
      })
    })
    return response.json(profile)
  }
}
