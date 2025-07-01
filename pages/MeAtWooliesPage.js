import { expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))

export class MeAtWooliesPage {
    constructor(page) {
        this.page = page;
        this.peopleRequest = "//span[text()='Raise a People Services request']"
        this.storePeopleServices = "//h2[text()='People services']"


        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[1]"
        this.newRequest = "//button[@aria-label='Is this a new request?']"
        this.newRequestDropDown = "[data-value='No']"
        this.existingNumber = "//input[@name='caseNum']"
        this.preferredNameThroughSuccessFactors = "(//span[@class='slds-radio_faux'])[3]"

        //Benefit Category
        this.benefitTitle = "//h5[text()='Benefits']"
        this.subCatFieldClick = "//button[@aria-label='Sub Category']"
        this.subcatDropdown = "//span[@title='${subcatName}']";

        //Pay and Basics Category
        this.payAndBasicsTitle = "//h5[text()='Pay and the Basics']"

        //Career and Recruitment Category
        this.careerAndRecuritmentTitle = "//h5[text()='Career and Recruitment']"

        //Workplace Adjustment & Flexible Work Request Category
        this.workplaceAdjustmentTitle = "//h5[text()='Workplace Adjustment & Flexible Workplace Request']"

        //Leaving the Company Category  
        this.leavingTheCompanyTitle = "//h5[text()='Leaving the Company']"

        //Kronos Category
        this.kronsTitle = "//h5[text()='Kronos']"

        //Team Data App Category
        this.teamDataAppTitle = "//h5[text()='Team Data App']"

        //SuccessFactors Technical Issues Category
        this.successFactorsTechnicalIssuesTitle = "//h5[text()='SuccessFactors Technical Issues']"

        //Development and Learning Category
        this.developmentAndLearningTitle = "//h5[text()='Development and Learning']"

        //WorkJam Category
        this.workJamTitle = "//h5[text()='WorkJam']"

        //Proactive Services T&A Category
        this.proactiveServicesTitle = "//h5[text()='Proactive Services T&A']"

        //W360 T&A Category
        this.w360Title = "//h5[text()='W360 T&A']"

        //Team View Category
        this.teamViewTitle = "//h5[text()='Team View']"

        //Mobility Category
        this.mobilityTitle = "//h5[text()='Mobility']"

        //People Dashboard Queries Category
        this.peopleDashboardQueriesTitle = "//h5[text()='People Data Self-Service']"

        //Remuneration Category
        this.remunerationTitle = "//h5[text()='Remuneration']"

        //Casual Conversion Category
        this.casualConversionTitle = "//h5[text()='Casual Conversion']"

        //Report Requests Category
        this.reportRequestsTitle = "//h5[text()='Report Requests']"
        this.targetedDeliveryDate = "//input[@name='Targeted_Delivery_Date__c']"
        this.requestFrequency = "//button[@name='Request Frequency']"
        this.requestFrequencyAdHoc = "[data-value='Ad Hoc Request (Created and shared to run as required on ongoing basis)']"
        this.requestFrequencyOneOff = "[data-value='One-off request']"
        this.requestFrequencyRegularScheduleReports = "[data-value='Regular/Scheduled Report']"
        this.specifyReportingPeriod = "//input[@name='Specify Reporting Period']"
        this.reportdatarequest = "//textarea[@name='Provide a description and purpose of the report / data request']"
        this.fieldsAreRequired = "//textarea[@name='Please specify the format of the output file']"
        this.employeePopulationIsTheData = "//textarea[@name='What employee population is the data / report required for?']"
        this.specificationsRequired = "//textarea[@name='Are there any other filters or specifications required for this report?']"
        this.outputFile = "//button[@name='Please specify the format of the output file']"
        this.outputFile_CSV = "[data-value='CSV']"
        this.outputFile_Excel = "[data-value='Google Sheet']"
        this.outputFile_Xlsx = "[data-value='Xlsx']"
        this.audience = "//button[@name='Audience']"
        this.audience_ER = "[data-value='Employee Relations']"
        this.audience_HR = "[data-value='Legal']"
        this.audience_Legal = "[data-value='Legal']"
        this.audience_NonHR = "[data-value='Non HR']"
        this.theirFirstName = "//input[@placeholder='Enter Name or Employee ID']"
        this.selecttheirName = "[data-subfield='Saravanan Sekar']"
        this.nextButton = "//button[text()='Next']"
        this.subject = "//input[@name='subject']"
        this.phoneNumber = "//input[@name='phnnumber']"
        this.email = "//input[@name='email']"
        this.contactMethod = "//button[@aria-label='Preferred contact method']"
        this.contactMethodDropDown = "[data-value='Email']"
        this.submitButton = "//button[text()='Submit']"
        this.previousButton = "//button[text()='Previous']"
        this.caseNumber = "//div[@class='cardNumCont']/h2"
        this.salarySacrificeCaseNumber = "(//p[@style='text-align: center;'])[4]/b"

        this.returnToPeopleServices = "[title='Return to People Services']"

        //Store User
        this.storeCategoriesSelection = "//h3[text()='${Categiories}']"





        // New Zealand
        this.nzPeopleQueryRequest = "//span[text()='Raise a People Query request']"
        this.nzSupportCategoriesSelection = "//h5[text()='${Categiories}']"


        // For You Module
        this.forYou = "//a[text()='For you']"
        this.allNews = "//a[text()='All news']"
        this.articleDate = "(//span[@class='date-time'])[1]"
        this.forYouArticleAuthorName = "(//span[@class='author-type'])[1]"
        this.allNewsArticleDate = "(//span[@class='date-time'])[6]"
        this.allNewsArticleAuthorName = "(//span[@class='author-type'])[6]"
        this.pinnedIcon = "(//span[@class='ts-icon icon-pin'])[1]"
        this.pinnedIconText = "(//p[@class='pinned-title'])[1]"
        this.pinnedArticle = '(//h2[contains(text(), "Automation Testing10")])[1]'
        this.pinnedArticlePageGroup = "//p[text()='Group']"
        this.pinnedArticlePageRecviedComms = '//p[contains(text(), "receiving communications")]'
        this.pinnedArticlePageArticlehelpful = '//div[contains(text(), "Was this article helpful")]'
        this.pinnedArticlePrint = "//span[text()='Print']"
        this.pinnedPagePrintIcon = "//i[@class='ts-icon-print']"
        this.pinnedArticlePageLikeButton = "//button[@title='Like']"
        this.pinnedArticlePageDislikeButton = "//button[@title='Dislike']"
        this.allNewsPinnedIcon = "(//span[@class='ts-icon icon-pin'])[2]"
        this.allNewsPinnedIconText = "(//p[@class='pinned-title'])[2]"
        this.articleTitle = "(//h2[text()='Automation Testing100'])[1]"
        this.articleTitle1 = "(//h2[text()='Automation Testing11'])[1]"
        this.articletitle2 = "(//h2[text()='Automation Testing122'])[1]"
        this.articleData = "(//span[text()='22 May 2025'])[1]"
        this.articleAuthorName = "(//span[text()='Saravanan Comms'])[1]"
        this.articleLogo = "//span[@class='feed-img']"
        this.forYouViewMoreOption = "//span[text()='View more']"
        this.forYouViewMoreArrowLogi = "//span[@class='ts-icon icon-arrow-right']"
        this.homePage = "[data-id='Home']"
        this.forYouArticleList = '(//div[@role="tabpanel"])[1]//div[@class="feed-block"]';
        this.allNewsArticleList = '(//div[@role="tabpanel"])[2]//div[@class="feed-block"]'
        this.allNewsPinnedArticleList = '(//div[@role="tabpanel"])[2]//div[@data-posttype="pinnedArticle"]'
        this.articlePriority = '(//div[@role="tabpanel"])[1]//h2[text()="PT-Article-Critical-15/05/20254860"]'
        this.latestPinnedArticle = "//div[@data-posttype='pinnedArticle'][@data-id='Automation-Testing']"
        this.anniversaryticle = '//h3[contains(text(), "Neyla BORDES has a Service Anniversary on the ")]'
        this.twoTeamMenbersAnniversaryticle = '//h3[contains(text(), "2 team members have Service Anniversaries on the")]'
        this.twoTeamMembersBirthdayArticle = '//h3[contains(text(), "2 team members have birthdays on the")]'
        this.upcomingAnniversaryticle = '//h1[contains(text(), "Upcoming Service Anniversar")]'
        this.twoTeamMemberUpcomingAnniversaryticle = '//h1[contains(text(), "2 team members have Service Anniversaries on the ")]'
        this.AnnaveraryAndBirthdayBackButton = "//button[text()='BACK']"
        this.birthdayArticle = '//h3[contains(text(), "Neyla BORDES has a birthday on the")]'
        this.upcomingBirthdayArticle = '//h1[contains(text(), "Upcoming birthday")]'
        this.twoTeamMembersUpcomingBirthdayArticle = '//h1[contains(text(), "2 team members have birthdays on")]'
        this.forYouNormalArticle = "(//div[@role='tabpanel'])[1]//div[@data-posttype='surfacedArticle']"
        this.tipToCelebrate = "(//a[text()='tips to celebrate'])[1]"
        this.tipToCelebratePage = '(//h2[contains(text(), "Creating a memorable")])[1]'
        this.birthDayArticleCount = '(//div[@role="tabpanel"])[1]//div[@data-id="Birthday"]'
        this.anniversaryArticleCount = '(//div[@role="tabpanel"])[1]//div[@data-id="Anniversary"]'



        //New Page Module
        this.newPageButton = "//a[@data-id='News']"
        this.newPagePinnedIcon = '//div[@class="pinned"]'
        this.newPagefirstSectionArticleCount = '(//div[@class="news-article-content"])[1]//h2[@class="article-title"]'
        this.newPageFirstSectioFirstArticle = '//div[@class="featured-article-text"]//h2[@class="article-title"]'
        this.newPageDateAndAuthorName = '(//div[@class="news-article-content"])//ul[@class="meta-data"]'
        this.newPageFirstSectionSecondRowArticle = '//c-recent-pinned-articles//h2[@class="article-title"]'
        this.newPageCoustmerFisrt = "//h2[text()='Customer 1st']"
        this.newPageAllNews = "//h2[text()='All news']"
        this.newPageThirdSectionArticleCount = '(//div[@class="news-article-content"])[3]//h2[@class="article-title"]'
        this.newPageThitrdSectionSearchedArticle = '(//div[@class="news-article-content"][3]//h2[@class="article-title"])[1]'
        this.showMoreButton = "//button[text()='Show more']"
        this.newPageArticleSearch = "(//input[@type='search'])[2]"
        this.pulishedDate = "//i[@class='ts-icon-pie-chart']"
        this.newPagepulishedStartDate = "//input[@name='startDate']"
        this.newPagepulishedEndDate = "//input[@name='endDate']"
        this.pulishedFilterButton = "//button[text()='Filter']"
        this.pulishedClearButton = "//button[text()='Clear']"
        this.customer1stFirstArticle = '((//div[@class="news-article-content"])[2]//h2[text()="Automation Testing101"])'
        this.customer1stSecondArticle = '((//div[@class="news-article-content"])[2]//h2[@class="article-title"])[2]'
        this.customer1stFirstSectionArticleCount = '(//div[@class="news-article-content"])[2]//h2[@class="article-title"]'
        this.customer1stButton = "//a[@data-name='Customer and Team']"
        this.dlUerArticle = "(//h2[text()='Automation Testing14'])[1]"
        this.dlUserArticleRecord = "(//h2[text()='Automation Testing15'])[1]"//"//h2[text()='Automation Testing15']"


        //HomePage -  Event
        this.greenEvent = '(//h5[@c-calendarhome_calendarhome=""])[2]'//"//h5[text()='Automation Testing for Green Event']"
        this.greenEventDateAndDay = '(//p[@c-calendarhome_calendarhome=""])[2]'//"//p[text()='Tuesday 18 June - Wednesday 19 June']"
        this.greenEventLearnMore = "//button[text()='Learn more']"
        this.eventGroup = "//p[text()='Group']"
        this.eventGroupTitle = "//h5[@data-aura-rendered-by]"
        this.greeneventBackGround = "[class='event-box harmony-event-box']"
        this.greenBackGround = "(//div[@data-id='Automation-Testing-for-Green-Event'])"
        this.googleCalenderHereessage = "//h5[@title='See the next event from your Google Calendar here!']"
        this.nextUpToday = "//h4[text()='Next up today']"
        this.blueEventTitle = '(//h5[@c-calendarhome_calendarhome=""])[2]';//"//h5[text()='Automation Testing for Blue Event']"
        this.blueEventDateAndDay = '(//p[@c-calendarhome_calendarhome=""])[2]'//"//p[text()='Monday 18 June, 4:30am - 4:45am']"
        this.blueEventAddToCalender = "//*[text()='Add to Calendar']"



    }

