# playwright-smart-helpers

A set of Playwright helper functions with built-in retry logic and simple logging.

## Installation

```bash
npm install playwright-smart-helpers


**Usage**

const { click, type, getText } = require('playwright-smart-helpers');

await click(page, '#submit');
await type(page, '#username', 'john');
const text = await getText(page, '.result');

