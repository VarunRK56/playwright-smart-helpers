const retry = require('./retry');
const log = require('../utils/logger');

async function waitForUrl(page, urlFragment, timeout = 5000) {
  log.info(`Waiting for URL to contain: ${urlFragment}`);
  await retry(() =>
    page.waitForFunction(
      fragment => window.location.href.includes(fragment),
      urlFragment,
      { timeout }
    ), 3
  );
}

module.exports = waitForUrl;
