import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';


const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const VD = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')))
const CS = JSON.parse(JSON.stringify(require('../dataset/CategoryAndSubcategory.json')))
// test.describe.configure({ mode: 'parallel' });
// test.setTimeout(60000);

//Benefits
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and 25 Year Club as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_25YearClub_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_25YearClub_Subcat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Benefits/Offers as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_BenefitsOffers_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_BenefitsOffers_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Continuity/ Aggregate Service as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ContinuityAggregateService_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_ContinuityAggregateService_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Novated Lease as subcategory is getting assigned to Benefits queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_NovatedLease_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_NovatedLease_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Parental Leave - Gift Card as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ParentalLeaveGiftCard_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_ParentalLeaveGiftCard_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Parental Leave - Superannuation as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ParentalLeaveSuperannuation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_ParentalLeaveSuperannuation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCard_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_PlusCard_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard - Loss Prevention as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCardLossPrevention_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_PlusCardLossPrevention_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard - Not Working as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCardNotWorking_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_PlusCardNotWorking_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Service Anniversaries as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ServiceAnniversaries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_ServiceAnniversaries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Superannuation Policy as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_SuperannuationPolicy_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_SuperannuationPolicy_SubCat);
        await homePage.close();
    });
});