    async selectSubcatDropdown(subcatName) {
        await this.page.locator(this.subCatFieldClick).waitFor({ state: 'visible' });
        await this.page.locator(this.subCatFieldClick).click();
        const dynamicDropdownvalue = await this.page.locator(this.subcatDropdown.replace('${subcatName}', subcatName));
        await dynamicDropdownvalue.waitFor({ state: 'visible' });
        await dynamicDropdownvalue.click();
    }
    async clickOnpeopleRequest() {
        await this.page.locator(this.peopleRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.peopleRequest).click();
    }

    async clickOnpayAndBasicsTitle() {
        await this.page.locator(this.payAndBasicsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.payAndBasicsTitle).click();
    }
    async clickOnbenefitTitle() {
        await this.page.locator(this.benefitTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitTitle).click();
    }
    async clickOnCareerAndRecruitmentTitle() {
        await this.page.locator(this.careerAndRecuritmentTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.careerAndRecuritmentTitle).click();
    }
    async clickOnWorkplaceAdjustmentTitle() {
        await this.page.locator(this.workplaceAdjustmentTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.workplaceAdjustmentTitle).click();
    }
    async clickOnLeavingTheCompanyTitle() {
        await this.page.locator(this.leavingTheCompanyTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.leavingTheCompanyTitle).click();
    }
    async clickOnKronsTitle() {
        await this.page.locator(this.kronsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.kronsTitle).click();
    }
    async clickOnTeamDataAppTitle() {
        await this.page.locator(this.teamDataAppTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.teamDataAppTitle).click();
    }
    async clickOnSuccessFactorsTechnicalIssuesTitle() {
        await this.page.locator(this.successFactorsTechnicalIssuesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.successFactorsTechnicalIssuesTitle).click();
    }
    async clickOnDevelopmentAndLearningTitle() {
        await this.page.locator(this.developmentAndLearningTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.developmentAndLearningTitle).click();
    }
    async clickOnWorkJamTitle() {
        await this.page.locator(this.workJamTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.workJamTitle).click();
    }
    async clickOnProactiveServicesTitle() {
        await this.page.locator(this.proactiveServicesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.proactiveServicesTitle).click();
    }
    async clickOnW360Title() {
        await this.page.locator(this.w360Title).waitFor({ state: 'visible' });
        await this.page.locator(this.w360Title).click();
    }
    async clickOnTeamViewTitle() {
        await this.page.locator(this.teamViewTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.teamViewTitle).click();
    }
    async clickOnMobilityTitle() {
        await this.page.locator(this.mobilityTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.mobilityTitle).click();
    }
    async clickOnPeopleDashboardQueriesTitle() {
        await this.page.locator(this.peopleDashboardQueriesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.peopleDashboardQueriesTitle).click();
    }
    async clickOnRemunerationTitle() {
        await this.page.locator(this.remunerationTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.remunerationTitle).click();
    }
    async clickOnCasualConversionTitle() {
        await this.page.locator(this.casualConversionTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.casualConversionTitle).click();
    }
    async clickOnReportRequestsTitle() {
        await this.page.locator(this.reportRequestsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.reportRequestsTitle).click();
    }

