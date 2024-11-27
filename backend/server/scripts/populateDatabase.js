const axios = require('axios')
const signupApi = 'https://argentbank-website-cy5b.onrender.com/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain'
  }
]

const createUser = async (user) => {
  try {
    const response = await axios.post(signupApi, user)
    console.log(`User ${user.email} created successfully`)
  } catch (error) {
    console.error(`Error creating user ${user.email}:`, error.message)
  }
}

const populateDb = async () => {
  for (const user of users) {
    await createUser(user)
  }
}

populateDb()
