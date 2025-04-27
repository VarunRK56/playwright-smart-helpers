const retry = require('./retry');
const log = require('../utils/logger');

async function getText(page, selector, retries = 3) {
  log.info(`Getting text from ${selector}`);
  return await retry(async () => {
    const el = await page.$(selector);
    if (!el) throw new Error(`Element not found: ${selector}`);
    return await el.textContent();
  }, retries);
}

module.exports = getText;
