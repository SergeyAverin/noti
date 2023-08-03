import bcrypt from 'bcryptjs'

/**
 * This is a function that hashed the password.
 * @param {string} plaintextPassword - The password before hashing.
 * @returns {Promise<string>} The hashed password.
 */
export async function hashPassword(plaintextPassword: string): Promise<string> {
  const hash = await bcrypt.hash(plaintextPassword, 10)
  return hash
}

/**
 * This is a function that compares the hashed password with the plaintext Password.
 * @param {string} plaintextPassword - The string that is compared to the hashed password.
 * @param {string} hash - The hashed password.
 * @returns {Promise<boolean>} Is hashed password and plaintextPassword equal.
 */
export async function comparePassword(
  plaintextPassword: string,
  hash: string,
): Promise<boolean> {
  const result = await bcrypt.compare(plaintextPassword, hash)
  return result
}
