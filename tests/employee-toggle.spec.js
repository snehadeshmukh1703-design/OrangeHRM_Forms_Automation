
import { test, expect } from '@playwright/test';

test('TC02 - Verify Create Login Details toggle', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  const toggle = page.locator('.oxd-switch-input');

  await toggle.click();

  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.getByText('Confirm Password', { exact: true })).toBeVisible();

  await expect(page.getByText('Enabled', { exact: true })).toBeVisible();
  await expect(page.getByText('Disabled', { exact: true })).toBeVisible();

  await toggle.click();

  await expect(page.getByText('Confirm Password', { exact: true })).toBeHidden();
});
