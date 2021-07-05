const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('user stories are returned as json', async () => {
  await api
    .get('/api/userstories')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    
  
})

afterAll(() => {
  mongoose.connection.close()
})