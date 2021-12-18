const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const api = supertest(app)

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

describe('When one user exists in database', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('adsljwqLKHIU64!#asd8', 10)
    const user = new User({ username: 'testuser', passwordHash })

    await user.save()
  })

  test('New user can be created', async () => {
    const initialUsers = await usersInDb()

    const newUser = {
      username: 'newuser',
      name: 'New User',
      password: 'newpassword123',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await usersInDb()
    expect(usersAtEnd).toHaveLength(initialUsers.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain('testuser')
    expect(usernames).toContain(newUser.username)
  })

  test('New user can not be created with already existing username', async () => {
    const initialUsers = await usersInDb()

    const newUser = {
      username: 'testuser',
      name: 'New Test User',
      password: 'newpassword1234',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await usersInDb()
    expect(usersAtEnd).toHaveLength(initialUsers.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})