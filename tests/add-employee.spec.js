
import { test, expect } from '@playwright/test';

test('TC03 - Add new employee with dynamic data', async ({ page }) => {
  const uniqueId = Date.now().toString().slice(-8);
  const firstName = `Test${uniqueId}`;
  const lastName = 'Employee';

  // Login to OrangeHRM
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard\/index/);

  // Navigate to Add Employee
  await page.getByRole('link', { name: 'PIM', exact: true }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  // Locate employee form fields
  const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
  const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });

  await expect(firstNameInput).toBeVisible();

  // Enter dynamic employee details
  await firstNameInput.fill(firstName);
  await lastNameInput.fill(lastName);

  // Verify entered information
  await expect(firstNameInput).toHaveValue(firstName);
  await expect(lastNameInput).toHaveValue(lastName);

  // Save employee
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  // Verify successful save notification
  await expect(page.getByText('Successfully Saved', { exact: true }))
    .toBeVisible({ timeout: 15000 });
});