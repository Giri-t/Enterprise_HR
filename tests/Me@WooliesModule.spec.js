import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';
import { getFormattedDateTime } from '../utils/getFormattedDateTime';
const { chromium } = require('playwright');


const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const VD = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')))

const CS = JSON.parse(JSON.stringify(require('../dataset/CategoryAndSubcategory.json')))
// test.describe.configure({ mode: 'parallel' });
test.setTimeout(3000000);

// For You Moduule
test('TC1,TC2,TC3,TC5,TC6,TC7,TC8,TC9,TC16,TC17 - Verify whether every user who have access to TeamSpace can see the news feed section in Home Page (For You and All News Section)', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Login a Team Member user', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify On ForYou Section', async () => {
        await woolies.verifyForYouAndAllewsFeild();
        await woolies.checkingForYouColour();
        await woolies.checkingAllNewColour();
        await woolies.verifyArticleDateAndAuthorName();
        await woolies.verifyForYouTabArticlesCount();
        await woolies.verifyPinnedIcon();
        await woolies.verifictionOFViewMoreOptionAndArrowIconForForYou();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_ForYou.png`, fullPage: true });
        await woolies.clickOnViewMoreOption();
        const timestamp1 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp1}_ForYouViewMore.png`, fullPage: true });
        await woolies.clickOnHomePage();
        await woolies.clickOnAllNews()
        // await woolies.clickingAndVerifyingAllNews();
        // await woolies.verifingForYouColour();
        await woolies.verifyAllNewsArticleDateAndAuthorName();
        await woolies.verifyAllNewsPinnedIcon();
        await woolies.verifyAllNewsPinnedArticleListCount();
        await woolies.verifyAllNewsTabArticlesCount();
        const timestamp2 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp2}_AllNews.png`, fullPage: true });
        await woolies.verifictionOFViewMoreOptionAndArrowIconForAllNews();
        await woolies.clickOnHomePage();
    });
});
test('TC11 - Verify whether Personalised (Distribution list Driven) Articles are displayed as priority in the For You section', async ({ page }) => {
    let homePage, wooliesPage, homePage1, homePage2, wooliesPage1;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Login a Comms User', async () => {
        homePage = await home.userLogin(testdata.commsUser)

    });
    const home1 = new HomePage(homePage);
    await test.step('Artcle Creation in Knwonledge Tab', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.popUpClose();
        await home1.closeAllTabs();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.articleCreation(testdata.fillTitleField4, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home1.pulishAndPinnedArticle();
        await home1.popUpClose();
        await home1.clickOnKnowledgeArticleAudienceEditButton(testdata.dLUser);
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        await home1.popUpClose();
        await home1.clickOnUserLogout();
        homePage1 = await home1.againUserLogin(testdata.forYouUser)
    });

    const home2 = new HomePage(homePage1);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify On Article is not visible in ForYou Section', async () => {
        await woolies.verificationOfDLarticleisNotVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_DLArticleIsNotVisible.png`, fullPage: true });
        await wooliesPage.close();
    });
    const home3 = new HomePage(homePage);
    await test.step('Login NZ User', async () => {
        await home3.clickOnCancelAndClosePopUp();
        await home3.clickOnUserLogout();
        await home3.clickONUserSearch();
        homePage2 = await home3.againUserLogin(testdata.nzUser);
    });
    const home4 = new HomePage(homePage2);
    await test.step('Navigate to Me@Woolies', async () => {
        await home4.popUpClose();
        await home4.clickOnAppLauch();
        await home4.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage1 = await home4.clickOnMeAtWoolies();
    });

    const woolies1 = new MeAtWooliesPage(wooliesPage1);
    await test.step('Verify on Article is visible in ForYou Section', async () => {
        await woolies1.verificationOfDLArticleIsVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage1.screenshot({ path: `screenshot/${timestamp}_DLArticleIsVisible.png`, fullPage: true });


    });

});
test('TC22,TC33,TC28,TC29 - Verify whether if user is having both 2 weeks ahead post and 1 day before post, the 1 day post takes priority over 2 weeks ahead post for Service Anniversary', async ({ }) => {
    const userDataDir = "C:\\Users\\1238477\\AppData\\Local\\Google\\Chrome\\User Data\\Default";
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // adjust path
        args: [
            `--profile-directory=Profile 1`
        ]
    });
    const page = await context.newPage();
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a employee id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheCaseNumber(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid)
        await home.clickOnEditButton();
        await home.clearOnEmployeeDOBFeild();
        await home.filleTheEmployeeDOBFeild(testdata.employeeDOBTwoWeeksBefore);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.clearOnEmployeeStartDateFeild();
        await home.filleTheEmployeeStartDateFeild(testdata.EmployeeStartDateTwoWeeksBefore)
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
        homePage = await home.forYouUserLogin(testdata.forYouUser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnCancelAndClosePopUp();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Birthday and Anniversary article in ForYou Section', async () => {
        await woolies.verifyBirthdayArticle();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_BirthdayArticle.png`, fullPage: true });
        await woolies.clickOnBirthdayArticle();
        await woolies.verifyUpcomingBirthdayArticle();
        const timestamp1 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp1}_UpcomingBirthdayArticle.png`, fullPage: true });
        await woolies.clickOnAnnaveraryAndBirthdayBackButton();
        await woolies.verifyanniverysaryArticle();
        await woolies.clickOnanniversaryArticle();
        await woolies.verifyUpcomingAnniversaryArticle();
        const timestamp2 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp2}_UpcomingAnniversaryArticle.png`, fullPage: true });
        await woolies.ClickOnTipsToCelebrate();
    });
});
test('TC33 - Verify whether if user is having both 2 weeks ahead post and 1 day before post, the 1 day post takes priority over 2 weeks ahead post for Birthday', async ({ page }) => {
    let homePage, homePage1
        , wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a employee id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.employeeDOBCurrentDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.clearOnEmployeeStartDateFeild();
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.secondEmployeeId);
        await home.selectOnEmployeeId(testdata.secondEmployeeId);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.Tomorrowemployeedob);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.clearOnEmployeeStartDateFeild();
        await home.clickOnSaveButton();
        const timestamp1 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp1}_Employee2.png`, fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.thirdEmployeeId);
        await home.selectOnEmployeeId(testdata.thirdEmployeeId);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.employeeDOBTwoWeeksBefore);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.clearOnEmployeeStartDateFeild();
        await home.clickOnSaveButton();
        const timestamp3 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp3}_Employee3.png`, fullPage: true });
        homePage = await home.forYouUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Birthday Article Count in ForYou Section', async () => {
        await woolies.VerifyOnForYouBirthdayArticleCount();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_ForYouBirthdayArticle.png`, fullPage: true });

    });
});

