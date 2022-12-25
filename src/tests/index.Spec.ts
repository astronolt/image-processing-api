import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

// endpoint testing
describe('Testing endpoint responses', () => {
  it('Checks IMAGES API endpoint', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(200)
  })
})
