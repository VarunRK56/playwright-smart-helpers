const retry = require('./retry');
const log = require('../utils/logger');

async function click(page, selector, retries = 3) {
  log.info(`Clicking on ${selector}`);
  await retry(() => page.click(selector), retries);
}

module.exports = click;
