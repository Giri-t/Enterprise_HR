import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';
test.setTimeout(180000);

const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const NZVD = JSON.parse(JSON.stringify(require('../dataset/NZVerificationDetails.json')))
const NZCS = JSON.parse(JSON.stringify(require('../dataset/NZCategoryAndSubcategory.json')))

// Pay Query Category
test('Verify whether the case created in Me@Woolies with Pay Query as Cateogry and Allowances & Higher Duties as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzPayQuery);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.payQuery_Cat_AllowancesHigherDuties_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.PayrollHR_Subcat2, NZVD.payQuery_Cat_AllowancesHigherDuties_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay Query as Cateogry and Overpayment as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzPayQuery);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.payQuery_Cat_Overpayment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.PayrollHR_Subcat2, NZVD.payQuery_Cat_Overpayment_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay Query as Cateogry and Public Holiday as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzPayQuery);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.payQuery_Cat_PublicHoliday_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.PayrollHR_Subcat2, NZVD.payQuery_Cat_PublicHoliday_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay Query as Cateogry and Underpayments as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzPayQuery);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.payQuery_Cat_Underpayment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.PayrollHR_Subcat2, NZVD.payQuery_Cat_Underpayment_Subcat3);
        await homePage.close();
    });
});


// // Kronos In week Category
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Add Allowance as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_AddAllowance_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_AddAllowance_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Access Issues as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_AccessIssues_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_AccessIssues_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Bank to TOIL as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_BanktoTOIL_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_BanktoTOIL_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Break Amendment as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_BreakAmendment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_BreakAmendment_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Delete Shift as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_DeleteShift_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_DeleteShift_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and General Queries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_GeneralQueries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_GeneralQueries_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Job Transfer as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_JobTransfer_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_JobTransfer_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Leave Type Correction as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_LeaveTypeCorrection_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_LeaveTypeCorrection_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Supervisor Rate as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_SupervisorRate_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_SupervisorRate_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - In week as Cateogry and Timesheets as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosInweek);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosInweek_Cat_Timesheets_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosInweek_SubCat2, NZVD.kronosInweek_Cat_Timesheets_Subcat3);
        await homePage.close();
    });
});



// //Kronos - Historical Change Category
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Add Allowance as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_AddAllowance_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_AddAllowance_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Break Amendment as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_BreakAmendment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_BreakAmendment_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Hours Worked Amendment as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_HoursWorkedAmendment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_HoursWorkedAmendment_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Job Transfer as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_JobTransfer_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_JobTransfer_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Leave Type Correction as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_LeaveTypeCorrection_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_LeaveTypeCorrection_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Public Holiday as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_PublicHoliday_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_PublicHoliday_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos - Historical Change as Cateogry and Supervisor Rate as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKronosHistoricalChange);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kronosHistoricalChange_Cat_SupervisorRate_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kronosHistoricalChange_SubCat2, NZVD.kronosHistoricalChange_Cat_SupervisorRate_Subcat3);
        await homePage.close();
    });
});



// //Leave Category
test('Verify whether the case created in Me@Woolies with Leave as Cateogry and Apply for Leave as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeave);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leave_Cat_ApplyforLeave_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leave_SubCat2, NZVD.leave_Cat_ApplyforLeave_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leave as Cateogry and Buyout Leave as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeave);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leave_Cat_BuyoutLeave_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leave_SubCat2, NZVD.leave_Cat_BuyoutLeave_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leave as Cateogry and Leave Balances as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeave);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leave_Cat_LeaveBalances_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leave_SubCat2, NZVD.leave_Cat_LeaveBalances_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leave as Cateogry and Leave Eligibility as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeave);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leave_Cat_LeaveEligibility_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leave_SubCat2, NZVD.leave_Cat_LeaveEligibility_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leave as Cateogry and Parental leave as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeave);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leave_Cat_Parentalleave_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leave_SubCat2, NZVD.leave_Cat_Parentalleave_Subcat3);
        await homePage.close();
    });
});


