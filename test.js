const { hashPassword, validatePassword } = require('./src/authme')

const password = 'iloveyou3000'
const hashedPassword = hashPassword(password)

console.log(`Hashed password: ${hashedPassword}`)
console.log(`Valid result: ${validatePassword(password, hashedPassword)}`)
console.log(`Invalid result: ${validatePassword('iloveyou1500', hashedPassword)}`)
