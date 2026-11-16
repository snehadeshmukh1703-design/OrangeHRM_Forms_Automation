
import { test, expect } from '@playwright/test';
import path from 'path';

test('TC06 - Attach employee profile photo', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  const filePath = path.join(process.cwd(), 'test-data', 'employee.png');
  const fileInput = page.locator('input[type="file"]');

  await fileInput.setInputFiles(filePath);

  const uploadedFile = await fileInput.evaluate(input => ({
    name: input.files[0].name,
    type: input.files[0].type,
    size: input.files[0].size
  }));

  expect(uploadedFile.name).toBe('employee.png');
  expect(uploadedFile.type).toBe('image/png');
  expect(uploadedFile.size).toBeGreaterThan(0);
  expect(uploadedFile.size).toBeLessThan(1024 * 1024);
});
