const log = require('../utils/logger');

async function isVisible(page, selector) {
  log.info(`Checking visibility: ${selector}`);
  const el = await page.$(selector);
  if (!el) return false;
  return await el.isVisible();
}

module.exports = isVisible;
