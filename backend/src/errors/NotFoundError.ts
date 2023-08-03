export class NotFoundError extends Error {
  constructor() {
    super()
    this.name = 'NotFoundError'
    this.message = 'Not Found'
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}
