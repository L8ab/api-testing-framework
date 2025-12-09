// Advanced API Testing Example

const APITestingFramework = require('../src/framework');

const api = new APITestingFramework('https://api.example.com');

// Test suite
api.test('Health Check', async () => {
  const response = await api.request('GET', '/health');
  api.expect(response.status).toBe(200);
  api.expect(response.data.status).toBe('ok');
});

api.test('User Creation', async () => {
  const response = await api.request('POST', '/users', {
    name: 'Test User',
    email: 'test@example.com'
  });
  api.expect(response.status).toBe(201);
  api.expect(response.data).toContain('id');
});

api.test('Get User', async () => {
  const response = await api.request('GET', '/users/1');
  api.expect(response.status).toBe(200);
  api.expect(response.data.name).toBe('Test User');
});

// Run tests
api.run().then(results => {
  console.log('\nTest Results:');
  console.log(`Total: ${results.total}`);
  console.log(`Passed: ${results.passed}`);
  console.log(`Failed: ${results.failed}`);
});
