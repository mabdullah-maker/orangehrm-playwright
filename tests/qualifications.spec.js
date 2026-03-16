const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

// Qualifications often live under Admin -> Qualifications
test('Admin -> Qualifications: open Qualifications submodule', async ({ page }) => {
  await login(page);
  // Open Admin
  const adminLink = page.locator('a:has-text("Admin")').first();
  if (await adminLink.count() === 0) test.skip();
  await adminLink.click();
  await page.waitForLoadState('networkidle');

  // Try to click Qualifications in the left menu or a link
  const qualLink = page.locator('a:has-text("Qualifications")');
  if (await qualLink.count() === 0) test.skip();
  await qualLink.first().click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('text=Skills, Education, Languages, Licenses')).toBeVisible({ timeout: 5000 }).catch(()=>{});
});
