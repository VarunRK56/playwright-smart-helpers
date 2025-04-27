# 🎭 playwright-smart-helpers

Reusable Playwright helper functions with built-in **retry logic**, **smart logging**, and clean APIs.

![npm](https://img.shields.io/npm/v/playwright-smart-helpers)
![license](https://img.shields.io/github/license/yourusername/playwright-smart-helpers)

---

## ✨ Features

- ✅ Reusable helpers for common Playwright tasks
- 🔁 Built-in retry logic for flaky actions
- 🧠 Simple, colored logging via `chalk`
- 📷 Screenshot capture, element waits, dropdowns, and more
- 🎯 Works with any Playwright setup (via peer dependency)

---

## 📦 Installation

```bash
npm install playwright-smart-helpers


🛠️ Available Helpers

Function | Description
click(page, selector) | Click element with retry
type(page, selector, text) | Type text into an input
getText(page, selector) | Get element's text content
isVisible(page, selector) | Check if element is visible
waitForSelector(page, selector) | Wait for an element to appear
waitForUrl(page, partOfUrl) | Wait until URL contains string
screenshot(page, path) | Take a screenshot of the page
select(page, selector, value) | Select a value from a dropdown
pressKey(page, key) | Simulate pressing a keyboard key
retry(fn, retries) | Retry any async function

