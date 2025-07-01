//import exp from "constants";
import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.setupButton = "div[class='setupGear'] a";
        this.setupButton2 = '#related_setup_app_home';
        this.searchBox = "//input[@title='Search Setup']";
        this.loginBtn = "(//input[@title='Login'])[1]";
        this.selectedMenu = "//a[@title='Home']";
        this.navMenu = "//button[@title='Show Navigation Menu']";
        this.navKnowledge = '//a[@data-itemid="Knowledge__kav"]';
        this.navCase = "//a[@data-itemid='Case']";
        this.newButton = '//a[@title="New"]'
        this.articleButton = "(//span[text()='Article'])[2]"
        this.nextButton = "(//span[text()='Next'])"

        this.listViewedDropdown = "//button[@title='Select a List View: Cases']";
        this.listViewedSearch = "//input[@placeholder='Search lists...']"
        this.allCasesOption = "//span[text()='All Cases']"
        this.automationER = "//span[text()='QA Automation ER Case']"
        this.caseSelectionWPS = "(//a[@data-refid='recordId'])[1]"
        this.HRCaseNumber = "(//div[@data-target-selection-name='sfdc:RecordField.Case.CaseNumber'])[2]"
        this.homeMenu = '//ul[@role="menu"]//span[text()="Home"]';
        this.appLaunch = "//button[@title='App Launcher']";
        this.search = "(//input[@placeholder='Search apps and items...'])";
        this.MeAtWoolies = "//b[text()='Me@Woolies']"
        this.peopleServices = "//a[@data-label='PeopleServices']"
        this.woolWorthsNZ = "//b[text()='Woolworths NZ']"
        this.elementSelector = "//div[@class='slds-p-bottom--large']"
        this.peopleRequest = "(//span[@class='quick-action-name quick-action-Australia'])[2]"
        this.benefitTitle = "//h5[text()='Benefits']"
        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[2]"
        this.newRequest = "[data-value='Yes']"
        this.searchOnCaseNumber = "//button[@aria-label='Search']";//button[contains(@class,'hasSearchTerm')]";
        this.enterACaseNumberInGlobalSearch = "//input[@placeholder='Search...']"//'(//input[contains(@placeholder,"Search")])[2]'//'(//input[@type="search"])[3]'//"//input[@placeholder='Search...']"
        this.employeeNumberinGlobalSearch = "//input[@placeholder='Search Knowledge and more...']"//'(//input[contains(@placeholder,"Search")])[2]'//'(//input[@type="search"])[3]'//"//input[@placeholder='Search...']"
        this.entertheemployeeNumber = '(//input[@type="search"])[4]';//"//input[@placeholder='Search...']"
        this.globalSearch = "(//button[@type='button'])[1]";
        this.caseSearchBox = '[placeholder="Search this list..."]';
        this.refreshButton = 'button[name="refreshButton"]';
        // this.selectCaseListViewDropdown = '[title="Select a List View: Cases"]';
        this.benefitQueue = "(//span[@class='owner-name slds-grow'])[2]";
        this.userClick = this.page.getByRole('button', { name: 'View profile' })
        this.userLogout = "//a[text()='Log Out']"
        this.caseClick = "(//a[@title='Cases'])[2]"
        this.caseNumberLocator = "//a[text()='$caseNumber']";
        this.AddtocalendarButton = '(//button[@class="slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value"])[4]'


        //AU Verification Details
        this.caseRecordsType = "((//span[text()='Case Record Type']/ancestor::div/following-sibling::div)//*[@slot='outputField']//span)[1]"//"((//span[text()='Case Record Type']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']//span)[1]"
        this.caseOwner = "(//span[text()='Case Owner']/ancestor::div/following-sibling::div)//*[@class='not-navigable']//span"//"(//span[text()='Case Owner']/ancestor::dt/following-sibling::dd)[2]//*[@class='not-navigable']//span";
        this.priority = "(//span[text()='Priority']/ancestor::div/following-sibling::div)//*[@slot='outputField']"//"(//span[text()='Priority']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"
        this.category = "(//span[text()='Category']/ancestor::div/following-sibling::div)//*[@slot='outputField']"//"(//span[text()='Category']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"
        this.subCategory = "(//span[text()='Sub Category']/ancestor::div/following-sibling::div)//*[@slot='outputField']"//"(//span[text()='Sub Category']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"



        //NZ Verification Details
        this.nzCaseRecordsType = "((//span[text()='Case Record Type']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']//span)[1]"
        this.nzCaseOwner = "(//span[text()='Case Owner']/ancestor::dt/following-sibling::dd)//*[@class='not-navigable']//span";
        this.nzPriority = "(//span[text()='Priority']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']"
        this.nzCategory = "(//span[text()='Category']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']"
        this.nzSubCategory = "(//span[text()='Sub Category']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']"
        this.nzSubCategory2 = "(//span[text()='Sub Category 2']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']"
        this.nzSubCategory3 = "(//span[text()='Sub Category 3']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']"

        //For You Module
        this.commsManager = "//a[@data-label='Comms Manager']"
        this.titlefield = '(//input[@name="Title"])'
        this.urlNameField = '(//input[@name="UrlName"])'
        this.summaryField = "//textarea[@class='slds-textarea']"
        this.boldBUtton = "//button[@data-mce-name='bold']"
        this.contentField = "//span[@id='_mce_caret']"
        this.worldCountAfter = "//input[@name='WordCountAfterEditing__c']"
        this.worldCountBefore = "//input[@name='WordCountBeforeEditing__c']"
        this.saveBUtton = "//button[@name='SaveEdit']"
        this.pinnedArticleButton = "//span[@class='pin']"
        this.unpinnedArticleButton = "//span[@class='unpin']"
        this.closeButton = "//button[@title='Close']"
        this.cancelAndCloseButton = '[title="Cancel and close"]'
        this.artickePublishButton = "//button[@name='Knowledge__kav.Publish']"
        this.publishButton = "//button[@class='slds-button slds-button_brand']"
        this.employeeSearch = "//span[text()='Employees']"
        this.employeeLocator = "//a[text()='$employeeID']";
        this.employeeName = "[title='$employeeName']"//"//a[@data-refid='recordId']"//"[data-recordid='a2l2y000001ySOdAAM']"
        this.editEmployeeDOBButton = "//button[@title='Edit Date Of Birth']"
        this.employeeDOBField = "//input[@name='DateOfBirth__c']"
        this.employeeStartDateEditButton = "//button[@title='Edit Employment Start Date']"
        this.employeeStartDatefield = "//input[@name='EmploymentStartDate__c']"
        this.employeeGroupField = "//input[@name='EmployeeGroup__c']"
        this.secondEditEmployeeDOBButton = "(//button[@title='Edit Date Of Birth'])[2]"
        this.secondEmployeeDOBField = "(//input[@name='DateOfBirth__c'])[2]"
        this.secondEmployeeStartDateEditButton = "(//button[@title='Edit Employment Start Date'])[2]"
        this.secondEmployeeStartDatefield = "(//input[@name='EmploymentStartDate__c'])[2]"
        this.secondEmployeeGroupField = "(//input[@name='EmployeeGroup__c'])[2]"
        this.knowledgeArticleURLNameError = "//a[text()='URL Name']"
        this.knowledgeArticleWorldCountAfterError = "//a[text()='Word Count After Editing']"
        this.knowledgeArticleWorldCountBeforeError = "//a[text()='Word Count Before Editing']"
        this.knowledgeArticleErrorPopupClose = "[title='Close error dialog']"
        this.knowledgeArticleEditAsDraftButton = "//button[@name='CreateDraftFromOnlineKnowledgeArticleVersion']"
        this.knowledgeArticleEditAsDraftPulishedButton = "//button[@title='Edit as Draft']"
        this.knownledgeArticleEditAsDraftSaveButton = "//button[@name='SaveEdit']"
        this.knownledgeArticleLimitedPopupMessage = '(//h2[contains(text(), "You cannot create a new version")])[2]'
        this.knownledgeArticleCloneButton = "//button[@name='Knowledge__kav.Clone_this_Knowledge_Article']"
        this.knownledgeArticleArchieButton = "(//button[@name='Knowledge__kav.Archive'])"
        this.knownledgeCustomerAndTeam = "(//span[@class='slds-radio--faux topdown-radio--faux'])[2]"
        this.knwonledgeArticleAudienceEditButton = "//button[@title='Edit']"
        this.knowledgeArticleAudienceInputField = "//input[@placeholder='Select Distribution List']"
        this.knownledgeArticleAudienceSelect = "//div[@data-name='New Zealand User']"


        //Home Page Event
        this.knownledgeEvent = "(//span[@class='slds-radio--faux topdown-radio--faux'])[3]"
        this.eventStartDate = "//input[@name='Start_Date__c']"
        this.eventStartTimeField = "//button[@aria-label='Start Time']"
        this.eventStartTime = "[title='12:30 AM']"
        this.eventEndDate = "//input[@name='End_Date__c']"
        this.eventEndTimeField = "//button[@aria-label='End Time']"
        this.eventEndTime = "(//span[@title='12:45 AM'])[2]"
        this.timeZoneField = "//button[@aria-label='Timezone']"
        this.selectTimeZoneFiled = "[data-value='UTC+8:00: Australian Western Standard Time (AWST)']"
        this.eventDateOfExpiry = "//input[@name='DateOfExpiry__c']"
        this.blueEventInAddToCalender = '[data-value="Yes"]'
        this.greenEventInAddToCalender = '[data-value="No"]'
        this.eventErrorMessage = '//*[contains(text(), "Start Date") and contains(text(), "Add to Calendar")]'











    }
    async navigationToCommsManager(searchCommsManager) {
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchCommsManager);
        await this.page.waitForSelector(this.commsManager, { state: 'visible' });
        await this.page.click(this.commsManager);
        await this.page.waitForTimeout(5000);
    }
    async popUpClose() {
        const closeButton = this.page.locator(this.closeButton);
        try {
            await closeButton.waitFor({ state: 'visible', timeout: 10000 });
            await closeButton.click();
        } catch (error) {

        }
        // await this.page.waitForSelector(this.closeButton, { state: 'visible' });
        // await this.page.click(this.closeButton);
    }
    async clickOnCancelAndClosePopUp() {
        const cancelAndCloseButton = this.page.locator(this.cancelAndCloseButton);
        try {
            await cancelAndCloseButton.waitFor({ state: 'visible', timeout: 10000 });
            await cancelAndCloseButton.click();
        } catch (error) {

        }
    }
    async natToKnowledge() {
        await this.page.waitForSelector(this.navMenu, { state: 'visible' });
        await this.page.click(this.navMenu);
        // await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.navKnowledge, { state: 'visible' });
        await this.page.click(this.navKnowledge);
        // await this.page.waitForTimeout(5000);
    }
    async clickOnNewButton() {
        await this.page.waitForSelector(this.newButton, { state: 'visible' });
        await this.page.click(this.newButton);
    }
    async clickOnNextButton() {
        await this.page.waitForSelector(this.nextButton, { state: 'visible' });
        await this.page.click(this.nextButton);
    }

    async articleCreation(fillTitleField, fillSummaryField, fillContentField, fillWorldCountAfter, fillworldCountBefore) {
        await this.page.waitForSelector(this.titlefield, { state: 'visible' });
        await this.page.fill(this.titlefield, fillTitleField);
        await this.page.waitForSelector(this.summaryField, { state: 'visible' });
        await this.page.fill(this.summaryField, fillSummaryField);
        await this.page.waitForSelector(this.boldBUtton, { state: 'visible' });
        await this.page.locator('iframe[title="Rich Text Area"]').contentFrame().getByRole('paragraph').click();
        await this.page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Content Rich Text Area. Press').fill(fillContentField);
        await this.page.waitForSelector(this.worldCountAfter, { state: 'visible' });
        await this.page.fill(this.worldCountAfter, fillWorldCountAfter);
        await this.page.waitForSelector(this.worldCountBefore, { state: 'visible' });
        await this.page.fill(this.worldCountBefore, fillworldCountBefore);
        await this.page.waitForSelector(this.saveBUtton, { state: 'visible' });
        await this.page.click(this.saveBUtton);
        // await this.page.waitForSelector(this.pinnedArticleButton, { state: 'visible' });
        // await this.page.click(this.pinnedArticleButton);
    }
    async knowledgeArticleSaveButton() {
        await this.page.waitForSelector(this.saveBUtton, { state: 'visible' });
        await this.page.click(this.saveBUtton);
    }

    async urlErrorfixForArtrileCreation(fillURLNameField) {
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.urlNameField, { state: 'visible' });
        await this.page.locator(this.urlNameField).clear();
        await this.page.fill(this.urlNameField, fillURLNameField);
        await this.page.waitForSelector(this.saveBUtton, { state: 'visible' });
        await this.page.click(this.saveBUtton);
    }
    async pulishAndPinnedArticle() {
        await this.page.waitForSelector(this.artickePublishButton, { state: 'visible' });
        await this.page.click(this.artickePublishButton);
        await this.page.waitForSelector(this.publishButton, { state: 'visible' });
        await this.page.click(this.publishButton);
        // await this.page.waitForSelector(this.pinnedArticleButton, { state: 'visible' });
        // await this.page.click(this.pinnedArticleButton)
    }
    async clickOnPulishedButton() {
        // await this.page.waitForSelector(this.artickePublishButton, { state: 'visible' });
        // await this.page.click(this.artickePublishButton);
        await this.page.waitForSelector(this.publishButton, { state: 'visible' });
        await this.page.click(this.publishButton);
    }
    async pinnedArticle() {
        await this.page.waitForSelector(this.pinnedArticleButton, { state: 'visible' });
        await this.page.click(this.pinnedArticleButton);
    }
    async unpinnedArticle() {
        await this.page.waitForSelector(this.unpinnedArticleButton, { state: 'visible' });
        await this.page.click(this.unpinnedArticleButton);
    }
    async editAsDraftArticle() {
        for (let i = 0; i < 98; i++) {

            await this.page.waitForTimeout(3000);

            if (await this.page.locator(this.artickePublishButton).isVisible({ timeout: 3000 })) {
                const closeButton = this.page.locator(this.closeButton);
                try {
                    await closeButton.waitFor({ state: 'visible', timeout: 10000 });
                    await closeButton.click();
                } catch (error) {

                }
                await this.page.locator(this.artickePublishButton).click();
                await this.page.waitForSelector(this.publishButton, { state: 'visible', timeout: 7000 });
                await this.page.click(this.publishButton);
                console.log(`Published article in iteration ${i + 1}`);
                await this.page.reload();
            } else if (await this.page.locator(this.knowledgeArticleEditAsDraftButton).isVisible({ timeout: 3000 })) {
                const closeButton = this.page.locator(this.closeButton);
                try {
                    await (this.page.locator(this.closeButton)).waitFor({ state: 'visible', timeout: 10000 });
                    await (this.page.locator(this.closeButton)).click();
                } catch (error) {

                }
                await this.page.locator(this.knowledgeArticleEditAsDraftButton).click();
                await this.page.waitForSelector(this.knowledgeArticleEditAsDraftPulishedButton, { state: 'visible' });
                await this.page.click(this.knowledgeArticleEditAsDraftPulishedButton);
                await this.page.waitForSelector(this.knownledgeArticleEditAsDraftSaveButton, { state: 'visible' });
                await this.page.click(this.knownledgeArticleEditAsDraftSaveButton);
                console.log(`Saved draft article in iteration ${i + 1}`);
                await this.page.reload();
                await this.page.getByRole('button', { name: 'Follow' }).waitFor({ state: 'visible' });
            } else {
                console.warn(`No action taken in iteration ${i + 1}: no relevant buttons visible.`);
            }
        }
        // await expect(this.page.locator(this.knownledgeArticleArchieButton)).not.toBeVisible();
    }
    async clickOnEditAsDrafButton() {
        await this.page.locator(this.knowledgeArticleEditAsDraftButton).isVisible({ timeout: 3000 })
        await this.page.waitForSelector(this.knowledgeArticleEditAsDraftButton, { state: 'visible' });
        await this.page.click(this.knowledgeArticleEditAsDraftButton);
        await this.page.waitForSelector(this.knowledgeArticleEditAsDraftPulishedButton, { state: 'visible' });
        await this.page.click(this.knowledgeArticleEditAsDraftPulishedButton);
    }
    async clickOnKnowledgeArticleAudienceEditButton(dLUser) {
        await this.page.waitForSelector(this.knwonledgeArticleAudienceEditButton, { state: 'visible' });
        await this.page.click(this.knwonledgeArticleAudienceEditButton);
        await this.page.waitForSelector(this.knowledgeArticleAudienceInputField, { state: 'visible' });
        await this.page.locator(this.knowledgeArticleAudienceInputField).click();
        await this.page.locator(this.knowledgeArticleAudienceInputField).clear();
        await this.page.locator(this.knowledgeArticleAudienceInputField).fill(dLUser);
        await this.page.waitForSelector(this.knownledgeArticleAudienceSelect, { state: 'visible' });
        await this.page.click(this.knownledgeArticleAudienceSelect);
    }
    async verfiyOnKnownledgeArticleLimitedPopupMessage() {
        await this.page.waitForSelector(this.knownledgeArticleLimitedPopupMessage, { state: 'visible' });
        const message = await this.page.locator(this.knownledgeArticleLimitedPopupMessage).textContent();
        console.log('Limited edit Article Text:', message);
    }
    async verifyOnCloneButton() {
        await this.page.waitForSelector(this.knownledgeArticleCloneButton, { state: 'visible' });
        const cloneButton = await this.page.locator(this.knownledgeArticleCloneButton).textContent();
    }
    async verifyOnArchieButton() {
        const archieButton = await this.page.locator(this.knownledgeArticleArchieButton);
        await expect(archieButton).not.toBeVisible();
    }
    async fileUploadForArticleCreation() {
        await this.page.locator("[data-key='upload']").setInputFiles('./screenshots/AppLaunch.jpg')
        await this.page.locator("//span[text()='Done']").waitFor({ state: 'visible' });
        await this.page.locator("//span[text()='Done']").click();
    }
    async clickOnCustomerAndTeam() {
        await this.page.waitForSelector(this.knownledgeCustomerAndTeam, { state: 'visible' });
        await this.page.click(this.knownledgeCustomerAndTeam);
        // await this.page.waitForTimeout(5000);
    }
    async clickONUserSearch() {
        await this.page.locator(this.searchBox).waitFor({ state: 'visible' });
        await this.page.locator(this.searchBox).click();
    }

    async againUserLogin(forYouUser) {
        await this.page.locator(this.searchBox).waitFor({ state: 'visible' });
        await this.page.locator(this.searchBox).fill(forYouUser);
        await this.page.getByRole('option', { name: forYouUser + ' User' }).click();
        const frame = await this.page.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return this.page;
    }
    async verifyOnKnowledgeArticleCreationErrorMessage() {
        await this.page.waitForSelector(this.knowledgeArticleURLNameError, { state: 'visible' });
        const urlNameError = await this.page.locator(this.knowledgeArticleURLNameError).textContent();
        expect(urlNameError).toContain('URL Name');
        await this.page.waitForSelector(this.knowledgeArticleWorldCountAfterError, { state: 'visible' });
        const worldCountAfterError = await this.page.locator(this.knowledgeArticleWorldCountAfterError).textContent();
        expect(worldCountAfterError).toContain('Word Count After Editing');
        await this.page.waitForSelector(this.knowledgeArticleWorldCountBeforeError, { state: 'visible' });
        const worldCountBeforeError = await this.page.locator(this.knowledgeArticleWorldCountBeforeError).textContent();
        expect(worldCountBeforeError).toContain('Word Count Before Editing');
        await this.page.waitForTimeout(5000);
    }
    async closeKnowledgeArticleErrorPopup() {
        await this.page.waitForSelector(this.knowledgeArticleErrorPopupClose, { state: 'visible' });
        await this.page.click(this.knowledgeArticleErrorPopupClose);
        await this.page.waitForSelector(this.knowledgeArticleURLNameError, { state: 'hidden' });
    }


    async selectListViewedDropdown() {
        await this.page.waitForSelector(this.listViewedDropdown, { state: 'visible' });
        await this.page.click(this.listViewedDropdown);
        // await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.listViewedSearch, { state: 'visible' });
        await this.page.fill(this.listViewedSearch, 'All Cases');
        // await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.allCasesOption, { state: 'visible' });
        await this.page.click(this.allCasesOption);

    }
    async selectListViewedDropdownER(er) {
        await this.page.waitForSelector(this.listViewedDropdown, { state: 'visible' });
        await this.page.click(this.listViewedDropdown);
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.listViewedSearch, { state: 'visible' });
        await this.page.fill(this.listViewedSearch, er);
        // await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.automationER, { state: 'visible' });
        await this.page.click(this.automationER);
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.caseSelectionWPS, { state: 'visible' });
        await this.page.click(this.caseSelectionWPS);

    }
    async selectOnEmployeeId1() {
        await this.page.waitForSelector(this.employeeSearch, { state: 'visible' });
        await this.page.click(this.employeeSearch);
        let employeeIDName = await this.page.locator(this.employeeName).textContent();
        let id = employeeIDName.replace("Case Number", "").trim();
        await this.page.locator(this.employeeLocator.replace('$employeeID', id)).click();
        console.log(id);
        return id;
    }
    async selectOnEmployeeId(employeeID) {
        await this.page.waitForSelector(this.employeeSearch, { state: 'visible' });
        await this.page.click(this.employeeSearch);
        const rowLocator = this.page
            .locator("(//table[contains(@class, 'uiVirtualDataTable')])/tbody/tr")
            .filter({ has: this.page.locator('td', { hasText: employeeID }) });

        await rowLocator
            .locator('th span a')
            .click();
    }
    async caseVerification() {
        // Get the text content of the element directly
        const message = await this.page.locator(this.elementSelector).textContent();

        // Use a regular expression to remove numbers at the end of the message
        const cleanMessage = message.replace(/\d+$/, '').trim();

        console.log('Cleaned message:', cleanMessage);
    }

    async userLogin(loginuser) {
        // await this.page.pause();
        await this.page.waitForSelector(this.setupButton, { state: 'visible' });
        await this.page.click(this.setupButton);
        await this.page.waitForSelector(this.setupButton2, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.setupButton2)
        ])
        await page1.waitForLoadState('load');
        await this.page.close();
        await page1.locator(this.searchBox).waitFor({ state: 'visible' });
        await page1.locator(this.searchBox).fill(loginuser);
        await page1.getByRole('option', { name: loginuser + ' User' }).click();
        const frame = await page1.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return page1;
    }
    async forYouUserLogin(forYouUser) {
        // await this.page.pause();
        await this.page.waitForSelector(this.setupButton, { state: 'visible' });
        await this.page.click(this.setupButton);
        await this.page.waitForSelector(this.setupButton2, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.setupButton2)
        ])
        await page1.waitForLoadState('load');
        await this.page.close();
        await page1.locator(this.searchBox).waitFor({ state: 'visible' });
        await page1.locator(this.searchBox).fill(forYouUser);
        await page1.getByRole('option', { name: forYouUser + ' User' }).click();
        const frame = await page1.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return page1;
    }
    async clickOnEditButton() {
        await this.page.waitForSelector(this.editEmployeeDOBButton, { state: 'visible' });
        await this.page.click(this.editEmployeeDOBButton);
    }
    async filleTheEmployeeDOBFeild(dob) {
        await this.page.waitForSelector(this.employeeDOBField, { state: 'visible' });
        await this.page.locator(this.employeeDOBField).clear(); // Clear the field before filling
        await this.page.fill(this.employeeDOBField, dob);
    }

    async filleTheEmployeeStartDateFeild(employeeStartDate) {
        await this.page.waitForSelector(this.employeeStartDatefield, { state: 'visible' });
        await this.page.locator(this.employeeStartDatefield).clear(); // Clear the field before filling
        await this.page.fill(this.employeeStartDatefield, employeeStartDate);
    }
    async clearOnEmployeeDOBFeild() {
        await this.page.waitForSelector(this.employeeDOBField, { state: 'visible' });
        await this.page.locator(this.employeeDOBField).clear(); // Clear the field before filling
    }
    async clearOnEmployeeStartDateFeild() {
        await this.page.waitForSelector(this.employeeStartDatefield, { state: 'visible' });
        await this.page.locator(this.employeeStartDatefield).clear(); // Clear the field before filling
    }
    async clickOnSaveButton() {
        await this.page.waitForSelector(this.saveBUtton, { state: 'visible' });
        await this.page.click(this.saveBUtton);
        await this.page.waitForSelector(this.saveBUtton, { state: 'hidden' });
    }
    async filleTheEmployeeGroupFeild(employeeGroup) {
        await this.page.waitForSelector(this.employeeGroupField, { state: 'visible' });
        await this.page.locator(this.employeeGroupField).clear(); // Clear the field before filling
        await this.page.fill(this.employeeGroupField, employeeGroup);
    }
    async filleTheSecondEmployeeDOBFeidl(dob) {
        await this.page.waitForSelector(this.secondEditEmployeeDOBButton, { state: 'visible' });
        await this.page.click(this.secondEditEmployeeDOBButton);
        await this.page.waitForSelector(this.secondEmployeeDOBField, { state: 'visible' });
        await this.page.locator(this.secondEmployeeDOBField).clear(); // Clear the field before filling
        await this.page.fill(this.secondEmployeeDOBField, dob);
    }
    async filleTheSecondEmployeeStartDateFeild(employeeStartDate) {
        // await this.page.waitForSelector(this.secondEmployeeStartDateEditButton, { state: 'visible' });
        // await this.page.click(this.secondEmployeeStartDateEditButton);
        await this.page.waitForSelector(this.secondEmployeeStartDatefield, { state: 'visible' });
        await this.page.locator(this.secondEmployeeStartDatefield).clear(); // Clear the field before filling
        await this.page.fill(this.secondEmployeeStartDatefield, employeeStartDate);
        await this.page.waitForSelector(this.saveBUtton, { state: 'visible' });
        await this.page.click(this.saveBUtton);
        await this.page.waitForSelector(this.saveBUtton, { state: 'hidden' });
    }
    async filleTheSecondEmployeeGroupFeild(employeeGroup) {
        await this.page.waitForSelector(this.secondEmployeeGroupField, { state: 'visible' });
        await this.page.locator(this.secondEmployeeGroupField).clear(); // Clear the field before filling
        await this.page.fill(this.secondEmployeeGroupField, employeeGroup);
    }




    async closeTab() {
        await this.page.close();
    }
    async gotoHome() {
        if (!(await this.page.locator(this.selectedMenu).isVisible())) {
            await this.page.locator(this.navMenu).waitFor({ state: 'visible' });
            await this.page.click(this.navMenu);
        }
    }
    async clickOnAppLauch() {
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.appLaunch, { state: 'visible' });
        await this.page.click(this.appLaunch);
        // await this.page.screenshot({ path: './screenshots/AppLaunch.jpg' });
    }

    async searchForPeopleServices(searchPeopleServices) {
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchPeopleServices);
        await this.page.waitForTimeout(5000);
    }
    async clickOnPeopleServices() {
        await this.page.waitForSelector(this.peopleServices, { state: 'visible' });
        // await this.page.waitForTimeout(5000)
        await this.page.click(this.peopleServices);
        await this.page.waitForTimeout(7000);
    }


    async searchForMeAtWoolies(searchWoolies) {
        console.log("searchWoolies: " + searchWoolies);
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchWoolies);
    }

    async searchForWoolworthsNZ(searchWoolworthsNZ) {
        // console.log("searchWoolworthsNZ: " + searchWoolies);
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchWoolworthsNZ);
    }
    async clickOnWoolworthsNZ() {
        await this.page.waitForSelector(this.woolWorthsNZ, { state: 'visible' });
        await this.page.waitForTimeout(5000)
        await this.page.click(this.woolWorthsNZ);
        await this.page.waitForTimeout(10000)
    }

    async clickOnMeAtWoolies() {
        await this.page.waitForSelector(this.MeAtWoolies, { state: 'visible' });
        const [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.MeAtWoolies)
        ])
        await page2.waitForLoadState('load');
        return page2;
    }

    async clickOnUserLogout() {
        await this.page.reload();
        await this.userClick.waitFor({ state: 'visible' });
        await this.userClick.click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.userLogout).waitFor({ state: 'visible' });
        await this.page.locator(this.userLogout).click();
    }



    async pageReload() {
        for (let i = 0; i < 9; i++) {
            await this.page.reload();
            await this.page.waitForTimeout(10000);
        }
        await this.page.waitForTimeout(5000);

    }
    async clcikOnGlobalSearch() {
        await this.page.locator(this.searchOnCaseNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.searchOnCaseNumber).click();
    }
    async enterTheCaseNumber(caseNumber) {
        await this.page.locator(this.enterACaseNumberInGlobalSearch).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.type(this.enterACaseNumberInGlobalSearch, caseNumber, { delay: 200 });
        // await this.page.waitForTimeout(5000);
        await this.page.press(this.enterACaseNumberInGlobalSearch, 'Enter');
    }
    async enterTheValueInGlobalSearch(EmployeeNumber) {
        for (let i = 0; i < 5; i++) {
            if (await this.page.locator(this.enterACaseNumberInGlobalSearch).isVisible()) {
                // await this.page.locator(this.enterACaseNumberInGlobalSearch).click(EmployeeNumber);
                await this.page.type(this.enterACaseNumberInGlobalSearch, EmployeeNumber, { delay: 500 });
                await this.page.press(this.enterACaseNumberInGlobalSearch, 'Enter');
                break;
            } else {
                await this.page.locator(this.employeeNumberinGlobalSearch).waitFor({ state: 'visible' });
                // await this.page.locator(this.employeeNumberinGlobalSearch).click(EmployeeNumber);
                await this.page.type(this.employeeNumberinGlobalSearch, EmployeeNumber, { delay: 500 });
                await this.page.press(this.employeeNumberinGlobalSearch, 'Enter');
                break;
            }

        }
    }
    async enterTheEmployeeNumberForYou(EmployeeNumber) {
        await this.page.locator(this.entertheemployeeNumber).waitFor({ state: 'visible' });
        await this.page.type(this.entertheemployeeNumber, EmployeeNumber, { delay: 200 });
        // await this.page.waitForTimeout(2000);
        await this.page.press(this.entertheemployeeNumber, 'Enter');
    }
    async enterTheEmployeeNumber(employeeid) {
        await this.page.locator(this.enterACaseNumberInGlobalSearch).waitFor({ state: 'visible' });
        await this.page.type(this.enterACaseNumberInGlobalSearch, employeeid);
        // await this.page.waitForTimeout(5000);
        await this.page.press(this.enterACaseNumberInGlobalSearch, 'Enter');
    }

    async clickCaseNumber1(caseNumber) {
        await this.page.getByRole('link', { name: 'Cases 1' }).waitFor({ state: "visible" });
        await this.page.getByRole('link', { name: 'Cases 1' }).click();
        // Replace the placeholder with the actual case number
        const caseNumberLink = this.caseNumberLocator.replace('$caseNumber', caseNumber);
        console.log(caseNumberLink);  // Log the final generated locator
        //await this.page.locator(caseNumberLink).waitFor({ state: 'visible' });
        await this.page.locator(caseNumberLink).last().click();  // Click on the dynamically generated link
    }
    async clickCaseNumber(caseNumber) {
        await this.page.locator('(//a[@title="Cases"])').waitFor({ state: "visible" });
        await this.page.locator('(//a[@title="Cases"])').click();
        const caseNumberLink = this.caseNumberLocator.replace('$caseNumber', caseNumber);
        while (!(await this.page.locator(caseNumberLink).isVisible())) {
            const refreshDropdown = `//button[contains(@title,"Actions for ${caseNumber} - Search")]`;
            await this.page.locator(refreshDropdown).click();
            await this.page.locator("//span[text()='Refresh Tab']").click();
            await this.page.waitForTimeout(2000);
        }
        // console.log(caseNumberLink);
        await this.page.locator(caseNumberLink).last().click();
    }

    async closeAllTabs() {
        await this.page.keyboard.press('Shift+W');
        try {
            await this.page.getByRole('button', { name: 'Close All' }).waitFor({ state: 'visible', timeout: 5000 });
            await this.page.getByRole('button', { name: 'Close All' }).click();
            await this.page.locator("//*[contains(text(), 'tabs were closed')]").waitFor({ state: 'visible' });
            await this.page.getByRole('button', { name: 'Close', exact: true }).click();
            await this.page.locator("//*[contains(text(), 'tabs were closed')]").waitFor({ state: 'hidden' });
        } catch (error) {
            await this.page.locator("//*[contains(text(), 'tabs were closed')]").waitFor({ state: 'hidden' });
        }

        // await this.page.reload();
        await this.page.waitForTimeout(5000);
    }

    async verifyCaseDetails(caseRecordType, caseOwner, priority, category, subCategory) {
        expect(await this.page.locator(this.caseRecordsType).textContent()).toContain(caseRecordType);
        expect(await this.page.locator(this.caseOwner).textContent()).toContain(caseOwner);
        expect(await this.page.locator(this.priority).textContent()).toContain(priority);
        expect(await this.page.locator(this.category).textContent()).toContain(category);
        expect(await this.page.locator(this.subCategory).textContent()).toContain(subCategory);

    }



    //New Zealand
    async verifyNZCaseDetails(caseRecordType, caseOwner, priority, category, subCategory, subCategory2, subCategory3) {
        expect(await this.page.locator(this.nzCaseRecordsType).textContent()).toContain(caseRecordType);
        expect(await this.page.locator(this.nzCaseOwner).textContent()).toContain(caseOwner);
        expect(await this.page.locator(this.nzPriority).textContent()).toContain(priority);
        expect(await this.page.locator(this.nzCategory).textContent()).toContain(category);
        expect(await this.page.locator(this.nzSubCategory).textContent()).toContain(subCategory);
        expect(await this.page.locator(this.nzSubCategory2).textContent()).toContain(subCategory2);
        expect(await this.page.locator(this.nzSubCategory3).textContent()).toContain(subCategory3);
    }

    //Home Page event
    async clickOnEventInKnownledgeTab() {
        await this.page.waitForSelector(this.knownledgeEvent, { state: 'visible' });
        await this.page.click(this.knownledgeEvent);
    }
    async fillOnEventTitle(eventTitleName) {
        await this.page.waitForSelector(this.titlefield, { state: 'visible' });
        await this.page.fill(this.titlefield, eventTitleName);
    }
    async fillOnEventStartDate(eventStartDate) {
        await this.page.waitForSelector(this.eventStartDate, { state: 'visible' });
        await this.page.fill(this.eventStartDate, eventStartDate);
    }
    async clickOnEventStartTime() {
        await this.page.waitForSelector(this.eventStartTimeField, { state: 'visible' });
        await this.page.click(this.eventStartTimeField);
        await this.page.waitForSelector(this.eventStartTime, { state: 'visible' })
        await this.page.click(this.eventStartTime);
    }
    async fillOnEventEndDate(eventEndDate) {
        await this.page.waitForSelector(this.eventEndDate, { state: 'visible' });
        await this.page.fill(this.eventEndDate, eventEndDate);
    }
    async clickOnEventEndTime() {
        await this.page.waitForSelector(this.eventEndTimeField, { state: 'visible' });
        await this.page.click(this.eventEndTimeField);
        await this.page.waitForSelector(this.eventEndTime, { state: 'visible' })
        await this.page.click(this.eventEndTime);
    }
    async clickOnEventTimeZone() {
        await this.page.waitForSelector(this.timeZoneField, { state: 'visible' });
        await this.page.click(this.timeZoneField);
        await this.page.waitForSelector(this.selectTimeZoneFiled, { state: 'visible' })
        await this.page.click(this.selectTimeZoneFiled);
    }
    async fillOnContentField(fillContentField) {
        await this.page.waitForSelector(this.boldBUtton, { state: 'visible' });
        await this.page.locator('iframe[title="Rich Text Area"]').contentFrame().getByRole('paragraph').click();
        await this.page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Content Rich Text Area. Press').fill(fillContentField);
    }
    async clickOnEventAddToCalender() {
        await this.page.locator(this.AddtocalendarButton).click()

    }
    async selectOnYesInAddToCalender() {
        await this.page.locator('(//span[@class="slds-media__body"])//span[@title="Yes" ]').click()
    }

    async selectOnNoInAddToCalender() {
        await this.page.waitForSelector(this.greenEventInAddToCalender, { state: 'visible' });
        await this.page.click(this.greenEventInAddToCalender);
    }
    async fillOnWorldCountAfter(fillWorldCountAfter) {
        await this.page.waitForSelector(this.worldCountAfter, { state: 'visible' });
        await this.page.fill(this.worldCountAfter, fillWorldCountAfter);
    }
    async fillOnWorldCountBefore(fillworldCountBefore) {
        await this.page.waitForSelector(this.worldCountBefore, { state: 'visible' });
        await this.page.fill(this.worldCountBefore, fillworldCountBefore);
    }
    async verifyOnEventCreationErrorMessage() {
        await this.page.waitForSelector(this.eventErrorMessage, { state: 'visible' });
        const eventTitleError = await this.page.locator(this.eventErrorMessage).textContent();
        expect(eventTitleError).toContain("Start Date, End Date, Timezone, Enable 'Add to Calendar' button and Content is required.");
    }
    async Event_error_validation() {
        let q = await this.page.locator('//ul[@class="errorsList slds-list_dotted slds-m-left_medium"]//li').textContent()
        expect(q).toBe("Start Date, End Date, Timezone, Enable 'Add to Calendar' button and Content is required.")
    }

    async Expiry(expiryDate) {
        await this.page.locator('//*[@name="DateOfExpiry__c"]').fill(expiryDate)
    }
 
    async End_Start_date_error(){
        let expirydate = await this.page.locator('//ul[@class="errorsList slds-list_dotted slds-m-left_medium"]//li[1]').textContent()
        expect(expirydate).toBe("Date of Expiry should be greater or equal to End Date.")

    }

    async url(){
         await this.page.locator(this.urlNameField).fill("testyyy")
    }

    async all_errors(){
      let errror=  await this.page.locator("//*[@class='errorsList slds-list_dotted slds-m-left_medium']").textContent()
      console.log(errror)
      expect(errror).toContain("Date of Expiry should be greater or equal to End Date.Start Date, End Date, Timezone, Enable 'Add to Calendar' button and Content is required.")
    }

}


