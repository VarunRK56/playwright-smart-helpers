const log = require('../utils/logger');

async function screenshot(page, path = 'screenshot.png') {
  log.info(`Taking screenshot: ${path}`);
  await page.screenshot({ path });
}

module.exports = screenshot;
