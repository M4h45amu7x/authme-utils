## Description:

This is a JavaScript library designed specifically for the Authme Minecraft Spigot plugin. Its primary function is to hash and validate the passwords of players.

## Features:

<ul>
  <li>Hash passwords</li>
  <li>Validate passwords</li>
</ul>

## Example:

```javascript
const { hashPassword, validatePassword } = require('./src/authme')

const password = 'iloveyou3000'
const hashedPassword = hashPassword(password)

console.log(`Hashed password: ${hashedPassword}`)
console.log(`Valid result: ${validatePassword(password, hashedPassword)}`)
console.log(`Invalid result: ${validatePassword('iloveyou1500', hashedPassword)}`)
```