//Leaving the Company Category
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Final Payments and Entitlements as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeavingtheCompany);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leavingtheCompany_Cat_FinalPaymentsandEntitlements_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leavingtheCompany_SubCat2, NZVD.leavingtheCompany_Cat_FinalPaymentsandEntitlements_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Line Leader Termination Process as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeavingtheCompany);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leavingtheCompany_Cat_LineLeaderTerminationProcess_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leavingtheCompany_SubCat2, NZVD.leavingtheCompany_Cat_LineLeaderTerminationProcess_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Resignation and Notice Periods as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzLeavingtheCompany);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.leavingtheCompany_Cat_ResignationandNoticePeriods_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.leavingtheCompany_SubCat2, NZVD.leavingtheCompany_Cat_ResignationandNoticePeriods_Subcat3);
        await homePage.close();
    });
});


//Recruitment Category
test('Verify whether the case created in Me@Woolies with Recruitment as Cateogry and Recruitment query as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRecruitment);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.recruitment_Cat_Recruitmentquery_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.recruitment_Cat_Recruitmentquery_Subcat2, NZVD.recruitment_Cat_Null_Subcat3);
        await homePage.close();
    });
});


//Visa Category
test('Verify whether the case created in Me@Woolies with Visa as Cateogry and Visa Enquiries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzVisa);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.visa_Cat_VisaEnquiries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.visa_SubCat2, NZVD.visa_Cat_VisaEnquiries_Subcat3);
        await homePage.close();
    });
});


//Allowances, Claims & Deductions Category
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Allowance Queries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_AllowanceQueries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_AllowanceQueries_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Claim Queries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_ClaimQueries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_ClaimQueries_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Deduction Queries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_DeductionQueries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_DeductionQueries_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Expense as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_Expense_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_Expense_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Garnishee as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_Garnishee_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_Garnishee_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Mileage as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_Mileage_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.claims_Subcat2, NZVD.claims_Cat_Mileage_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Allowances, Claims & Deductions as Cateogry and Tax Deduction as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzAllowancesClaimsDeductions);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.allowanceClaimsDeductions_Cat_TaxDeduction_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.allowanceClaimsDeductions_SubCat2, NZVD.allowanceClaimsDeductions_Cat_TaxDeduction_Subcat3);
        await homePage.close();
    });
});



//Benefits Category
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and 25 Year Club as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_25YearClub_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_25YearClub_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Benefits & Offers as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_BenefitsOffers_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_BenefitsOffers_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Continuity & Aggregate Service as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_ContinuityAggregateService_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_ContinuityAggregateService_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and EDR+ Account Management as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_EDRAccountManagement_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_EDRAccountManagement_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and EDR+ Activation as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_EDRActivation_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_EDRActivation_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and EDR+ Card not received as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_EDRCardnotreceived_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_EDRCardnotreceived_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and EDR+ Replacement/Cancellation as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_EDRReplacementCancellation_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_EDRReplacementCancellation_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Retirement as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_Retirement_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_Retirement_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Service Anniversaries as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzBenefits);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.benefits_Cat_ServiceAnniversaries_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.benefits_SubCat2, NZVD.benefits_Cat_ServiceAnniversaries_Subcat3);
        await homePage.close();
    });
});



//Kiwisaver Category
test('Verify whether the case created in Me@Woolies with KIwisaver as Cateogry and Deduction Adjustment as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKiwisaver);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kiwisaver_Cat_DeductionAdjustment_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kiwisaver_SubCat2, NZVD.kiwisaver_Cat_DeductionAdjustment_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with KIwisaver as Cateogry and Investigation as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKiwisaver);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kiwisaver_Cat_Investigation_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kiwisaver_SubCat2, NZVD.kiwisaver_Cat_Investigation_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with KIwisaver as Cateogry and Opt In as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKiwisaver);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kiwisaver_Cat_OptIn_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kiwisaver_SubCat2, NZVD.kiwisaver_Cat_OptIn_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with KIwisaver as Cateogry and Opt Out as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKiwisaver);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kiwisaver_Cat_OptOut_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kiwisaver_SubCat2, NZVD.kiwisaver_Cat_OptOut_Subcat3);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with KIwisaver as Cateogry and Suspension as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzKiwisaver);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.kiwisaver_Cat_Suspension_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.kiwisaver_SubCat2, NZVD.kiwisaver_Cat_Suspension_Subcat3);
        await homePage.close();
    });
});