test('TC22 - Verify whether if user is having both 2 weeks ahead post and 1 day before post, the 1 day post takes priority over 2 weeks ahead post for Service Anniversary', async ({ page }) => {
    let homePage, homePage1
        , wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a employee id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheCaseNumber(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid);
        await home.clickOnEditButton();
        await home.clearOnEmployeeDOBFeild();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.employeeStartDateAsCurrentDate)
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.secondEmployeeId);
        await home.selectOnEmployeeId(testdata.secondEmployeeId);
        await home.clickOnEditButton();
        await home.clearOnEmployeeDOBFeild();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.tomorrowEmployeeStartDate);
        await home.clickOnSaveButton();
        const timestamp1 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp1}_Employee2.png`, fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.thirdEmployeeId);
        await home.selectOnEmployeeId(testdata.thirdEmployeeId);
        await home.clickOnEditButton();
        await home.clearOnEmployeeDOBFeild();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.EmployeeStartDateTwoWeeksBefore);
        await home.clickOnSaveButton();
        const timestamp3 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp3}_Employee3.png`, fullPage: true });
        homePage = await home.forYouUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Anniversary article count in ForYou Section', async () => {
        await woolies.VerifyOnForYouAnniversaryArticleCount();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_ForYouAnniversaryArticle.png`, fullPage: true });

    });
});
test('TC23,TC34 - Verify the line manager should NOT receive an automated post in their for you section 2 weeks before the direct reports(Contrators) Anniversary and birthday', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a employee id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid)
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.employeeDOBTwoWeeksBefore);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupO);
        await home.filleTheEmployeeStartDateFeild(testdata.EmployeeStartDateTwoWeeksBefore)
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
        homePage = await home.forYouUserLogin(testdata.forYouUser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnCancelAndClosePopUp();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify On Birthday and anniversary article is not visible in ForYou Section', async () => {
        await woolies.verifyOnAnniverysaryIsNotVisible();
        await woolies.verifyOnBirthdayIsNotVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_AnniversaryAndBirthdayNotVisible.png`, fullPage: true });
    });
});
test('TC26,TC37 - Verify if 2+ service anniversaries on the same day then header of the post will be " X team members have service anniversaries and birthday  on the [date]" if there is 2 or more TM', async ({ page }) => {
    let homePage, homePage1
        , wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a Employee id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.employeeDOBTwoWeeksBefore);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.EmployeeStartDateTwoWeeksBefore);
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
    });
    const home1 = new HomePage(page);
    await test.step('Search a Employee id', async () => {
        await home1.closeAllTabs();
        await home1.clcikOnGlobalSearch();
        await home1.enterTheValueInGlobalSearch(testdata.secondEmployeeId);
        await home1.selectOnEmployeeId(testdata.secondEmployeeId);
        await home1.clickOnEditButton();
        await home1.filleTheEmployeeDOBFeild(testdata.employeeDOBTwoWeeksBefore);
        await home1.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home1.filleTheEmployeeStartDateFeild(testdata.EmployeeStartDateTwoWeeksBefore);
        await home1.clickOnSaveButton();
        const timestamp1 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp1}_Employee2.png`, fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.thirdEmployeeId);
        await home.selectOnEmployeeId(testdata.thirdEmployeeId);
        await home.clickOnEditButton();
        await home.clearOnEmployeeDOBFeild();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.pastDate);
        await home.clickOnSaveButton();
        const timestamp2 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp2}_Employee3.png`, fullPage: true });
        homePage = await home1.forYouUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Two Teammember Anniversary and Birthday Article in ForYou section', async () => {
        await woolies.verifyTwoTeamMembersAnniversaryArticle();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_TwoTeamMembersAnniversaryArticle.png`, fullPage: true });
        await woolies.ClickOnTwoTeamMembersAnniversaryArticle();
        const timestamp1 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp1}_TwoTeamMembersAnniversaryArticlePage.png`, fullPage: true });
        await woolies.verifyUpcomingAnniversaryArticle();
        await woolies.clickOnAnnaveraryAndBirthdayBackButton();
        await woolies.verifyTwoTeamMembersBirthdayArticle();
        const timestamp2 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp2}_TwoTeamMembersBirthdayArticle.png`, fullPage: true });
        await woolies.ClickOnTwoTeamMembersBirthdayArticle();
        const timestamp3 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp3}_TwoTeamMembersBirthdayArticlePage.png`, fullPage: true });
        await woolies.verifyUpcomingBirthdayArticle();
    });
});
test('TC10 - Verify the automated posts for line manager in the "for you" section as followed by "Onboarding Post → 1 Pinned news article → Anniversaries → Birthdays → Normal comms Article"', async ({ page }) => {
    let homePage, homePage1
        , wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Search a Employee Id', async () => {
        await home.clickOnAppLauch();
        await home.searchForPeopleServices(testdata.searchPeopleServices);
        await home.clickOnPeopleServices();
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.employeeid);
        await home.selectOnEmployeeId(testdata.employeeid);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.employeeStartDateAsCurrentDate);
        await home.clickOnSaveButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_Employee.png`, fullPage: true });
        // await page.screenshot({ path: 'screenshot/' + Date.now() + '_Employee.png', fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.secondEmployeeId);
        await home.selectOnEmployeeId(testdata.secondEmployeeId);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.pastDate);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.tomorrowEmployeeStartDate);
        await home.clickOnSaveButton();
        const timestamp1 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp1}_Employee2.png`, fullPage: true });
        // await page.screenshot({ path: 'screenshot/' + Date.now() + '_Employee2.png', fullPage: true });
        await home.closeAllTabs();
        await home.clcikOnGlobalSearch();
        await home.enterTheValueInGlobalSearch(testdata.thirdEmployeeId);
        await home.selectOnEmployeeId(testdata.thirdEmployeeId);
        await home.clickOnEditButton();
        await home.filleTheEmployeeDOBFeild(testdata.Tomorrowemployeedob);
        await home.filleTheEmployeeGroupFeild(testdata.employeeGroupF);
        await home.filleTheEmployeeStartDateFeild(testdata.pastDate);
        await home.clickOnSaveButton();
        const timestamp3 = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp3}_Employee3.png`, fullPage: true });
        // await page.screenshot({ path: 'screenshot/' + Date.now() + '_Employee3.png', fullPage: true });
        homePage = await home.forYouUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify On Article Orders in ForYou Section', async () => {
        await woolies.CheckOnAsendingOrderOfArticle();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_AsendingOrderOfArticle.png`, fullPage: true });
        // await wooliesPage.screenshot({ path: 'screenshot/' + Date.now() + '_AsendingOrderOfArticle.png', fullPage: true });

    });
});
test('TC17,TC30 - Verify the teamspace user able to click on a created item/article and navigating to the detailed/full view of the article in news page.', async ({ page }) => {
    let homePage, wooliesPage, homePage1;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Login a comms user', async () => {
        homePage = await home.userLogin(testdata.commsUser)

    });
    const home1 = new HomePage(homePage);
    await test.step('Article creation in Knowledge Tab', async () => {
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.popUpClose();
        await home1.natToKnowledge()
        await home1.closeAllTabs();
        await home1.clickOnNewButton();
        await home1.clickOnNextButton();
        await home1.articleCreation(testdata.fillTitleField, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home1.popUpClose();
        await home1.pulishAndPinnedArticle();
        await home1.pinnedArticle();
        // await home1.popUpClose();
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        // await homePage.screenshot({ path: 'screenshot/' + Date.now() + '_ArticleCreation.png', fullPage: true });
        await home1.popUpClose();
        await home1.clickOnUserLogout();
        homePage1 = await home1.againUserLogin(testdata.forYouUser)
    });

    const home2 = new HomePage(homePage1);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Lastest Article in ForYou Section', async () => {
        await woolies.verificationOnLatestArticlePinned();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_LatestArticlePinned.png`, fullPage: true });
        // await wooliesPage.screenshot({ path: 'screenshot/' + Date.now() + '_LatestArticlePinned.png', fullPage: true });
        await woolies.clickOnPinnedArticle();
        await woolies.verifyOnPinnedArticlePage();
        const timestamp1 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp1}_PinnedArticlePage.png`, fullPage: true });
    });
});

