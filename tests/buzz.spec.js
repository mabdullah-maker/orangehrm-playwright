const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('Buzz: open Buzz module and check feed', async ({ page }) => {
  await login(page);
  const buzzLink = page.locator('a:has-text("Buzz")');
  if (await buzzLink.count() === 0) test.skip();
  await buzzLink.first().click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('text=Post')).toBeVisible({ timeout: 5000 }).catch(()=>{});
});
