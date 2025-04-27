const retry = require('./retry');
const log = require('../utils/logger');

async function select(page, selector, value, retries = 3) {
  log.info(`Selecting "${value}" from ${selector}`);
  await retry(() => page.selectOption(selector, value), retries);
}

module.exports = select;
