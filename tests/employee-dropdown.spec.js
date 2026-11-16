
import { test, expect } from '@playwright/test';

test('TC05 - Verify Job Title dropdown filter', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();

  const jobTitle = page.locator('.oxd-input-group')
    .filter({ hasText: 'Job Title' })
    .locator('.oxd-select-text');

  await jobTitle.click();

  const option = page.locator('.oxd-select-dropdown .oxd-select-option').nth(1);
  await expect(option).toBeVisible();

  const selectedTitle = (await option.innerText()).trim();
  await option.click();

  await expect(jobTitle).toContainText(selectedTitle);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText(/Records? Found/i).first()).toBeVisible();
});
