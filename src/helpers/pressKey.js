const retry = require('./retry');
const log = require('../utils/logger');

async function pressKey(page, key, retries = 3) {
  log.info(`Pressing key: ${key}`);
  await retry(() => page.keyboard.press(key), retries);
}

module.exports = pressKey;
