import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const VD = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')))
const CS = JSON.parse(JSON.stringify(require('../dataset/CategoryAndSubcategory.json')))
// await page3.locator('iframe[title="Rich Text Area"]').contentFrame().getByRole('paragraph').click();
// await page3.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Content Rich Text Area. Press').fill('﻿Hiu Saravanan\n');
// await page3.getByRole('textbox', { name: '*Word Count After Editing' }).click();
// await page3.getByRole('textbox', { name: '*Word Count After Editing' }).fill('k');
// await page3.getByRole('textbox', { name: '*Word Count Before Editing' }).click();
// await page3.getByRole('textbox', { name: '*Word Count Before Editing' }).fill('k');
// await page3.getByRole('textbox', { name: '*Word Count After Editing' }).click();
// await page3.getByRole('textbox', { name: '*Word Count After Editing' }).fill('9283798');
// await page3.getByRole('textbox', { name: '*Word Count Before Editing' }).click();
// await page3.getByRole('textbox', { name: '*Word Count Before Editing' }).fill('38742');
/*test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Wage Costing Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);

    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        await home.navigationToCase();
        await home.selectListViewedDropdown(testdata.wps);
        caseNumber = await home.wpsGetCaseNumber();
        console.log(caseNumber);
        homePage = await home.hrUserLogin(testdata.nzLoginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Case Verification', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForWoolworthsNZ(testdata.searchWoolworthsNZ);
        await home1.clickOnWoolworthsNZ();
        // await home1.pageReload();
        await home1.clcikOnGlobalSearch();
        await home1.enterTheCaseNumber(caseNumber);
        await home1.caseVerification();

        await homePage.close();
    });
});

test('Verification of ER Case', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);

    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        await home.navigationToCase();
        await home.selectListViewedDropdownER(testdata.er);
        caseNumber = await home.wpsGetCaseNumber();
        console.log(caseNumber);
        homePage = await home.hrUserLogin(testdata.nzLoginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Case Verification', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForWoolworthsNZ(testdata.searchWoolworthsNZ);
        await home1.clickOnWoolworthsNZ();
        // await home1.pageReload();
        await home1.clcikOnGlobalSearch();
        await home1.enterTheCaseNumber(caseNumber);
        await home1.caseVerification();
        await homePage.close();
    });
});   */

test('ER Case', async ({ page }) => {
    await page.goto('https://workbench.developerforce.com/login.php');
    await page.locator('#oauth_env').selectOption('test.salesforce.com')
    await page.locator("[id='termsAccepted']").waitFor({ state: "visible" });
    await page.locator("[id='termsAccepted']").click();
    await page.locator("[id='loginBtn']").waitFor({ state: "visible" });
    await page.locator("[id='loginBtn']").click();
    await page.locator('id=username').fill('ssekar7@tcs.woolworths.com.au.hrprod.wowpsuat')
    await page.locator('id=password').fill('Welcome@3');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByLabel('Jump to:').selectOption('query.php');
    await page.getByLabel('Object:').selectOption('Case');
    await page.getByRole('button', { name: 'Select' }).click();
    await page.locator('#soql_query_textarea').click();
    await page.locator('#soql_query_textarea').click();
    await page.locator('#soql_query_textarea').fill("SELECT CaseNumber, Category__c, Created_Date__c, Status FROM Case WHERE OwnerId = '00G28000000RB6eEAG' AND Created_Date__c ='20250415'  limit 200");
    await page.getByRole('button', { name: 'Query' }).click();
    await page.locator("//table [@id='query_results']//tr[2]/td[2]").waitFor({ state: 'visible' });
    const caseNumber = await page.locator("//table [@id='query_results']//tr[2]/td[2]").textContent();
    const caseNumberTrimmed = caseNumber.trim();
    console.log(caseNumberTrimmed);
    return caseNumberTrimmed;



});










