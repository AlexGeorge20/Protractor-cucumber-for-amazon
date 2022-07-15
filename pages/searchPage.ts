import { $, browser, ElementFinder, protractor } from "protractor";
import { element, by } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
export class SearchPageObject {
    public pincode: ElementFinder;
    public searchPin: ElementFinder;
    public zipapply: ElementFinder;
    public updatedpin: ElementFinder;
    public hellosignin: ElementFinder
    public inputemail: ElementFinder;
    public clickcontinue: ElementFinder;
    public inputpwd: ElementFinder;
    public signinbtn: ElementFinder;
    public searchbox: ElementFinder;
    public submitSearch: ElementFinder;
    public pagecount: ElementFinder;

    public nextbtn: ElementFinder;
    public firstiteminpg: ElementFinder;

    public addtocart: ElementFinder;
    public productTitle: ElementFinder;
    public sidesheetclosebtn: ElementFinder;
    public cartCount: ElementFinder;
    public cartPage: ElementFinder;
    public itemNameincart: ElementFinder;
    public deleteProduct: ElementFinder;
    public activeItem: ElementFinder;
    public delbtn: ElementFinder;
    public japan: ElementFinder;
    public lowtohigh: ElementFinder;
    public sortby: ElementFinder;
    public sortedText: ElementFinder;
    public hightolow: ElementFinder;
    public avgreview: ElementFinder;
    public newArrival: ElementFinder;
    public applebrand: ElementFinder;
    public minbox: ElementFinder;
    public gobtn: string;
    public priceofitem1: ElementFinder;
     public starRating: ElementFinder;
     public starRatingI: string;
    public careers: ElementFinder;
    careersearchbox: ElementFinder;
    careersearchbtn: ElementFinder;
    sftdevbtn: ElementFinder;
    austria: ElementFinder;
    jobtitleblocks: ElementFinder;
    openingCount: any;
    languageBox: ElementFinder;
    malayalam: ElementFinder;
    savelanguagebtn: ElementFinder;
    yourWishlist: ElementFinder;
    languageEnglish: ElementFinder;


    constructor() {
        this.pincode = element(by.id("glow-ingress-line2"));
        this.searchPin = element(by.id("GLUXZipUpdateInput"))
        this.zipapply = element(by.id("GLUXZipUpdate")).element(by.css("input[aria-labelledby='GLUXZipUpdate-announce']"))
        this.updatedpin = element(by.id("glow-ingress-block")).element(by.id("glow-ingress-line2"))
        this.hellosignin = element(by.id("nav-link-accountList"))
        this.inputemail = element(by.id("ap_email"))
        this.clickcontinue = element(by.css("input[id='continue']"))
        this.inputpwd = element(by.id("ap_password"))
        this.signinbtn = element(by.id("signInSubmit"))
        this.searchbox = element(by.id("twotabsearchtextbox"))
        this.submitSearch = element(by.id("nav-search-submit-button"));
        this.pagecount = element(by.css("[class='s-pagination-strip']")).element(by.css("a:nth-child(6)"))
        this.nextbtn = element(by.className("s-pagination-item s-pagination-next s-pagination-button s-pagination-separator"))
        this.firstiteminpg = element(by.css("div[cel_widget_id='MAIN-SEARCH_RESULTS-2']")).element(by.css("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']"))
        this.addtocart = element(by.id("add-to-cart-button"))
        this.productTitle = element(by.id("productTitle"))
        this.sidesheetclosebtn = element.all(by.id("attach-close_sideSheet-link")).get(0)

        this.cartCount = element(by.id("nav-cart-count-container")).element(by.id("nav-cart-count"))
        this.cartPage = element(by.id("nav-cart"))
        this.itemNameincart = element.all(by.css("div[data-item-index='1']")).get(0).element(by.css("li:nth-child(1)")).element(by.css("span[class='a-truncate a-size-medium']")).element(by.css("span[class='a-truncate-full a-offscreen']"))
        this.activeItem = element(by.css("div[data-name='Active Items']"))
        this.delbtn = element(by.css("input[data-action='delete']"))
        this.japan=element(by.linkText("Japan"))

    this.sortby=element(by.css("span[aria-label='Sort by:']")).element(by.css("span[class='a-button-inner']"))
    this.lowtohigh=element.all(by.xpath("//*[@id='s-result-sort-select_1']")).get(0)
    this.sortedText=element(by.css("span[aria-label='Sort by:']")).element(by.css("span[class='a-button-inner']")).element(by.css("span[class='a-dropdown-prompt']"))
    this.hightolow=element.all(by.xpath("//*[@id='s-result-sort-select_2']")).get(0)
    this.avgreview=element.all(by.xpath("//*[@id='s-result-sort-select_3']")).get(0)
   this.newArrival=element.all(by.xpath("//*[@id='s-result-sort-select_4']")).get(0)
this.applebrand=element(by.css("div[id='brandsRefinements']")).element(by.id("p_89/Apple")).element(by.css("div[class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']"))

this.minbox=element(by.css("input[id='low-price']"))

this.priceofitem1= element(by.xpath("//*[@id='search']/div[1]/div[1]/div/span[3]/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[1]/div/a/span/span[2]/span[2]"))
this.starRating = element(by.className('a-icon a-icon-star-medium a-star-medium-4'))
this.starRatingI ='i[class="a-icon a-icon-star-medium a-star-medium-4"]';
this.gobtn='input[aria-labelledby="a-autoid-1-announce"]'
this.careers=element(by.linkText("Careers"))
this.careersearchbox=element.all(by.css("input[placeholder='Search for jobs']")).get(1)
this.careersearchbtn=element(by.id("search-button"))
this.sftdevbtn=element.all(by.css("button[data-label='Software Development']")).get(0)
this.austria=element.all(by.css("button[data-label='Austria']")).get(0)
this.jobtitleblocks=element(by.css("div[class='job-tile']"))
this.openingCount=element.all(by.css("div[class='job-tile']"))
this.languageBox=element(by.id('icp-touch-link-language'))
this.malayalam=element(by.xpath("//*[@id='icp-language-settings']/div[7]/div/label/i"))
this.savelanguagebtn=element(by.css("input[aria-labelledby='icp-save-button-announce']"))
this.yourWishlist=element(by.linkText('Your Wish List'))
this.languageEnglish=element(by.xpath("//*[@id='icp-language-settings']/div[2]/div/label/i"))
}

