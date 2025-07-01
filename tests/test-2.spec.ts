import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://peopleservices--wowpsuat.sandbox.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fpeopleservices--wowpsuat.sandbox.lightning.force.com%252Flightning%252Fr%252FAccount%252F001Bn00000WI1FGIA1%252Fview%253Fws%253D%25252Flightning%25252Fr%25252FEmployee__c%25252Fa2lBn000000iN5lIAE%25252Fview');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ssekar7@tcs.woolworths.com.au.hrprod.wowpsuat');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@5');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto('https://peopleservices--wowpsuat.sandbox.lightning.force.com/lightning/r/Account/001Bn00000WI1FGIA1/view?ws=%2Flightning%2Fr%2FEmployee__c%2Fa2lBn000000iN5lIAE%2Fview');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('button', { name: 'Setup' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Setup Opens in a new tab Setup for current app' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('combobox', { name: 'Search Setup' }).click();
  await page1.getByRole('option', { name: 'Saravanan Comms User' }).click();
  await page1.locator('iframe[name="vfFrameId_1750218010406"]').contentFrame().getByRole('row', { name: 'User Detail Edit Sharing' }).locator('input[name="login"]').click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Go Mobile may open in a new' }).click();
  const page2 = await page2Promise;
  await page1.getByRole('link', { name: 'Knowledge' }).click();
  await page1.getByRole('button', { name: 'Close', exact: true }).click();
  await page1.getByRole('button', { name: 'New' }).click();
  await page1.locator('#brandBand_3').getByText('Event').click();
  await page1.getByRole('button', { name: 'Close This Dialog' }).click();
});