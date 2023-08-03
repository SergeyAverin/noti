import connectToMongoDB from '../models/connectToMongoDB'
import { User } from '../models/user.model'

connectToMongoDB()

try {
  new User({
    username: getFlagValue('-u'),
    password: getFlagValue('-p'),
    email: getFlagValue('-e'),
  })
    .save()
    .then(() => {
      console.log(`Created user ${getFlagValue('-u')}`)
      process.exit()
    })
} catch (e) {
  console.log(e.message)
  process.exit(1)
}

/**
 * This is a function get cli flag value by flag name.
 * @param {string} flagName - The flag name.
 * @returns {string} The flag value.
 * @throws {Error} If the divisor is zero.
 */
function getFlagValue(flagName: string): string {
  const flagIndex = process.argv.indexOf(flagName)
  if (flagIndex < 0) {
    throw new Error(`have not ${flagName} flag`)
  }
  return process.argv[flagIndex + 1]
}
