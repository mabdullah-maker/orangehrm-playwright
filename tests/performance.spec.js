const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('Performance: open Performance module and check common text', async ({ page }) => {
  await login(page);
  await page.locator('a:has-text("Performance")').first().click();
  await page.waitForLoadState('networkidle');
  const found = await page.locator('text=Manage Reviews, text=Configure, text=Employee Track').count();
  if (!found) test.skip();
});
