import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')
Route.get('/me', 'AuthController.getUser').middleware(['auth'])

Route.group(() => {
  Route.post('/upload-image', 'ImageUploadsController.store')
  Route.group(() => {
    Route.post('/', 'ProfilesController.store')
    Route.put('/', 'ProfilesController.update')
  }).prefix('profile')

  Route.group(() => {
    Route.get('/', 'AddressesController.index')
    Route.post('/create', 'AddressesController.store')
    Route.put('/:id', 'AddressesController.update')
    Route.delete('/:id', 'AddressesController.destroy')
  }).prefix('address')
})
  .middleware(['auth'])
  .prefix('api')
Route.get('/', async ({ response }: HttpContextContract) => {
  return response.send('Hello World')
})
