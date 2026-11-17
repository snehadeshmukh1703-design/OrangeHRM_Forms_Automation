
import { test, expect } from '@playwright/test';

test('TC03 - Add new employee with dynamic data', async ({ page }) => {
  const uniqueId = Date.now().toString().slice(-8);
  const firstName = `Test${uniqueId}`;
  const lastName = 'Employee';

  // Login
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard\/index/);

  // Navigate to Add Employee
  await page.getByRole('link', { name: 'PIM', exact: true }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await expect(page).toHaveURL(/pim\/addEmployee/);

  // Enter employee details
  const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
  const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });

  await expect(firstNameInput).toBeVisible();

  await firstNameInput.fill(firstName);
  await lastNameInput.fill(lastName);

  
  // Save employee and verify server response
  const saveResponsePromise = page.waitForResponse(response =>
    response.url().includes('/api/v2/pim/employees') &&
    response.request().method() === 'POST'
  );

  await page.getByRole('button', { name: 'Save' }).click();

  const saveResponse = await saveResponsePromise;
  expect(saveResponse.ok()).toBeTruthy();

  // Verify success message
  await expect(page.getByText('Successfully Saved')).toBeVisible();
});


