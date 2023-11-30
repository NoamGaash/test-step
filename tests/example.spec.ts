import { test } from '@playwright/test';

test('timeout in step', async ({ page }) => {
  await test.step('step 1', async () => {
    await page.goto('https://example.com')
  })
  await test.step('step 2', () =>
    new Promise((resolve) =>
      setTimeout(async () => {
        await page.goto('https://example.com')
        resolve(null)
      }, 1000),
    ))
})