import { test } from '@playwright/test';

test('timeout in step', async ({}) => {
  await test.step('my step', async () => {
    await test.step('before timeout', async () => console.log('before timeout'))
    await new Promise((resolve) => 
      setTimeout(async () => {
        await test.step('inside timeout', async () => console.log('inside timeout'))
        resolve(null)
      }, 1000)
    )
    await test.step('after timeout', async () => console.log('after timeout'))
  })
})