//Tax (IRD) Category
test('Verify whether the case created in Me@Woolies with Tax (IRD) as Cateogry and Tax as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzTaxIRD);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.TaxIRD_Cat_Tax_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.TaxIRD_Cat2, NZVD.TaxIRD_Cat_Tax_Subcat);
        await homePage.close();
    });
});


//Remediation payments Category
test('Verify whether the case created in Me@Woolies with Remediation payments as Cateogry and Application help as subcategory is getting assigned to Remediation NZqueue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRemediationpayments);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.remediationPayments_Cat_Applicationhelp_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_RemediationNZ, NZVD.caseOwner_RemediationNZ, NZVD.priority_Low, NZVD.remediationNZ_Cat, NZVD.remediationNZ_SubCat, NZVD.remediationPayments_Cat_Applicationhelp_Subcat, NZVD.remediationPayments_Cat_Applicationhelp_Subcat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remediation payments as Cateogry and Calculation and outcome as subcategory is getting assigned to Remediation NZ queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRemediationpayments);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.remediationPayments_Cat_CalculationandOutcome_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_RemediationNZ, NZVD.caseOwner_RemediationNZ, NZVD.priority_Low, NZVD.remediationNZ_Cat, NZVD.remediationNZ_SubCat, NZVD.remediationPayments_Cat_CalculationandOutcome_Subcat, NZVD.remediationPayments_Cat_CalculationandOutcome_Subcat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remediation payments as Cateogry and Eligibility as subcategory is getting assigned to Remediation NZ queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRemediationpayments);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.remediationPayments_Cat_Eligibility_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_RemediationNZ, NZVD.caseOwner_RemediationNZ, NZVD.priority_Low, NZVD.remediationNZ_Cat, NZVD.remediationNZ_SubCat, NZVD.remediationPayments_Cat_Eligibility_Subcat, NZVD.remediationPayments_Cat_Eligibility_Subcat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remediation payments as Cateogry and Registration as subcategory is getting assigned to Remediation NZ queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRemediationpayments);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.remediationPayments_Cat_Registration_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_RemediationNZ, NZVD.caseOwner_RemediationNZ, NZVD.priority_Low, NZVD.remediationNZ_Cat, NZVD.remediationNZ_SubCat, NZVD.remediationPayments_Cat_Registration_Subcat, NZVD.remediationPayments_Cat_Registration_Subcat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remediation payments as Cateogry and Other as subcategory is getting assigned to Remediation NZ queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzRemediationpayments);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.remediationPayments_Cat_Other_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_RemediationNZ, NZVD.caseOwner_RemediationNZ, NZVD.priority_Low, NZVD.remediationNZ_Cat, NZVD.remediationNZ_SubCat, NZVD.remediationPayments_Cat_Other_Subcat, NZVD.remediationPayments_Cat_Other_Subcat);
        await homePage.close();
    });
});


//SuccessFactors Category
test('Verify whether the case created in Me@Woolies with SuccessFactors as Cateogry and Tax as subcategory is getting assigned to Advisory NZ People Query queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.nZSupportUser);
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleQueryRequest();
        await woolies.nzSelectCatagioresSupportUser(testdata.nzSuccessFactors);
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(NZCS.TaxIRD_Cat_Tax_Subcat);
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
        await home2.closeAllTabs();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyNZCaseDetails(NZVD.recordType_PayrollHRNZ, NZVD.caseOwner_AdvisoryNZPeopleQuery, NZVD.priority_Low, NZVD.PayrollHR_Cat, NZVD.payrollHR_Subcat, NZVD.TaxIRD_Cat2, NZVD.TaxIRD_Cat_Tax_Subcat);
        await homePage.close();
    });
});


