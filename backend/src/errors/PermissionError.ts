export class PermissionError extends Error {
  constructor() {
    super()
    this.name = 'PermissionError'
    this.message = "Bad Request: You don't have permission"
    Object.setPrototypeOf(this, PermissionError.prototype)
  }
}
