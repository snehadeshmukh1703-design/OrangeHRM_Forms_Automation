
import { test, expect } from '@playwright/test';

test('TC04 - Search employee and reset filters', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();

  const employeeId = page.locator('.oxd-input-group')
    .filter({ hasText: /Employee Id/i })
    .locator('input');

  const unknownId = `9${Date.now().toString().slice(-7)}`;
  await employeeId.fill(unknownId);

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('No Records Found', { exact: true }).first())
    .toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(employeeId).toHaveValue('');
  await expect(page.locator('.oxd-table-card').first()).toBeVisible();
});
