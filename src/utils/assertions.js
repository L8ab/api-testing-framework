class Assertions {
  static equal(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected} but got ${actual}`);
    }
  }
  
  static notEqual(actual, expected, message) {
    if (actual === expected) {
      throw new Error(message || `Expected values to be different`);
    }
  }
  
  static contains(actual, expected, message) {
    if (!actual.includes(expected)) {
      throw new Error(message || `Expected to contain ${expected}`);
    }
  }
  
  static isTrue(value, message) {
    if (value !== true) {
      throw new Error(message || 'Expected value to be true');
    }
  }
  
  static isFalse(value, message) {
    if (value !== false) {
      throw new Error(message || 'Expected value to be false');
    }
  }
}

module.exports = Assertions;
