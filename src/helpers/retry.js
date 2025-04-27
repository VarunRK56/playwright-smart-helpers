const log = require('../utils/logger');

async function retry(fn, retries = 3, delay = 500) {
  let lastError;
  for (let i = 1; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      log.warn(`Attempt ${i} failed: ${err.message}`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw lastError;
}

module.exports = retry;
