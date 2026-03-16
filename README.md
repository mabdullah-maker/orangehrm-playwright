# OrangeHRM Playwright Automation

This project automates login and several post-login features of the OrangeHRM demo site using Playwright Test.

Credentials used by tests:
- Username: `Admin`
- Password: `admin123`

Setup and run:

```bash
cd /workspace/orangehrm-playwright
npm install
npx playwright install
npm test
```

Files of interest:
- `playwright.config.js` - Playwright configuration
- `tests/helpers/loginPage.js` - login helper
- `tests/*.spec.js` - test specs for modules

Notes:
- The demo site changes occasionally; selectors are written as best-effort. If a selector fails, inspect the site and adjust the corresponding test in `tests/`.
