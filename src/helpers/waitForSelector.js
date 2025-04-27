const retry = require('./retry');
const log = require('../utils/logger');

async function waitForSelector(page, selector, timeout = 5000) {
  log.info(`Waiting for selector: ${selector}`);
  await retry(() => page.waitForSelector(selector, { timeout }), 3);
}

module.exports = waitForSelector;