    present = async (toCheck: ElementFinder, checkvisiblity: boolean = true): Promise<void> => {
        if (checkvisiblity) {
            var EC = protractor.ExpectedConditions;
            await browser.wait(EC.visibilityOf(toCheck), 10000);
        }
        await toCheck.isPresent();
        const elementDisplyed = await toCheck.isDisplayed();
        console.log("DISPLAYED", await toCheck.isDisplayed());
        expect(elementDisplyed).to.be.true;
    }
    deleteItem = async (): Promise<void> => {
        await this.present(this.cartCount)
        console.log("For delete-item count in container ");
        let itemno = parseInt((await this.cartCount.getText()), 10)
        console.log("Items IN CARt", itemno, typeof itemno);
        await browser.executeScript(`arguments[0].scrollIntoView();`, this.cartPage.getWebElement());
        if (itemno > 0) {
            await this.cartPage.click();
            console.log("checking items in cart");
            for (let i = 0; i < itemno; i++) {
                console.log("INSIDE loop", i + 1);
                await this.present(this.activeItem.element(by.css(`div[data-item-index='${i + 1}']`)).element(by.css("input[data-action='delete']")))
                await browser.sleep(3000)
                await this.activeItem.element(by.css(`div[data-item-index='${i + 1}']`)).element(by.css("input[data-action='delete']")).click()
                console.log("Deleted", i + 1);
                await browser.sleep(3000)

            }
        }
    }
    scroll = async (eleItem: ElementFinder): Promise<void> => {
        await browser.executeScript(`arguments[0].scrollIntoView();`, eleItem.getWebElement());

    }
     sortbyclick=async (sortedItem:ElementFinder):Promise<string>=>{

        await this.sortby.click()
        console.log("sort by btn clicked");
        await browser.sleep(3000)
        await browser.executeScript('arguments[0].click()', sortedItem);
        let sortName=await this.sortedText.getText()
        console.log("SortName",sortName);
        return sortName
} 
     clickAble=async (elemtocheck:ElementFinder):Promise<void>=>{
             var EC = protractor.ExpectedConditions;
             browser.wait(EC.elementToBeClickable(elemtocheck), 10000);
}
 selectLanguage=async (LANGUAGE:ElementFinder):Promise<void>=> {
    await this.languageBox.click()
    await browser.sleep(3000)
    await LANGUAGE.click()
    await browser.sleep(3000)
    await this.savelanguagebtn.click()
    await browser.sleep(3000)
}
}
