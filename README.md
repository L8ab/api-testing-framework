# API Testing Framework

A lightweight, easy-to-use framework for API testing.

## Features

- Simple test syntax
- HTTP request handling
- Assertion utilities
- Test runner
- Example tests included

## Tech Stack

- **Language**: Node.js
- **Testing**: Custom framework

## Project Structure

\`\`\`
api-testing-framework/
├── src/
│   ├── framework.js     # Core framework
│   └── utils/           # Assertions
├── examples/            # Example tests
└── package.json
\`\`\`

## Usage

\`\`\`bash
npm test
\`\`\`

## Example

\`\`\`javascript
const api = new APITestingFramework('https://api.example.com');

api.test('GET /health', async () => {
  const response = await api.request('GET', '/health');
  api.expect(response.status).toBe(200);
});
\`\`\`

---

**POWERED BY L8AB SYSTEMS**
