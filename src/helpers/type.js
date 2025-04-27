const retry = require('./retry');
const log = require('../utils/logger');

async function type(page, selector, text, retries = 3) {
  log.info(`Typing into ${selector}: "${text}"`);
  await retry(() => page.fill(selector, text), retries);
}

module.exports = type;
