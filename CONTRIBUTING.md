# Contributing

Thanks for contributing! This repository includes Playwright tests for the OrangeHRM demo site. Quick contributor guide:

1. Environment
   - Node.js 18+ is recommended.
   - Install dependencies: `npm ci`
   - Install Playwright browsers: `npx playwright install --with-deps`

2. Running tests locally
   - Run full suite: `npx playwright test`
   - Run a single spec: `npx playwright test tests/login.spec.js`
   - Open Playwright test runner UI: `npx playwright show-report` after a run

3. Writing tests
   - Place specs under `tests/` with `.spec.js` suffix.
   - Use `tests/helpers/loginPage.js` helper for authentication flows.

4. CI
   - A GitHub Actions workflow runs the tests on pushes and PRs to `main`.

5. Issues & PRs
   - Open an issue for flaky selectors or test failures.
   - Create a branch, add tests/fixes, open a PR against `main` and reference the issue.

Thanks — maintaining test reliability is a community effort.
