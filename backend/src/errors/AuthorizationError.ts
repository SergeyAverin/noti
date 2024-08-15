export class AuthorizationError extends Error {
  constructor() {
    super()
    this.name = 'AuthorizationError'
    this.message = 'Bad Request: Incorrect email or password'
    Object.setPrototypeOf(this, AuthorizationError.prototype)
  }
}
