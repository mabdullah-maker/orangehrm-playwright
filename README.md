# OrangeHRM Playwright Automation

![Playwright Tests](https://github.com/mabdullah-maker/orangehrm-playwright/actions/workflows/playwright.yml/badge.svg?branch=main)

This project automates login and several post-login features of the OrangeHRM demo site using Playwright Test.

Credentials used by tests:
- Username: `Admin`
- Password: `admin123`

Quick setup and run:

```bash
cd /workspace/orangehrm-playwright
npm ci
npx playwright install --with-deps
npx playwright test
```

Files of interest:
- `playwright.config.js` - Playwright configuration
- `tests/helpers/loginPage.js` - login helper
- `tests/*.spec.js` - test specs for modules

Notes:
- The demo site changes occasionally; selectors are written as best-effort. If a selector fails, inspect the site and adjust the corresponding test in `tests/`.

Running the test suite locally requires Node.js 18+ and the Playwright browsers (installed above). See `CONTRIBUTING.md` for contributor instructions.
