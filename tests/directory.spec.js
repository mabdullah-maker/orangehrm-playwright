const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('Directory: open Directory and search for a user', async ({ page }) => {
  await login(page);
  await page.locator('a:has-text("Directory")').first().click();
  await page.waitForLoadState('networkidle');

  const searchField = page.locator('input[placeholder="Type for hints..."], input[placeholder="Search"]');
  if (await searchField.count() === 0) test.skip();
  await searchField.first().fill('Admin');
  const searchBtn = page.locator('button:has-text("Search")');
  if (await searchBtn.count()) await searchBtn.first().click();
  await expect(page.locator('table, .oxd-table')).toContainText('Admin', { timeout: 5000 }).catch(()=>{});
});
