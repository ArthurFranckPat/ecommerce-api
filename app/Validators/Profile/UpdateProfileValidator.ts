import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    firstName: schema.string.optional({ trim: true }, [rules.required()]),
    lastName: schema.string.optional({ trim: true }, [rules.required()]),
    avatar: schema.file.optional({ extnames: ['jpg', 'png', 'jpeg'] }),
    username: schema.string.optional({ trim: true }, [rules.required()]),
    phone: schema.string.optional({ trim: true }, [
      rules.required(),
      rules.minLength(10),
      rules.maxLength(10),
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'profile.username.required': 'Username is required',
    'profile.phone.required': 'Phone is required',
    'profile.phone.minLength': 'Phone must be at least 10 characters',
    'profile.phone.maxLength': 'Phone must be at most 10 characters',
    'profile.avatar.required': 'Avatar is required',
    'profile.firstName.required': 'First Name is required',
    'profile.lastName.required': 'Last Name is required',
  }
}
