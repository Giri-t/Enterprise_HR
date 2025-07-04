import { expect } from "allure-playwright";

export class Home_page_events{

    constructor(page){
        this.page = page;
        this.publish='//button[@name="Knowledge__kav.Publish"]'
        this.scheduleevent="//span[text()='Schedule publication on']"
        this.click_on_schedule='//input[@name="scheduleDate"]'
        this.publish_event_button='//div[@class="slds-col modal-footer slds-modal__footer cPublishKnowledgeComponent"]//button[@class="slds-button slds-button_brand"]'
        this.closepopup='//button[@title="Close"]'
        this.publish_now="//span[text()='Publish now']"
       
    }
    async Publish_events(){
        await this.page.locator(this.publish).click();
    }
    async verify_publish(){
        await this.page.locator('//*[@class="slds-page-header__detail-block"]//p//lightning-formatted-text[text()="Published"]').waitFor({ state: 'visible' });
        const publish_text=await this.page.locator('//*[@class="slds-page-header__detail-block"]//p//lightning-formatted-text[text()="Published"]').textContent()
        console.log(publish_text)
        expect(publish_text).toContain("Published");
    }
    async scheduleEvent(schedule_date){
        await this.page.waitForTimeout(7000)
        await this.page.locator(this.scheduleevent).click();
        await this.page.locator(this.click_on_schedule).click();
        await this.page.locator(this.click_on_schedule).fill(schedule_date)
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.publish_event_button).click();
        // await this.page.locator(this.verify_schedule).waitFor({ state: 'visible' });
        

    }
    async clickOnPublishNow(){
        await this.page.locator(this.publish_now).click();
        await this.page.locator(this.publish_event_button).click();
        
    }
    async close_popup_on_publishevent(){
        await this.page.locator(this.closepopup).click()
        
    }

    async applauncher_me_wooleis(){
        await this.page.getByPlaceholder("Search apps and items...").waitFor({ state: 'visible' });
        await this.page.getByPlaceholder("Search apps and items...").fill("Me@Woolies");
        await this.page.locator('//p[@class="slds-truncate"]//b[text()="Me@Woolies"]').waitFor({ state: 'visible' });
        const[me_woolies]=await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator('//p[@class="slds-truncate"]//b[text()="Me@Woolies"]').click()
        ])
        await this.page.close();
        return me_woolies;
      
        
        
    }
    async three_events(){
        await this.page.locator('//div[@class="event-box upcoming-event-box"]').first().waitFor({ state: 'visible' });
        // await this.page.locator('//div[@class="event-box upcoming-event-box"]').waitFor({ state: 'visible' });
        const count=await this.page.locator('//div[@class="event-box upcoming-event-box"]').count()
        if (count <= 3){
            console.log("Three events are present in the page")
        }else{
            console.log("Three events are not present in the page")
        }
    }

    async color_of_event(){
        const color = await this.page.locator("//p[contains(text(),'Wednesday 02 July, 1:15am - 1:15am')]").first().evaluate(el => getComputedStyle(el).color);
        console.log(color);
        if (color ==='rgb(17, 97, 212)') {
        console.log('The word "giri" is blue.');
}       else {
        console.error(`The word "giri" is not blue. Found color: ${color}`);
}}

    async click_on_event(){
        await this.page.locator("//p[contains(text(),'Wednesday 02 July, 1:15am - 1:15am')]").first().click();
        await this.page.waitForTimeout(2000);

    }

    async Verify_no_events(){
        await this.page.locator("//p[contains(text(),'No upcoming events available')]").waitFor({ state: 'visible' });
        const No_events=await this.page.locator("//p[contains(text(),'No upcoming events available')]").textContent();
        console.log(No_events)
        await expect(No_events).toContain("No upcoming events available");
    }
    async Verify_draft(){
        await this.page.locator('//*[@class="slds-page-header__detail-block"]//*[text()="Draft"]').waitFor({ state: 'visible' })
        const draft=await this.page.locator('//*[@class="slds-page-header__detail-block"]//*[text()="Draft"]').textContent()
        console.log(draft)
        expect (draft).toContain("Draft");
    }
async verify_moreoptions_notpresent(){
    const moreoptions= await this.page.locator('//div[@class="slds-card__body event-list"]').textContent()
    expect(moreoptions).not.toContain("View more");
}

}