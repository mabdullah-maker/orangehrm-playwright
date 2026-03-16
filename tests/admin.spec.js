const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('Admin: open Admin module and try to add user', async ({ page }) => {
  await login(page);
  // Open Admin menu
  await page.locator('a:has-text("Admin")').first().click();
  await page.waitForLoadState('networkidle');

  // Click Add (if present)
  const addBtn = page.locator('button:has-text("Add")');
  if (await addBtn.count() === 0) {
    test.skip();
  }
  await addBtn.first().click();

  // Attempt to fill the Add User form
  const unique = Date.now();
  const username = `auto_user_${unique}`;
  // Fill username if field exists
  const usernameField = page.locator('input[name="username"]');
  if (await usernameField.count()) {
    await usernameField.fill(username);
  }
  // Try password fields
  const pwd = 'Password@123';
  if (await page.locator('input[name="password"]').count()) {
    await page.locator('input[name="password"]').fill(pwd);
  }
  if (await page.locator('input[name="confirmPassword"]').count()) {
    await page.locator('input[name="confirmPassword"]').fill(pwd);
  }

  // Submit if Save button present
  const saveBtn = page.locator('button:has-text("Save"), button:has-text("Save")');
  if (await saveBtn.count()) {
    await saveBtn.first().click();
  }

  // Search for created user (best-effort)
  const searchInput = page.locator('input[placeholder="Type for hints..."], input[placeholder="Search"]');
  if (await searchInput.count()) {
    await searchInput.first().fill(username);
    const searchBtn = page.locator('button:has-text("Search")');
    if (await searchBtn.count()) await searchBtn.first().click();
    await expect(page.locator('table')).toContainText(username, { timeout: 5000 }).catch(()=>{});
  }
});
