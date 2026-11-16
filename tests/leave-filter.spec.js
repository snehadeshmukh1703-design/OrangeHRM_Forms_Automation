
import { test, expect } from '@playwright/test';

test('TC07 - Verify Leave Date Filters', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Leave', exact: true }).click();
  await page.getByRole('link', { name: 'Leave List' }).click();

  const fromDate = page.locator('.oxd-date-input input').nth(0);
  const toDate = page.locator('.oxd-date-input input').nth(1);

  
  await fromDate.fill('2026-01-01');
  await fromDate.press('Tab');

  await toDate.fill('2026-31-12');
  await toDate.press('Tab');

  await expect(fromDate).toHaveValue('2026-01-01');
  await expect(toDate).toHaveValue('2026-31-12');

  const responsePromise = page.waitForResponse(response =>
    response.url().includes('/api/v2/leave/employees/leave-requests') &&
    response.url().includes('fromDate=2026-01-01') &&
    response.url().includes('toDate=2026-12-31')
  );

  await page.getByRole('button', { name: 'Search' }).click();

  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();
});
