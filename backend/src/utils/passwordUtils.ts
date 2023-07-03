import bcrypt from 'bcryptjs'

export async function hashPassword(plaintextPassword: string): Promise<string> {
  const hash = await bcrypt.hash(plaintextPassword, 10)
  return hash
}
