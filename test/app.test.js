const request = require('supertest');
const app = require('../src/index');


describe('Basic endpoints', () => {
test('GET / returns message', async () => {
const res = await request(app).get('/');
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('message');
});


test('GET /health returns 200', async () => {
const res = await request(app).get('/health');
expect(res.statusCode).toBe(200);
});
});