//New Page Module
test('TC1,TC2,TC4,TC5,TC6,TC7,TC9,TC10,TC11,TC12,TC13,TC14,TC15 - Verify whether everyone who have access to TeamSpace can see the News tab.', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Login a Team Member ', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on NewsPage', async () => {
        await woolies.clickOnNewPage();
        await woolies.VerifyOnNewPagePinnedArticleCount();
        await woolies.VerifyOnArticleCountInFirstSection();
        await woolies.VerifyOnArticleCountFirstSectionAndFirstRow();
        await woolies.verifyOnPulishedDateAndPulishedName();
        await woolies.verifyOnFirstSectionAndSecondRowInNewPage();
        await woolies.VerifyOnCustomerFirstSection();
        await woolies.verifyOnAllNewsSection();
        await woolies.verifyOnSecondSectionArticleCount();
        await woolies.clickOnShowMoreOption();
        await woolies.verifyOnSecondSectionArticleCountwhenClickOnShowMore()
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_NewsPage.png`, fullPage: true });
        await woolies.fillTheValueInArticleSearch(testdata.ArticleSearch);
        const timestamp1 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp1}_ArticleSearch.png`, fullPage: true });
        await woolies.clickOnSearchedArticle();
        const timestamp2 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp2}_SearchedArticle.png`, fullPage: true });
        await woolies.verifyOnPinnedArticlePage();
        await woolies.clickOnAnnaveraryAndBirthdayBackButton();
        await woolies.VerifyOnNewPagePinnedArticleCount();
        // await woolies.clickOnAnnaveraryAndBirthdayBackButton();
        await woolies.clickOnPulishedDate();
        await woolies.fillThePulishedStartDate(testdata.pulishedStartDate);
        await woolies.fillThePulishedEndDate(testdata.publishedEndDate);
        await woolies.clickOnPulishedFilterButton();
        const timestamp3 = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp3}_PulishedDateFilter.png`, fullPage: true });
        await woolies.clickOnPulishedDate();
        await woolies.clickOnPulishedClearButton();
    });
});
test('TC19 - Verify if system admin user created article, it wont be visible in News section', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Article creation in knowledge Tab', async () => {
        await home.clickOnAppLauch();
        await home.navigationToCommsManager(testdata.searchCommsManager);
        // await home.popUpClose();
        await home.natToKnowledge()
        await home.clickOnNewButton();
        await home.clickOnNextButton();
        await home.articleCreation(testdata.fillTitleField1, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home.clickOnPulishedButton();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        homePage = await home.userLogin(testdata.loginuser)
    });

    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Article title in News Page Section', async () => {
        await woolies.clickOnNewPage();
        await woolies.verifyOnArticleTitleIsVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_ArticleTitleIsVisible.png`, fullPage: true });
    });
});
test('TC20 - Verify if system admin user pinned article it will display in News section', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Artcle creartion in Knowledge Tab', async () => {
        await home.clickOnAppLauch();
        await home.navigationToCommsManager(testdata.searchCommsManager);
        await home.closeAllTabs();
        // await home.popUpClose();
        await home.natToKnowledge()
        await home.clickOnNewButton();
        await home.clickOnNextButton();
        await home.articleCreation(testdata.fillTitleField2, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home.pulishAndPinnedArticle();
        await home.pinnedArticle();
        const timestamp = getFormattedDateTime();
        await page.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        homePage = await home.userLogin(testdata.loginuser)
    });

    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Article is visible in News Page Section', async () => {
        await woolies.clickOnNewPage();
        await woolies.verifyOnRecentArticleTitleISVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_RecentArticleTitleISVisible.png`, fullPage: true });
    });
});
test('TC23,TC24,TC27,TC30,TC31,TC32,TC33,TC34 - Verify comms user able to create article from Knowledge Tab in salesforce.', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)
    }
    );
    const home1 = new HomePage(homePage);
    await test.step('Artcle creation in knowledge', async () => {
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.closeAllTabs()
        // await home.popUpClose();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.knowledgeArticleSaveButton();
        await home1.verifyOnKnowledgeArticleCreationErrorMessage();
        await home1.closeKnowledgeArticleErrorPopup();
        await home1.articleCreation(testdata.fillTitleField3, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home1.popUpClose();
        await home1.pinnedArticle();
        await home1.unpinnedArticle();
        await home1.fileUploadForArticleCreation();
        // const timestamp = getFormattedDateTime();
        // await homePage.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        await home1.editAsDraftArticle();
        await home1.popUpClose();
        // await home1.clickOnEditAsDrafButton();
        // await home.popUpClose();
        await home1.clickOnPulishedButton();
        await home1.verfiyOnKnownledgeArticleLimitedPopupMessage();
        await home1.verifyOnCloneButton();
        await home1.verifyOnArchieButton();
        const timestamp1 = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp1}_ArticleCreationAfterPublish.png`, fullPage: true });
        // await home1.unpinnedArticle();
    });

});
test('TC35,TC36,TC37,TC39,TC40 - Verify user able to create Customer 1st Article and Publish from Knowledge Tab.', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)
    }
    );
    const home1 = new HomePage(homePage);
    await test.step('Customer and Team creation in knowledge Tab', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.closeAllTabs()
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        // await home1.clickOnNextButton();
        await home1.clickOnCustomerAndTeam();
        await home1.clickOnNextButton();
        await home1.knowledgeArticleSaveButton();
        await home1.verifyOnKnowledgeArticleCreationErrorMessage();
        await home1.closeKnowledgeArticleErrorPopup();
        await home1.articleCreation(testdata.customerAndTeamTitle, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home1.popUpClose();
        await home1.clickOnPulishedButton();
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_Customer1stArticleCreation.png`, fullPage: true });
        await home1.clickOnUserLogout();
        homePage = await home1.againUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Customer and team section in News Page', async () => {
        await woolies.clickOnNewPage();
        await woolies.verifyOnCustomer1stFirstArticle();
        await woolies.verifyOnCustomer1stCount();
        await woolies.clickOnCustomer1stButton();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_Customer1stArticle.png`, fullPage: true });
        await wooliesPage.waitForTimeout(2000);
        await woolies.clickOnPulishedDate();
        await woolies.fillThePulishedStartDate(testdata.pulishedStartDate);
        await woolies.fillThePulishedEndDate(testdata.publishedEndDate);
        await woolies.clickOnPulishedFilterButton();
        await woolies.clickOnPulishedDate();
        await woolies.clickOnPulishedClearButton();
    });
});
test('TC28,TC29 - Verify if article surfaced, selected users DL users only can able to view the articles in TeamSpace.', async ({ page }) => {
    let homePage, wooliesPage, homePage1, homePage2, wooliesPage1;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)

    });
    const home1 = new HomePage(homePage);
    await test.step('Artcle creation in knowledge tab', async () => {
        await home1.popUpClose();
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.popUpClose();
        await home1.closeAllTabs();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.articleCreation(testdata.fillTitleField5, testdata.fillSummaryField, testdata.fillContentField, testdata.fillWorldCountAfter, testdata.fillworldCountBefore);
        await home1.popUpClose();
        await home1.pulishAndPinnedArticle();
        await home1.popUpClose();
        await home1.clickOnKnowledgeArticleAudienceEditButton(testdata.dLUser);
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_ArticleCreation.png`, fullPage: true });
        await home1.popUpClose();
        await home1.clickOnUserLogout();
        homePage1 = await home1.againUserLogin(testdata.forYouUser)
    });

    const home2 = new HomePage(homePage1);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Article is not visible in News Page Section', async () => {
        await woolies.clickOnNewPage();
        await woolies.verificationOFDLarticleRecordIsNotVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage.screenshot({ path: `screenshot/${timestamp}_DLArticleIsNotVisible.png`, fullPage: true });
        await wooliesPage.close();
    });
    const home3 = new HomePage(homePage);
    await test.step('Login a NZ user', async () => {
        await home3.clickOnCancelAndClosePopUp();
        await home3.clickOnUserLogout();
        await home3.clickONUserSearch();
        homePage2 = await home3.againUserLogin(testdata.nzUser);
    });
    const home4 = new HomePage(homePage2);
    await test.step('Navigate to Me@Woolies', async () => {
        await home4.popUpClose();
        await home4.clickOnAppLauch();
        await home4.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage1 = await home4.clickOnMeAtWoolies();
    });

    const woolies1 = new MeAtWooliesPage(wooliesPage1);
    await test.step('VErify on Article is visible in News Page Section ', async () => {
        await woolies1.clickOnNewPage();
        await woolies1.verificationOfDLArticleRecordIsVisible();
        const timestamp = getFormattedDateTime();
        await wooliesPage1.screenshot({ path: `screenshot/${timestamp}_DLArticleIsVisible.png`, fullPage: true });


    });

});
// HomePage - Event
test('TC1,TC2,TC3,TC4,TC10,TC11 - Verify teamspace user can create event and ensure events will appear in Calender page or not', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)
    }
    );
    const home1 = new HomePage(homePage);
    await test.step('Event creation in knowledge', async () => {
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.closeAllTabs()
        await home1.popUpClose();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnEventInKnownledgeTab()
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.fillOnEventTitle(testdata.greenEeventTitleName)
        await home1.fillOnEventStartDate(testdata.greenEventStartDate)
        await home1.clickOnEventStartTime()
        await home1.fillOnEventEndDate(testdata.greenEventeventEndDate)
        await home1.clickOnEventEndTime()
        await home1.clickOnEventTimeZone()
        await home1.fillOnContentField(testdata.fillContentField)
        await home1.clickOnEventAddToCalender()
        await home1.selectOnNoInAddToCalender()
        await home1.fillOnWorldCountAfter(testdata.fillWorldCountAfter)
        await home1.fillOnWorldCountBefore(testdata.fillworldCountBefore)
        await home1.knowledgeArticleSaveButton();
        await home1.clickOnPulishedButton()
        await home1.closeAllTabs()
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_EventCreation.png`, fullPage: true });
        await home1.clickOnUserLogout();
        homePage = await home1.againUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();
    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Event in HomePage', async () => {
        await woolies.checkingEventIsVisibleOrNot();
        await woolies.verifyOnStartDateAndEndDateVisibleOrNot()
        await woolies.checkingForGreenColourEvent();
        // await woolies.checkingForGreenBackGroundColourEvent()
        await woolies.checkingOnDateAndDay()
        await woolies.clickOnLearnButtonINGreenEvent();
        await woolies.verifyOnGreenEvent()
        await woolies.clickOnAnnaveraryAndBirthdayBackButton();
        await woolies.verifyOnNextUpTodayAndGoogleCalendar()
    });

});
test('TC6,TC7,TC8,TC12 - Verify the event should display in blue ribbon, blue background, and blue font, if it is created by keeping "Yes" in Add to calender field and published', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)
    }
    );
    const home1 = new HomePage(homePage);
    await test.step('Event creation in knowledge', async () => {
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.closeAllTabs()
        await home1.popUpClose();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnEventInKnownledgeTab()
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.fillOnEventTitle(testdata.blueEventTitleName)
        await home1.fillOnEventStartDate(testdata.blueEventStartDate)
        await home1.clickOnEventStartTime()
        await home1.fillOnEventEndDate(testdata.blueEventEndDate)
        await home1.clickOnEventEndTime()
        await home1.clickOnEventTimeZone()
        await home1.fillOnContentField(testdata.fillContentField)
        await home1.clickOnEventAddToCalender()
        await home1.selectOnYesInAddToCalender()
        await home1.fillOnWorldCountAfter(testdata.fillWorldCountAfter)
        await home1.fillOnWorldCountBefore(testdata.fillworldCountBefore)
        await home1.knowledgeArticleSaveButton();
        await home1.clickOnPulishedButton()
        // await home1.closeAllTabs()
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_EventCreation.png`, fullPage: true });
        await home1.clickOnUserLogout();
        homePage = await home1.againUserLogin(testdata.forYouUser)
    });
    const home2 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home2.clickOnCancelAndClosePopUp();
        await home2.clickOnAppLauch();
        await home2.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home2.clickOnMeAtWoolies();
    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Verify on Event in HomePage', async () => {
        await woolies.checkingBlueEventIsVisibleOrNot();
        await woolies.verifyOnBlueeventStartDateAndEndDateVisibleOrNot()
        await woolies.checkingForBlueColourEvent();
        await woolies.checkingForBlueColourStartDateAndEndDate()
        await woolies.verifyOnAddToCelanderButton()
        await woolies.verifyOnEventOrders()
    });


});

