const APITestingFramework = require('../src/framework');

const api = new APITestingFramework('https://api.example.com');

api.test('GET /health should return 200', async () => {
  const response = await api.request('GET', '/health');
  api.expect(response.status).toBe(200);
  api.expect(response.data.status).toBe('ok');
});

api.test('POST /users should create user', async () => {
  const response = await api.request('POST', '/users', {
    name: 'Test User',
    email: 'test@example.com'
  });
  api.expect(response.status).toBe(201);
  api.expect(response.data).toContain('id');
});

api.run().then(results => {
  console.log('Test Results:', results);
});
