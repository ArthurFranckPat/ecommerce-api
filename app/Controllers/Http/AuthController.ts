import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)
    const user = await User.create({ ...data })
    return response.json({ user })
  }
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(RegisterValidator)

    const token = await auth.use('api').attempt(email, password)
    return response.json(token)
  }
  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').logout()
    return response.noContent()
  }

  public async getUser({ auth, response }: HttpContextContract) {
    return response.json(auth.user)
    // return response.send('ok')
  }
}