//Homepage

test('TC5,TC30-Verify the teamspace user able to see errors & able to create events & able', async ({ page }) => {
    let homePage, wooliesPage;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });

    const home = new HomePage(page);
    await test.step('Comms user login', async () => {
        homePage = await home.userLogin(testdata.commsUser)
    }
    );
    const home1 = new HomePage(homePage);
    await test.step('Event creation in knowledge', async () => {
        await home1.clickOnAppLauch();
        await home1.navigationToCommsManager(testdata.searchCommsManager);
        await home1.closeAllTabs()
        await home1.popUpClose();
        await home1.natToKnowledge()
        await home1.clickOnNewButton();
        await home1.clickOnEventInKnownledgeTab()
        await home1.clickOnNextButton();
        await home1.popUpClose();
        await home1.fillOnEventTitle(testdata.blueEventTitleName)
        await home1.fillOnEventStartDate(testdata.blueEventStartDate)
        await home1.clickOnEventStartTime()
        await home1.fillOnEventEndDate(testdata.Erroreventdate)
        // await home1.fillOnEventEndDate(testdata.blueEventEndDate)
        await home1.clickOnEventEndTime()
        await home1.clickOnEventTimeZone()
        await home1.fillOnContentField(testdata.fillContentField)
        await home1.clickOnEventAddToCalender()
        // await home1.selectOnYesInAddToCalender()
        await home1.fillOnWorldCountAfter(testdata.fillWorldCountAfter)
        await home1.fillOnWorldCountBefore(testdata.fillworldCountBefore)
        await home1.url()
        await home1.Expiry(testdata.Expiry)
        
        await home1.knowledgeArticleSaveButton();
        await home1.all_errors()

        // await home1.clickOnPulishedButton()
        // await home1.End_Start_date_error()
        // await home1.Event_error_validation() 
        await home1.fillOnEventEndDate(testdata.blueEventEndDate)
        await home1.closeKnowledgeArticleErrorPopup()
        await home1.clickOnEventAddToCalender()
        await home1.selectOnYesInAddToCalender()
        await home1.knowledgeArticleSaveButton();
        
        const timestamp = getFormattedDateTime();
        await homePage.screenshot({ path: `screenshot/${timestamp}_EventErrormessage.png`, fullPage: true });

    });
    

});





