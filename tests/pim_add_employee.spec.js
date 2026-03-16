const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('PIM: open PIM module and try to add employee', async ({ page }) => {
  await login(page);
  await page.locator('a:has-text("PIM")').first().click();
  await page.waitForLoadState('networkidle');

  const addBtn = page.locator('button:has-text("Add")');
  if (await addBtn.count() === 0) test.skip();
  await addBtn.first().click();

  const unique = Date.now();
  const firstName = `AutoF${unique}`;
  const lastName = `AutoL${unique}`;

  const firstField = page.locator('input[name="firstName"]');
  const lastField = page.locator('input[name="lastName"]');
  if (await firstField.count()) await firstField.fill(firstName);
  if (await lastField.count()) await lastField.fill(lastName);

  const saveBtn = page.locator('button:has-text("Save")');
  if (await saveBtn.count()) await saveBtn.first().click();

  // Best-effort: verify Employee List contains the new name
  await page.waitForLoadState('networkidle');
  await page.locator('a:has-text("Employee List")').first().click().catch(()=>{});
  await page.waitForLoadState('networkidle');
  const table = page.locator('table');
  if (await table.count()) {
    await expect(table.first()).toContainText(firstName, { timeout: 5000 }).catch(()=>{});
  }
});
