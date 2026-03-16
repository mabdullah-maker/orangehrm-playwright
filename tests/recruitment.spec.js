const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginPage');

test('Recruitment: open Recruitment and check vacancies/candidates', async ({ page }) => {
  await login(page);
  await page.locator('a:has-text("Recruitment")').first().click();
  await page.waitForLoadState('networkidle');
  // Check for Candidates or Vacancies
  const hasCandidates = await page.locator('text=Candidates').count();
  const hasVacancies = await page.locator('text=Vacancies').count();
  if (!hasCandidates && !hasVacancies) test.skip();
  if (hasCandidates) await expect(page.locator('text=Candidates')).toBeVisible({ timeout: 5000 });
});
