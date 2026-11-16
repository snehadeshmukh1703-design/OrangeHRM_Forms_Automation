
import { test, expect } from '@playwright/test';

test('TC01 - Validate mandatory employee fields', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Required', { exact: true })).toHaveCount(2);
});
