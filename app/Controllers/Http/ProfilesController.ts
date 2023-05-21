import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import CreateProfileValidator from 'App/Validators/Profile/CreateProfileValidator'
import UpdateProfileValidator from 'App/Validators/Profile/UpdateProfileValidator'

export default class ProfilesController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { firstName, lastName, avatar, username, phone } = await request.validate(
      CreateProfileValidator
    )
    const profile = await auth.user?.related('profile').create({
      firstName,
      lastName,
      username,
      phone,
      avatar: avatar && Attachment.fromFile(avatar),
    })
    return response.json(profile)
  }
  public async update({ request, response, auth }: HttpContextContract) {
    const { avatar, ...data } = await request.validate(UpdateProfileValidator)
    const profile = await auth.user?.related('profile').query().first()
    await profile?.merge({
      ...data,
      avatar: avatar && Attachment.fromFile(avatar),
    })

    return response.json(profile)
  }
  public async destroy({}: HttpContextContract) {}
}
