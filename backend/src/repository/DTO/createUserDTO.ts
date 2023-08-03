export class СreateUserDTO {
  constructor(
    readonly username: string,
    readonly email: string,
    readonly password: string
  ) {}
}
