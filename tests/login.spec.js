const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('login to OrangeHRM demo', async ({ page }) => {
  await login(page);
  // Dashboard header commonly contains "Dashboard"
  await expect(page.locator('text=Dashboard')).toBeVisible({ timeout: 5000 });
});
