const crypto = require('crypto')

const CHARS = '0123456789abcdef'
const SALT_LENGTH = 16

const generateSalt = () => {
	return Array.from({ length: SALT_LENGTH }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
}

const hash = password => {
	return crypto.createHash('sha256').update(password).digest('hex')
}

const hashPassword = (password, salt = generateSalt()) => `$SHA$${salt}$${hash(hash(password) + salt)}`

const validatePassword = (password, hashedPassword) => {
	const [_, __, salt, storedHash] = hashedPassword.split('$')
	return storedHash === hash(`${hash(password)}${salt}`)
}

module.exports = {
	hashPassword,
	validatePassword,
}
