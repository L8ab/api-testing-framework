class APITestingFramework {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.tests = [];
    this.results = [];
  }
  
  async request(method, endpoint, data = null, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      
      return {
        status: response.status,
        data: responseData,
        headers: Object.fromEntries(response.headers.entries())
      };
    } catch (error) {
      return {
        error: error.message
      };
    }
  }
  
  test(name, testFn) {
    this.tests.push({ name, fn: testFn });
  }
  
  async run() {
    for (const test of this.tests) {
      try {
        await test.fn();
        this.results.push({ name: test.name, status: 'passed' });
      } catch (error) {
        this.results.push({ name: test.name, status: 'failed', error: error.message });
      }
    }
    
    return {
      total: this.tests.length,
      passed: this.results.filter(r => r.status === 'passed').length,
      failed: this.results.filter(r => r.status === 'failed').length,
      results: this.results
    };
  }
  
  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error(`Expected ${expected} but got ${actual}`);
        }
      },
      toEqual: (expected) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error('Values are not equal');
        }
      },
      toContain: (expected) => {
        if (!actual.includes(expected)) {
          throw new Error(`Expected to contain ${expected}`);
        }
      }
    };
  }
}

module.exports = APITestingFramework;
