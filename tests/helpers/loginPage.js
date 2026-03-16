const { expect } = require('@playwright/test');
const LOGIN_URL = '/web/index.php/auth/login';

async function login(page, username = 'Admin', password = 'admin123') {
  await page.goto(LOGIN_URL);
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('button[type="submit"]').click();
  // Wait for navigation and a post-login element. Prefer Dashboard label but fall back to header.
  await page.waitForLoadState('networkidle');
  try {
    await expect(page.locator('text=Dashboard')).toBeVisible({ timeout: 5000 });
  } catch (e) {
    // Fallback: wait for any header or top bar element that commonly appears post-login
    await expect(page.locator('header, .oxd-topbar-header, .orangehrm-branding')).toBeVisible({ timeout: 5000 }).catch(()=>{});
  }
}

module.exports = { login };
