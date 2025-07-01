import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';


const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const NZVD = JSON.parse(JSON.stringify(require('../dataset/NZVerificationDetails.json')))
const NZCS = JSON.parse(JSON.stringify(require('../dataset/NZCategoryAndSubcategory.json')))
test.setTimeout(60000);

test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and 25 Year Club as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber = '04252095';
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page)
    await test.step('Click Setup', async () => {
        await page.waitForTimeout(7000);

        await home.clcikOnGlobalSearch();
        await home.enterTheCaseNumber(caseNumber);
        await home.clickCaseNumber1(caseNumber);
    });
});