    async clickonRaisingSomeone() {
        await this.page.locator(this.raisingSomeone).waitFor({ state: 'visible' });
        await this.page.locator(this.raisingSomeone).click();
    }
    async clickOnPreferredNameThroughSuccessFactors() {
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.preferredNameThroughSuccessFactors).waitFor({ state: 'visible' });
        await this.page.locator(this.preferredNameThroughSuccessFactors).click();
    }

    async clickOnNewRequest() {
        await this.page.locator(this.newRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequest).click();
        await this.page.locator(this.newRequestDropDown).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequestDropDown).click();
    }

    async fillTheExistingNumber(existingCaseNumber) {
        await this.page.locator(this.existingNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.existingNumber).fill(existingCaseNumber);
        // await this.page.waitForTimeout(5000);
    }


    async fillTheName(firstName) {
        await this.page.locator(this.theirFirstName).waitFor({ state: 'visible' });
        await this.page.locator(this.theirFirstName).fill(firstName);
        await this.page.locator(this.selecttheirName).waitFor({ state: 'visible' });
        await this.page.locator(this.selecttheirName).click();
        // await this.page.waitForTimeout(5000);
    }

    async clickOnNext() {
        await this.page.locator(this.nextButton).waitFor({ state: 'visible' });
        await this.page.locator(this.nextButton).click();
    }
    async fillTheSubject(subject) {
        await this.page.locator(this.subject).waitFor({ state: 'visible' });
        await this.page.fill(this.subject, subject);
        // await this.page.waitForTimeout(5000);
    }

    async fillThePhoneNumber(phoneNumber) {
        await this.page.locator(this.phoneNumber).waitFor({ state: 'visible' });
        await this.page.type(this.phoneNumber, phoneNumber);
        // await this.page.waitForTimeout(2000);
    }
    async fillTheEmail(email) {
        await this.page.locator(this.email).waitFor({ state: 'visible' });
        await this.page.locator(this.email).click();
        await this.page.locator(this.email).clear();
        await this.page.type(this.email, email);
        // await this.page.waitForTimeout(2000);
    }

    async clickOnPrevious() {
        await this.page.locator(this.previousButton).waitFor({ state: 'visible' });
        await this.page.locator(this.previousButton).click();
    }
    async clickOnSubmit() {
        await this.page.locator(this.submitButton).waitFor({ state: 'visible' });
        await this.page.locator(this.submitButton).click();
    }

    /*async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        // const caseNumber_trimmed = caseNumber.trim();
        // console.log(caseNumber_trimmed);
        return caseNumber_trimmed;
    } */

    async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        // Locate the element and extract its text content
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        const caseNumberTrimmed = caseNumber.trim();  // Trim any extra spaces
        console.log(caseNumberTrimmed);  // Log the case number
        return caseNumberTrimmed;  // Return the trimmed case number
    }


    async clickOnReturnToPeopleServices() {
        await this.page.locator(this.returnToPeopleServices).waitFor({ state: 'visible' });
        await this.page.locator(this.returnToPeopleServices).click();
    }

    //Report Requests Category
    async fillTheTargetedDeliveryDate(targetedDeliveryDate) {
        await this.page.locator(this.targetedDeliveryDate).waitFor({ state: 'visible' });
        await this.page.locator(this.targetedDeliveryDate).click();
        await this.page.locator(this.targetedDeliveryDate).fill(targetedDeliveryDate);
    }
    async clickOnRequestFrequency() {
        await this.page.locator(this.requestFrequency).waitFor({ state: 'visible' });
        await this.page.locator(this.requestFrequency).click();
        await this.page.locator(this.requestFrequencyAdHoc).waitFor({ state: 'visible' });
        await this.page.locator(this.requestFrequencyAdHoc).click();
    }
    async fillTheSpecifyReportingPeriod(specifyReportingPeriod) {
        await this.page.locator(this.specifyReportingPeriod).waitFor({ state: 'visible' });
        await this.page.locator(this.specifyReportingPeriod).fill(specifyReportingPeriod);
    }
    async fillTheReportDataRequest(dataRequest) {
        await this.page.locator(this.reportdatarequest).waitFor({ state: 'visible' });
        await this.page.locator(this.reportdatarequest).fill(dataRequest);
    }
    async fillTheFieldsAreRequired(fieldsAreRequired) {
        await this.page.locator(this.fieldsAreRequired).waitFor({ state: 'visible' });
        await this.page.locator(this.fieldsAreRequired).fill(fieldsAreRequired);
    }
    async fillTheEmployeePopulationIsTheData(dataReportRequired) {
        await this.page.locator(this.employeePopulationIsTheData).waitFor({ state: 'visible' });
        await this.page.locator(this.employeePopulationIsTheData).fill(dataReportRequired);
    }
    async fillTheSpecificationsRequired(specificationsRequired) {
        await this.page.locator(this.specificationsRequired).waitFor({ state: 'visible' });
        await this.page.locator(this.specificationsRequired).fill(specificationsRequired);
    }
    async clickOnOutputFile() {
        await this.page.locator(this.outputFile).waitFor({ state: 'visible' });
        await this.page.locator(this.outputFile).click();
        await this.page.locator(this.outputFile_CSV).waitFor({ state: 'visible' });
        await this.page.locator(this.outputFile_CSV).click();
    }
    async clickOnAudience() {
        await this.page.locator(this.audience).waitFor({ state: 'visible' });
        await this.page.locator(this.audience).click();
        await this.page.locator(this.audience_ER).waitFor({ state: 'visible' });
        await this.page.locator(this.audience_ER).click();
    }

    //Store User
    async clickOnStorePeopleService() {
        await this.page.locator(this.storePeopleServices).waitFor({ state: 'visible' });
        await this.page.locator(this.storePeopleServices).click();
    }
    async selectCatagiores(Categiories) {
        const categoryList = await this.page.locator(this.storeCategoriesSelection.replace('${Categiories}', Categiories));
        await categoryList.waitFor({ state: 'visible' });
        await categoryList.click();
    }






    //New Zealand
    async clickOnpeopleQueryRequest() {
        await this.page.locator(this.nzPeopleQueryRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.nzPeopleQueryRequest).click();
    }

    async nzSelectCatagioresSupportUser(Categiories) {
        const categoryList = await this.page.locator(this.nzSupportCategoriesSelection.replace('${Categiories}', Categiories));
        await categoryList.waitFor({ state: 'visible' });
        await categoryList.click();
    }






    //For You Module
    async verifyForYouAndAllewsFeild() {
        const forYouField = await this.page.locator(this.forYou);
        await expect(forYouField).toBeVisible();
        const allNewsField = await this.page.locator(this.allNews);
        await expect(allNewsField).toBeVisible();
    }

    async clickOnForYouAndAllNews() {
        await this.page.locator(this.forYou).waitFor({ state: 'visible' });
        await this.page.locator(this.forYou).click();
        await this.page.locator(this.allNews).waitFor({ state: 'visible' });
        await this.page.locator(this.allNews).click();
    }

    async checkingForYouColour() {
        const forYouField = await this.page.locator(this.forYou); // Replace with your actual field selector
        const forYouExpectedColor = 'rgb(14, 13, 38)'; // This is the RGB equivalent of #0E0D26
        const forYouExpectedFontSize = '16px'; // Replace with your expected font size
        const forYouExpectedFontStyle = '\"Roboto Bold\"';
        await expect(forYouField).toBeVisible();
        const color = await forYouField.evaluate(el => getComputedStyle(el).color);
        const fontSize = await forYouField.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await forYouField.evaluate(el => getComputedStyle(el).fontFamily);
        expect(color).toBe(forYouExpectedColor);
        expect(fontSize).toBe(forYouExpectedFontSize);
        expect(fontFamily).toBe(forYouExpectedFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }
    async checkingAllNewColour() {
        const allNewsField = await this.page.locator(this.allNews); // Replace with your actual field selector
        const allNewsExpectedColor = 'rgb(134, 133, 146)'; // This is the RGB equivalent of #0E0D26
        const allNewsExpectedFontSize = '16px'; // Replace with your expected font size
        const allNewsExpectedFontStyle = '\"Roboto Bold\"';
        await expect(allNewsField).toBeVisible();
        const allNewsColor = await allNewsField.evaluate(el => getComputedStyle(el).color);
        const allNewsFontSize = await allNewsField.evaluate(el => getComputedStyle(el).fontSize);
        const allNewsFontFamily = await allNewsField.evaluate(el => getComputedStyle(el).fontFamily);
        expect(allNewsColor).toBe(allNewsExpectedColor);
        expect(allNewsFontSize).toBe(allNewsExpectedFontSize);
        expect(allNewsFontFamily).toBe(allNewsExpectedFontStyle);
        console.log('Color:', allNewsColor);
        console.log('Font Size:', allNewsFontSize);
        console.log('Font Family:', allNewsFontFamily);

    }
    async clickOnAllNews() {
        await this.page.locator(this.allNews).waitFor({ state: 'visible' });
        const allNewsField = this.page.locator(this.allNews);
        await allNewsField.click();
    }

    async clickingAndVerifyingAllNews() {
        await this.page.locator(this.allNews).waitFor({ state: 'visible' });
        const allNewsField = this.page.locator(this.allNews);
        await allNewsField.click();
        await this.page.waitForTimeout(2000);
        const allNewsExpectedColor = 'rgb(30, 26, 52)'; // This is the RGB equivalent of #0E0D26
        const allNewsExpectedFontSize = '16px'; // Replace with your expected font size
        const allNewsExpectedFontStyle = '\"Roboto Bold\"';
        await expect(allNewsField).toBeVisible();
        const allNewsColor = await allNewsField.evaluate(el => getComputedStyle(el).color);
        const allNewsFontSize = await allNewsField.evaluate(el => getComputedStyle(el).fontSize);
        const allNewsFontFamily = await allNewsField.evaluate(el => getComputedStyle(el).fontFamily);
        expect(allNewsColor).toBe(allNewsExpectedColor);
        expect(allNewsFontSize).toBe(allNewsExpectedFontSize);
        expect(allNewsFontFamily).toBe(allNewsExpectedFontStyle);
        console.log('Color:', allNewsColor);
        console.log('Font Size:', allNewsFontSize);
        console.log('Font Family:', allNewsFontFamily);

    }

    async verifingForYouColour() {
        const forYouField = await this.page.locator(this.forYou);
        const forYouExpectedColor = 'rgb(134, 133, 146)'; // This is the RGB equivalent of #0E0D26
        const forYouExpectedFontSize = '16px'; // Replace with your expected font size
        const forYouExpectedFontStyle = '\"Roboto Bold\"';
        await expect(forYouField).toBeVisible();
        const color = await forYouField.evaluate(el => getComputedStyle(el).color);
        const fontSize = await forYouField.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await forYouField.evaluate(el => getComputedStyle(el).fontFamily);
        expect(color).toBe(forYouExpectedColor);
        expect(fontSize).toBe(forYouExpectedFontSize);
        expect(fontFamily).toBe(forYouExpectedFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }

    async verifyArticleDateAndAuthorName() {
        const articleDateField = await this.page.locator(this.articleDate);
        const articleAuthorNameField = await this.page.locator(this.forYouArticleAuthorName);
        await expect(articleDateField).toBeVisible();
        await expect(articleAuthorNameField).toBeVisible();
        const articleDate = await articleDateField.textContent();
        const forYouArticleAuthorName = await articleAuthorNameField.textContent();
        console.log('Article Date:', articleDate);
        console.log('Article Author Name:', forYouArticleAuthorName);
    }
    async verifyAllNewsArticleDateAndAuthorName() {
        const allNewsArticleDateField = await this.page.locator(this.allNewsArticleDate);
        const allNewsArticleAuthorNameField = await this.page.locator(this.allNewsArticleAuthorName);
        await expect(allNewsArticleDateField).toBeVisible();
        await expect(allNewsArticleAuthorNameField).toBeVisible();
        const allNewsArticleDate = await allNewsArticleDateField.textContent();
        const allNewsArticleAuthorName = await allNewsArticleAuthorNameField.textContent();
        console.log('All News Article Date:', allNewsArticleDate);
        console.log('All News Article Author Name:', allNewsArticleAuthorName);
    }

    async verifyPinnedIcon() {
        const pinnedIconField = await this.page.locator(this.pinnedIcon);
        await expect(pinnedIconField).toBeVisible();
        const pinnedIconTextField = await this.page.locator(this.pinnedIconText);
        await expect(pinnedIconTextField).toBeVisible();
        const pinnedIconText = await pinnedIconTextField.textContent();
        console.log('Pinned Icon Text:', pinnedIconText);
    }
    async clickOnPinnedArticle() {
        await this.page.locator(this.pinnedArticle).waitFor({ state: 'visible' });
        await this.page.locator(this.pinnedArticle).click();
    }
    async verifyOnPinnedArticlePage() {
        const pinnedArticlePageGroupField = await this.page.locator(this.pinnedArticlePageGroup);
        await expect(await pinnedArticlePageGroupField).toBeVisible({ timeout: 10000 });
        const pinnedArticlePageRecviedCommsField = await this.page.locator(this.pinnedArticlePageRecviedComms);
        await expect(pinnedArticlePageRecviedCommsField).toBeVisible();
        // const pinnedArticlePageArticlehelpfulField = await this.page.locator(this.pinnedArticlePageArticlehelpful);
        // await expect(pinnedArticlePageArticlehelpfulField).toBeVisible();
        const pinnedArticlePagePrintIconField = await this.page.locator(this.pinnedArticlePrint);
        await expect(pinnedArticlePagePrintIconField).toBeVisible();
        const pinnedArticlePagePrintIconText = await pinnedArticlePagePrintIconField.textContent();
        console.log('Pinned Article Page Print Icon Text:', pinnedArticlePagePrintIconText);
        const pinnedArticlePagePrintIcon = await this.page.locator(this.pinnedPagePrintIcon);
        await expect(pinnedArticlePagePrintIcon).toBeVisible();
        const pinnedArticlePageLikeButtonField = await this.page.locator(this.pinnedArticlePageLikeButton);
        await pinnedArticlePageLikeButtonField.click();
        const pinnedArticlePageDislikeButtonField = await this.page.locator(this.pinnedArticlePageDislikeButton);
        await pinnedArticlePageDislikeButtonField.click();
    }
    async verifyAllNewsPinnedIcon() {
        const allNewsPinnedIconField = await this.page.locator(this.allNewsPinnedIcon);
        await expect(allNewsPinnedIconField).toBeVisible();
        const allNewsPinnedIconTextField = await this.page.locator(this.allNewsPinnedIconText);
        await expect(allNewsPinnedIconTextField).toBeVisible();
        const allNewsPinnedIconText = await allNewsPinnedIconTextField.textContent();
        console.log('All News Pinned Icon Text:', allNewsPinnedIconText);
    }

    async verifictionOFViewMoreOptionAndArrowIconForForYou() {
        const forYouViewMoreOptionField = await this.page.locator(this.forYouViewMoreOption);
        await expect(forYouViewMoreOptionField).toBeVisible();
        const forYouViewMoreArrowLogiField = await this.page.locator(this.forYouViewMoreArrowLogi);
        await expect(forYouViewMoreArrowLogiField).toBeVisible();
        const forYouViewMoreArrowLogiText = await forYouViewMoreArrowLogiField.textContent();
        console.log('For You View More Arrow Logi Text:', forYouViewMoreArrowLogiText);
    }
    async clickOnViewMoreOption() {
        await this.page.locator(this.forYouViewMoreOption).waitFor({ state: 'visible' });
        await this.page.locator(this.forYouViewMoreOption).click();
        await this.page.waitForTimeout(5000);
    }
    async clickOnHomePage() {
        await this.page.locator(this.homePage).waitFor({ state: 'visible' });
        await this.page.locator(this.homePage).click();
    }
    async verifictionOFViewMoreOptionAndArrowIconForAllNews() {
        const allNewsMoreOptionField = await this.page.locator(this.forYouViewMoreOption);
        await expect(allNewsMoreOptionField).toBeVisible();
        const allNewsViewMoreArrowLogiField = await this.page.locator(this.forYouViewMoreArrowLogi);
        await expect(allNewsViewMoreArrowLogiField).toBeVisible();
        const forYouViewMoreOptionText = await allNewsMoreOptionField.textContent();
        console.log('For You View More Option Text:', forYouViewMoreOptionText);
        await this.page.locator(this.forYouViewMoreOption).click();

    }

    async verifyForYouTabArticlesCount() {
        await this.page.waitForSelector(this.forYouArticleList, { state: 'visible' });
        const articlesCount = await this.page.$$(this.forYouArticleList);
        expect(articlesCount.length).toBe(5);
    }
    async VerifyOnForYouBirthdayArticleCount() {
        await this.page.waitForSelector(this.birthDayArticleCount, { state: 'visible' });
        const birthdayArticleCount = await this.page.$$(this.birthDayArticleCount);
        expect(birthdayArticleCount.length).toBe(3);
    }
    async VerifyOnForYouAnniversaryArticleCount() {
        await this.page.waitForSelector(this.anniversaryArticleCount, { state: 'visible' });
        const anniversaryArticleCount = await this.page.$$(this.anniversaryArticleCount);
        expect(anniversaryArticleCount.length).toBe(3);
    }
    async verifyAllNewsTabArticlesCount() {
        await this.page.waitForSelector(this.allNewsArticleList, { state: 'visible' });
        const allNewsArticlesCount = await this.page.$$(this.allNewsArticleList);
        expect(allNewsArticlesCount.length).toBe(5);
    }
    async verifyAllNewsPinnedArticleListCount() {
        await this.page.waitForSelector(this.allNewsPinnedArticleList, { state: 'visible' });
        const allNewsPinnedArticlesCount = await this.page.$$(this.allNewsPinnedArticleList);
        expect(allNewsPinnedArticlesCount.length).toBe(3);
    }
    async verificationOnLatestArticlePinned() {
        const pinnedMessage = await this.page.locator(this.pinnedIcon);
        const textContent = await this.page.locator(this.articleTitle);
        const authorName = await this.page.locator(this.articleAuthorName);
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = today.toLocaleString('en-GB', { month: 'long' });
        const year = today.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        const dateLocator = await this.page.locator(`(//span[text()='${formattedDate}'])[1]`);
        console.log('Formatted Date:', formattedDate);
        await expect(pinnedMessage).toBeVisible();
        await expect(textContent).toHaveText('Automation Testing100');
        const act_articleTitle = await textContent.textContent();
        console.log('Text Content:', act_articleTitle);
        await expect(authorName).toHaveText('Saravanan Comms');
        const act_authorName = await authorName.textContent()
        console.log('Author Name:', act_authorName);
        // Check if the date element exists before asserting visibility
        const isDateVisible = await dateLocator.isVisible();
        await expect(dateLocator).toBeVisible(); // implicitly confirms date matches today's
    }
    async verificationOfDLarticleisNotVisible() {
        const dlArticle = await this.page.locator(this.dlUerArticle);
        await expect(dlArticle).not.toBeVisible();
    }
    async verificationOfDLArticleIsVisible() {
        const dlArticle = await this.page.locator(this.dlUerArticle);
        await expect(dlArticle).toBeVisible();
    }
    async verificationOFDLarticleRecordIsNotVisible() {
        const dlArticleRecord = await this.page.locator(this.dlUserArticleRecord);
        await expect(dlArticleRecord).not.toBeVisible();
    }
    async verificationOfDLArticleRecordIsVisible() {
        const dlArticleRecord = await this.page.locator(this.dlUserArticleRecord);
        await expect(dlArticleRecord).toBeVisible();
    }


    async verifyanniverysaryArticle() {
        const anniversaryArticle = await this.page.locator(this.anniversaryticle);
        await expect(anniversaryArticle).toBeVisible();
        const anniversaryArticleText = await anniversaryArticle.textContent();
        console.log('Anniversary Article Text:', anniversaryArticleText);
    }
    async verifyOnAnniverysaryIsNotVisible() {
        const anniversaryArticle = await this.page.locator(this.anniversaryticle);
        await expect(anniversaryArticle).not.toBeVisible();
    }
    async verifyOnBirthdayIsNotVisible() {
        const birthdayArticle = await this.page.locator(this.birthdayArticle);
        await expect(birthdayArticle).not.toBeVisible();
    }
    async clickOnanniversaryArticle() {
        await this.page.locator(this.anniversaryticle).waitFor({ state: 'visible' });
        await this.page.locator(this.anniversaryticle).click();
        await this.page.waitForTimeout(6000);
    }
    async verifyUpcomingAnniversaryArticle() {
        const upcomingAnniversaryArticle = await this.page.locator(this.upcomingAnniversaryticle);
        await expect(upcomingAnniversaryArticle).toBeVisible();
        const upcomingAnniversaryArticleText = await upcomingAnniversaryArticle.textContent();
        console.log('Upcoming Anniversary Article Text:', upcomingAnniversaryArticleText);
    }
    async clickOnAnnaveraryAndBirthdayBackButton() {
        await this.page.locator(this.AnnaveraryAndBirthdayBackButton).waitFor({ state: 'visible' });
        await this.page.locator(this.AnnaveraryAndBirthdayBackButton).click();
    }
    async verifyBirthdayArticle() {
        const birthdayArticle = await this.page.locator(this.birthdayArticle);
        await expect(birthdayArticle).toBeVisible();
        const birthdayArticleText = await birthdayArticle.textContent();
        console.log('Birthday Article Text:', birthdayArticleText);
    }
    async clickOnBirthdayArticle() {
        await this.page.locator(this.birthdayArticle).waitFor({ state: 'visible' });
        await this.page.locator(this.birthdayArticle).click();
        // await this.page.waitForTimeout(5000);
    }
    async verifyUpcomingBirthdayArticle() {
        const upcomingBirthdayArticle = await this.page.locator(this.upcomingBirthdayArticle);
        await expect(await upcomingBirthdayArticle).toBeVisible({ timeout: 10000 });
        const upcomingBirthdayArticleText = await upcomingBirthdayArticle.textContent();
        console.log('Upcoming Birthday Article Text:', upcomingBirthdayArticleText);
    }
    async verifyForYouNormalArticle() {
        await this.page.waitForSelector(this.forYouNormalArticle, { state: 'visible' });
        const articlesCount = await this.page.$$(this.forYouNormalArticle);
        expect(articlesCount.length).toBe(2)
    }
    async verifyTwoTeamMembersAnniversaryArticle() {
        const twoTeamMembersAnniversaryArticle = await this.page.locator(this.twoTeamMenbersAnniversaryticle);
        await expect(twoTeamMembersAnniversaryArticle).toBeVisible();
        const twoTeamMembersAnniversaryArticleText = await twoTeamMembersAnniversaryArticle.textContent();
        console.log('Two Team Members Anniversary Article Text:', twoTeamMembersAnniversaryArticleText);
    }
    async verifyTwoTeamMembersBirthdayArticle() {
        const twoTeamMembersBirthdayArticle = await this.page.locator(this.twoTeamMembersBirthdayArticle);
        await expect(twoTeamMembersBirthdayArticle).toBeVisible();
        const twoTeamMembersBirthdayArticleText = await twoTeamMembersBirthdayArticle.textContent();
        console.log('Two Team Members Birthday Article Text:', twoTeamMembersBirthdayArticleText);
    }
    async ClickOnTwoTeamMembersAnniversaryArticle() {
        await this.page.locator(this.twoTeamMenbersAnniversaryticle).waitFor({ state: 'visible' });
        await this.page.locator(this.twoTeamMenbersAnniversaryticle).click();
        // await this.page.waitForTimeout(5000);
    }
    async ClickOnTwoTeamMembersBirthdayArticle() {
        await this.page.locator(this.twoTeamMembersBirthdayArticle).waitFor({ state: 'visible' });
        await this.page.locator(this.twoTeamMembersBirthdayArticle).click();
        // await this.page.waitForTimeout(5000);
    }
    async verificationOnTwoTeamMembersAnniversaryArticle() {
        const upcomingAnniversaryArticle = await this.page.locator(this.twoTeamMemberUpcomingAnniversaryticle);
        await expect(upcomingAnniversaryArticle).toBeVisible();
        const upcomingAnniversaryArticleText = await upcomingAnniversaryArticle.textContent();
        console.log('Upcoming Anniversary Article Text:', upcomingAnniversaryArticleText);
    }
    async verificationOnTwoTeamMembersBirthdayArticle() {
        const upcomingBirthdayArticle = await this.page.locator(this.twoTeamMembersUpcomingBirthdayArticle);
        await expect(upcomingBirthdayArticle).toBeVisible();
        const upcomingBirthdayArticleText = await upcomingBirthdayArticle.textContent();
        console.log('Upcoming Birthday Article Text:', upcomingBirthdayArticleText);
    }

    async CheckOnAsendingOrderOfArticle() {
        const locators = [
            "(//span[@class='ts-icon icon-pin'])[1]",
            '//h3[contains(text(), "Neyla BORDES has a Service Anniversary on the ")]',
            '//h3[contains(text(), "Gabriel Marsland has a Service Anniversary on the")]',
            '//h3[contains(text(), "Omega Mangino CRISP has a birthday on the")]'
        ];
        const positions = [];
        for (const xpath of locators) {
            const elementHandle = await this.page.waitForSelector(`xpath=${xpath}`, { timeout: 10000 });
            const box = await elementHandle.boundingBox();
            if (!box) throw new Error(`Element not visible for XPath: ${xpath}`);
            positions.push(box.y);
        }
        const isAscending = positions.every((pos, i, arr) => i === 0 || arr[i - 1] <= pos);
        console.log('Are elements in ascending order?', isAscending);
    }
    async ClickOnTipsToCelebrate() {
        await this.page.waitForSelector(this.tipToCelebrate, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.tipToCelebrate)
        ])
        await page1.waitForLoadState('load');
        await page1.locator(this.tipToCelebratePage).waitFor({ state: 'visible' });
        const benefitsPage = await page1.locator(this.tipToCelebratePage);
        await expect(await benefitsPage).toBeVisible({ timeout: 20000 });
        return page1;
    }

    //New Page Module
    async clickOnNewPage() {
        await this.page.locator(this.newPageButton).waitFor({ state: 'visible' });
        await this.page.locator(this.newPageButton).click();
    }
    async VerifyOnNewPagePinnedArticleCount() {
        await this.page.waitForSelector(this.newPagePinnedIcon, { state: 'visible' });
        const pinnedArticleCount = await this.page.$$(this.newPagePinnedIcon);
        expect(pinnedArticleCount.length).toBe(3);
    }
    async VerifyOnArticleCountInFirstSection() {
        await this.page.waitForSelector(this.newPagefirstSectionArticleCount, { state: 'visible' });
        const firstSectionArticleCount = await this.page.$$(this.newPagefirstSectionArticleCount);
        expect(firstSectionArticleCount.length).toBe(10);
    }
    async VerifyOnArticleCountFirstSectionAndFirstRow() {
        await this.page.waitForSelector(this.newPageFirstSectioFirstArticle, { state: 'visible' });
        const firstSectionFirstRowArticleCount = await this.page.$$(this.newPageFirstSectioFirstArticle);
        expect(firstSectionFirstRowArticleCount.length).toBe(1);
    }
    async verifyOnPulishedDateAndPulishedName() {
        await this.page.waitForSelector(this.newPageDateAndAuthorName, { state: 'visible' });
        const pulishedDateAndPulishedName = await this.page.$$(this.newPageDateAndAuthorName);
        await this.page.waitForTimeout(5000);
        expect(pulishedDateAndPulishedName.length).toBe(10);
    }
    async verifyOnFirstSectionAndSecondRowInNewPage() {
        await this.page.waitForSelector(this.newPageFirstSectionSecondRowArticle, { state: 'visible' });
        const firstSectionSecondRowArticleCount = await this.page.$$(this.newPageFirstSectionSecondRowArticle);
        expect(firstSectionSecondRowArticleCount.length).toBe(3);
    }
    async VerifyOnCustomerFirstSection() {
        await this.page.waitForSelector(this.newPageCoustmerFisrt, { state: 'visible' });
        const coustmerFirst = await this.page.locator(this.newPageCoustmerFisrt);
        await expect(coustmerFirst).toBeVisible();
    }
    async verifyOnAllNewsSection() {
        await this.page.waitForSelector(this.newPageAllNews, { state: 'visible' });
        const allNewsSection = await this.page.locator(this.newPageAllNews);
        await expect(allNewsSection).toBeVisible();
    }
    async verifyOnSecondSectionArticleCount() {
        await this.page.waitForSelector(this.newPageThirdSectionArticleCount, { state: 'visible' });
        const secondSectionArticleCount = await this.page.$$(this.newPageThirdSectionArticleCount);
        expect(secondSectionArticleCount.length).toBe(18);
    }
    async verifyOnSecondSectionArticleCountwhenClickOnShowMore() {
        await this.page.waitForSelector(this.newPageThirdSectionArticleCount, { state: 'visible' });
        const secondSectionArticleCount = await this.page.$$(this.newPageThirdSectionArticleCount);
        expect(secondSectionArticleCount.length).toBe(30);
    }
    async clickOnShowMoreOption() {
        await this.page.locator(this.showMoreButton).waitFor({ state: 'visible' });
        await this.page.locator(this.showMoreButton).click();
        await this.page.waitForTimeout(5000);
    }
    async clickOnArticleSearch() {
        await this.page.locator(this.newPageArticleSearch).waitFor({ state: 'visible' });
        await this.page.locator(this.newPageArticleSearch).click();
    }
    async fillTheValueInArticleSearch(ArticleName) {
        await this.page.locator(this.newPageArticleSearch).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.type(this.newPageArticleSearch, ArticleName, { delay: 200 });
        await this.page.press(this.newPageArticleSearch, 'Enter');
    }
    async clickOnSearchedArticle() {
        await this.page.locator(this.newPageThitrdSectionSearchedArticle).waitFor({ state: 'visible' });
        await this.page.locator(this.newPageThitrdSectionSearchedArticle).click();
        // await this.page.waitForTimeout(5000);
    }
    async clickOnThirdSectionArticle() {
        await this.page.locator(this.newPageThirdSectionArticleCount).waitFor({ state: 'visible' });
        await this.page.locator(this.newPageThirdSectionArticleCount).click();
        await this.page.waitForTimeout(5000);
    }
    async clickOnPulishedDate() {
        await this.page.locator(this.pulishedDate).waitFor({ state: 'visible' });
        await this.page.locator(this.pulishedDate).click();
        // await this.page.waitForTimeout(5000);
    }
    async fillThePulishedStartDate(pulishedStartDate) {
        await this.page.locator(this.newPagepulishedStartDate).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.type(this.newPagepulishedStartDate, pulishedStartDate, { delay: 200 });
    }
    async fillThePulishedEndDate(pulishedEndDate) {
        await this.page.locator(this.newPagepulishedEndDate).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.type(this.newPagepulishedEndDate, pulishedEndDate);
    }
    async clickOnPulishedFilterButton() {
        await this.page.locator(this.newPagepulishedStartDate).waitFor({ state: 'visible' });
        await this.page.locator(this.newPagepulishedStartDate).click();
        await this.page.locator(this.pulishedFilterButton).waitFor({ state: 'visible' });
        await this.page.locator(this.pulishedFilterButton).click();
        await this.page.waitForTimeout(5000);
    }
    async clickOnPulishedClearButton() {
        await this.page.locator(this.pulishedClearButton).waitFor({ state: 'visible' });
        await this.page.locator(this.pulishedClearButton).click();
        await this.page.waitForTimeout(2000);
    }
    async verifyOnArticleTitleIsVisible() {
        const recentArticle = await this.page.locator(this.articleTitle1);
        await expect(recentArticle).not.toBeVisible();
    }
    async verifyOnRecentArticleTitleISVisible() {
        const recentArticle = await this.page.locator(this.articletitle2);
        await expect(recentArticle).toBeVisible();
        const recentArticleText = await recentArticle.textContent();
        console.log('Recent Article Text:', recentArticleText);
    }
    async verifyOnCustomer1stAcending() {
        const locators = [
            "(//h2[text()='Automation Testing100']",
            '((//div[@class="news-article-content"])[2]//h2[@class="article-title"])[2]',
        ];
        const positions = [];
        for (const xpath of locators) {
            const elementHandle = await this.page.waitForSelector(`xpath=${xpath}`, { timeout: 10000 });
            const box = await elementHandle.boundingBox();
            if (!box) throw new Error(`Element not visible for XPath: ${xpath}`);
            positions.push(box.y);
        }
        const isAscending = positions.every((pos, i, arr) => i === 0 || arr[i - 1] <= pos);
        console.log('Are elements in ascending order?', isAscending);
    }
    async verifyOnCustomer1stCount() {
        await this.page.waitForSelector(this.customer1stFirstSectionArticleCount, { state: 'visible' });
        const customer1stCount = await this.page.$$(this.customer1stFirstSectionArticleCount);
        expect(customer1stCount.length).toBe(3);
    }
    async clickOnCustomer1stButton() {
        await this.page.locator(this.customer1stButton).waitFor({ state: 'visible' });
        await this.page.locator(this.customer1stButton).click();
    }
    async verifyOnCustomer1stFirstArticle() {
        const customer1stFirstArticle = await this.page.locator(this.customer1stFirstArticle);
        await expect(customer1stFirstArticle).toBeVisible();
        const customer1stFirstArticleText = await customer1stFirstArticle.textContent();
        console.log('Customer 1st First Article Text:', customer1stFirstArticleText);
    }

    //Home Page event
    async checkingEventIsVisibleOrNot() {
        const recentGreenEvent = await this.page.locator(this.greenEvent);
        await expect(recentGreenEvent).toBeVisible();
        const recentGreenEventText = await recentGreenEvent.textContent();
        expect(recentGreenEventText).toContain(testdata.greenEeventTitleName);
        console.log('Event Group Text:', recentGreenEventText);
    }
    async checkingBlueEventIsVisibleOrNot() {
        const recentBlueEvent = await this.page.locator(this.blueEventTitle);
        await expect(recentBlueEvent).toBeVisible();
        const recentBlueEventText = await recentBlueEvent.textContent();
        expect(recentBlueEventText).toContain(testdata.blueEventTitleName);
        console.log('Blue Event Text:', recentBlueEventText);
    }
    async verifyOnStartDateAndEndDateVisibleOrNot() {
        const eventDateAndDay = await this.page.locator(this.greenEventDateAndDay);
        await expect(eventDateAndDay).toBeVisible();
        const eventDateAndDayText = await eventDateAndDay.textContent();
        console.log('Event Group Text:', eventDateAndDayText);
    }
    async verifyOnBlueeventStartDateAndEndDateVisibleOrNot() {
        const blueEventDateAndDay = await this.page.locator(this.blueEventDateAndDay);
        await expect(blueEventDateAndDay).toBeVisible();
        const blueEventDateAndDayText = await blueEventDateAndDay.textContent();
        console.log('Blue Event Date and Day Text:', blueEventDateAndDayText);
    }
    async verifyOnBlueEventAddToCalendarButton() {
        const blueEventAddToCalendarButton = await this.page.locator(this.blueEventAddToCalender);
        await expect(blueEventAddToCalendarButton).toBeVisible();
        const blueEventAddToCalendarButtonText = await blueEventAddToCalendarButton.textContent();
        console.log('Blue Event Add To Calendar Button Text:', blueEventAddToCalendarButtonText);
    }
    async checkingForGreenColourEvent() {
        const greenEventTitle = await this.page.locator(this.greenEvent); // Replace with your actual field selector
        const greenColorEvent = 'rgb(2, 122, 72)'; // This is the RGB equivalent of #0E0D26
        const greenEventFontSize = '16px'; // Replace with your expected font size
        const greenEventFontStyle = '\"Roboto Medium\"';
        await expect(greenEventTitle).toBeVisible();
        const color = await greenEventTitle.evaluate(el => getComputedStyle(el).color);
        const fontSize = await greenEventTitle.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await greenEventTitle.evaluate(el => getComputedStyle(el).fontFamily);
        expect(color).toBe(greenColorEvent);
        expect(fontSize).toBe(greenEventFontSize);
        expect(fontFamily).toBe(greenEventFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }
    async checkingForBlueColourEvent() {
        const blueEventTitle = await this.page.locator(this.blueEventTitle); // Replace with your actual field selector
        const blueColorEvent = 'rgb(17, 97, 212)'; // This is the RGB equivalent of #0E0D26
        const blueEventFontSize = '16px'; // Replace with your expected font size
        const blueEventFontStyle = '\"Roboto Medium\"';
        await expect(blueEventTitle).toBeVisible();
        const color = await blueEventTitle.evaluate(el => getComputedStyle(el).color);
        const fontSize = await blueEventTitle.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await blueEventTitle.evaluate(el => getComputedStyle(el).fontFamily);
        expect(color).toBe(blueColorEvent);
        expect(fontSize).toBe(blueEventFontSize);
        expect(fontFamily).toBe(blueEventFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }
    async checkingForGreenColourStartDateAndEndDate() {
        const greenEventTitle = await this.page.locator(this.greenEventDateAndDay); //
        const greenColorEvent = 'rgb(2, 122, 72)'; // This is the RGB equivalent of #0E0D26
        const greenEventFontSize = '14px'; // Replace with your expected font size
        const greenEventFontStyle = '\"Roboto Regular\"';
        await expect(greenEventTitle).toBeVisible();
        const color = await greenEventTitle.evaluate(el => getComputedStyle(el).color);
        const fontSize = await greenEventTitle.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await greenEventTitle.evaluate(el => getComputedStyle(el).fontFamily
        );
        expect(color).toBe(greenColorEvent);
        expect(fontSize).toBe(greenEventFontSize);
        expect(fontFamily).toBe(greenEventFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }
    async checkingForBlueColourStartDateAndEndDate() {
        const blueEventTitle = await this.page.locator(this.blueEventDateAndDay); // Replace with your actual field selector
        const blueColorEvent = 'rgb(17, 97, 212)'; // This is the RGB equivalent of #0E0D26
        const blueEventFontSize = '14px'; // Replace with your expected font size
        const blueEventFontStyle = '\"Roboto Regular\"';
        await expect(blueEventTitle).toBeVisible();
        const color = await blueEventTitle.evaluate(el => getComputedStyle(el).color);
        const fontSize = await blueEventTitle.evaluate(el => getComputedStyle(el).fontSize);
        const fontFamily = await blueEventTitle.evaluate(el => getComputedStyle(el).fontFamily);
        expect(color).toBe(blueColorEvent);
        expect(fontSize).toBe(blueEventFontSize);
        expect(fontFamily).toBe(blueEventFontStyle);
        console.log('Color:', color);
        console.log('Font Size:', fontSize);
        console.log('Font Family:', fontFamily);
    }

    async checkingForGreenBackGroundColourEvent() {
        const greenEventTitle = this.page.locator(this.greenBackGround); // Make sure selector targets correct element
        const expectedBackgroundColor = 'rgb(236, 253, 243)'; // This is #ECFDF3
        await expect(greenEventTitle).toBeVisible({ timeout: 5000 });
        const backgroundColor = await greenEventTitle.evaluate(el => {
            return window.getComputedStyle(el).backgroundColor;
        });
        console.log('🎨 Background Color:', backgroundColor);
        expect(backgroundColor).toBe(expectedBackgroundColor);
    }
    async checkingOnDateAndDay() {
        const today = new Date();
        const day = today.getDate().toString();
        const shortDay = today.toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase();
        console.log('Looking for today’s date:', day);
        console.log('Looking for today’s day:', shortDay);
        const dateLocator = this.page.locator(`//*[normalize-space(text())='${day}']`);
        const dateCount = await dateLocator.count();
        let dayFound = false;
        for (let i = 0; i < dateCount; i++) {
            const el = dateLocator.nth(i);
            if (await el.isVisible()) {
                dayFound = true;
                console.log(`Found visible date element: "${await el.textContent()}"`);
                await expect(el).toBeVisible();
                break;
            }
        }
        if (!dayFound) {
            throw new Error(`Could not find a visible element matching today’s date: ${day}`);
        }
        const dayLocator = this.page.locator(`//*[normalize-space(text())='${shortDay}']`);
        const dayCount = await dayLocator.count();
        let dayOfWeekFound = false;
        for (let i = 0; i < dayCount; i++) {
            const el = dayLocator.nth(i);
            if (await el.isVisible()) {
                dayOfWeekFound = true;
                console.log(`Found visible weekday element: "${await el.textContent()}"`);
                await expect(el).toBeVisible();
                break;
            }
        }
        if (!dayOfWeekFound) {
            throw new Error(`Could not find a visible element matching today’s weekday: ${shortDay}`);
        }
        console.log('Successfully verified today’s date and weekday!');
    }
    async clickOnLearnButtonINGreenEvent() {
        await this.page.locator(this.greenEventLearnMore).waitFor({ state: 'visible' });
        await this.page.locator(this.greenEventLearnMore).click();
    }
    async verifyOnGreenEvent() {
        const eventGroupessage = this.page.locator(this.eventGroup);
        await expect(eventGroupessage).toBeVisible();
        const eventGroupessageText = await eventGroupessage.textContent();
        console.log('Customer 1st First Article Text:', eventGroupessageText);
        const greenEventTitleName = this.page.locator(this.eventGroupTitle);
        await expect(greenEventTitleName).toBeVisible();
        const greenEventTitleNameText = await greenEventTitleName.textContent();
        expect(greenEventTitleNameText).toContain(testdata.greenEeventTitleName);
        console.log('Customer 1st First Article Text:', greenEventTitleNameText);
    }
    async verifyOnNextUpTodayAndGoogleCalendar() {
        const nextUpTodayMessage = this.page.locator(this.nextUpToday);
        await expect(nextUpTodayMessage).toBeVisible();
        const nextUpTodayMessageText = await nextUpTodayMessage.textContent();
        console.log('Next Up Today Text:', nextUpTodayMessageText);
        const googleCalenderessage = this.page.locator(this.googleCalenderHereessage);
        await expect(googleCalenderessage).toBeVisible();
        const googleCalenderessageText = await googleCalenderessage.textContent();
        console.log('Google Calendar Text:', googleCalenderessageText);
    }
    async verifyOnAddToCelanderButton() {
        const addToCalendarButton = this.page.locator(this.blueEventAddToCalender);
        await expect(addToCalendarButton).toBeVisible();
        const addToCalendarButtonText = await addToCalendarButton.textContent();
        console.log('Add To Calendar Button Text:', addToCalendarButtonText);
    }
    async verifyOnEventOrders() {
        const locators = [
            "//h5[text()='Automation Testing for Blue Event']",
            "//h5[text()='Automation Testing for Green Event']"
        ];
        const positions = [];
        for (const xpath of locators) {
            const elementHandle = await this.page.waitForSelector(`xpath=${xpath}`, { timeout: 10000 });
            const box = await elementHandle.boundingBox();
            if (!box) throw new Error(`Element not visible for XPath: ${xpath}`);
            positions.push(box.y);
        }
        const isAscending = positions.every((pos, i, arr) => i === 0 || arr[i - 1] <= pos);
        console.log('Are elements in ascending order?', isAscending);
    }

    verifyOnAddToCelanderPosition() {

    }













}








