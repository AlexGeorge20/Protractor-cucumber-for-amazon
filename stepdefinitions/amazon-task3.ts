import { EMLINK } from "constants";
import { Given } from "cucumber";
import { setMaxListeners } from "process";
import { browser, element, by, protractor, ElementFinder } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var assert = require('assert')
var should = require('chai').should()
const search: SearchPageObject = new SearchPageObject();
let wishlistcount:number
When(/^I click on Careers$/, { timeout: 2 * 1050000 }, async () => {
    await search.scroll(search.careers)
    await search.present(search.careers)
    await search.careers.click()
    console.log("scrolled to careers");
    await search.present(search.careersearchbox)
    await search.careersearchbox.sendKeys("development") 
    await browser.sleep(3000)
    await search.careersearchbtn.click() 
    console.log("BTN CLicked");
    await search.present(search.sftdevbtn)
    await search.sftdevbtn.click()
    await browser.sleep(3000)
    await search.present(search.austria)
    await search.scroll(search.austria)
    await search.austria.click() 
    await browser.sleep(3000)
    })
Then(/^Check openings on page is below 11$/, { timeout: 2 * 1050000 }, async () => {
    let count:number
    let openingavailable=await search.jobtitleblocks.isPresent()
    if(openingavailable){
        count= await search.openingCount.count()
        console.log("Openings available in page1",count);
    }else{
        console.log("No Openings");
            }
            console.log("COUNT",count);
            
    //    expect(count).to.be.within(0,10) 
       expect(count).to.be.below(11)     
    
})

When(/^I select Malayalam as language$/, { timeout: 2 * 1050000 }, async () => {
    await search.selectLanguage(search.malayalam)
    await browser.sleep(3000)


})
Then(/^I check if language is Malayalam$/, { timeout: 2 * 1050000 }, async () => {
   await search.scroll(search.languageBox)
    let language=await search.languageBox.getAttribute('innerText')
    console.log("LANGUAGE",language);
   let languageURL= await browser.getCurrentUrl()
   console.log("LANGUAGEUrl",languageURL);
    expect(languageURL).to.have.string("language=ml_IN")
    await browser.sleep(3000)
  
})
Then(/^Select English as language$/, { timeout: 2 * 1050000 }, async () => {
   
    await search.selectLanguage(search.languageEnglish)
    await browser.sleep(3000)
   
})
When(/^I click on Your Wish List$/, { timeout: 2 * 1050000 }, async () => {
    // await search.hellosignin.click();
   await browser.actions().mouseMove(search.hellosignin).perform()
    await browser.sleep(2000)
    console.log("mouse moved to signIn btn");

    await search.yourWishlist.click()
    await browser.sleep(2000)


})
Then(/^Check count of items in wishlist page1$/, { timeout: 2 * 1050000 }, async () => {
    wishlistcount= await element.all(by.css('li[class="a-spacing-none g-item-sortable"]')).count()
console.log("WISHListcount",wishlistcount);

})
Then(/^Add all wishlist items to cart and check if cart count is same$/, { timeout: 2 * 1050000 }, async () => {
    await browser.sleep(3000)
    for(let i= 2 ;i <= wishlistcount+1; i++){
        await element(by.xpath(`//*[@id='g-items']/li[${i}]`)).click()

        await browser.sleep(3000)
        console.log("ADDing item to cart",i-1);
        }
        await browser.sleep(3000)
        await  browser.get("https://www.amazon.in")
        let itemno = parseInt((await search.cartCount.getText()), 10)
        console.log("Items IN CARt", itemno, typeof itemno);
        console.log("WL/item count",wishlistcount,itemno);

        expect(wishlistcount).to.equal(itemno)
        
})