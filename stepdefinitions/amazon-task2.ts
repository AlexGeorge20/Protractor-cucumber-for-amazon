import { EMLINK } from "constants";
import { Given } from "cucumber";
import { browser, element, by, protractor, ElementFinder } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var assert = require('assert')
var should = require('chai').should()
const search: SearchPageObject = new SearchPageObject();

When(/^I click on Japan$/, { timeout: 2 * 105000 }, async () => {
    await search.scroll(search.japan)
    await search.present(search.japan)
    await search.japan.click()
    // console.log("scrolled to Japan");
    await search.present(element(by.id("nav-logo")).element(by.id("nav-logo-sprites")).element(by.css("span[class='nav-logo-locale']")))
    let countrydomain= await element(by.id("nav-logo")).element(by.id("nav-logo-sprites")).element(by.css("span[class='nav-logo-locale']")).getText()
    //  console.log("Country",countrydomain);
     expect(countrydomain).to.have.string('.co.jp');
    
    // console.log("JAPAN clicked");
        await browser.sleep(2000)
       await browser.get("http://www.amazon.in");
})
  When(/^Enter "(.*?)" in searchbar$/, { timeout: 2 * 105000 }, async (itemName:string) => {
   
    await search.present(search.searchBox)
    await search.searchBox.sendKeys(itemName);
    await browser.executeScript(`arguments[0].scrollIntoView();`, search.submitSearch.getWebElement());
    
    // console.log("searchbn");
    await search.present(search.submitSearch)
    await browser.sleep(3000);
    await search.submitSearch.click();
    await browser.sleep(3000);
    // console.log("ITEM",itemName);
     
  })
  Then(/^Click on sortby button$/, { timeout: 3 * 150000 }, async () => {
   
   let lowtoHighname= await search.sortbyclick(search.lowtohigh)
//    console.log("L2H", lowtoHighname);
   expect(lowtoHighname).to.have.string('Price: Low to High');
        //   console.log("same text");
    await browser.sleep(2000)
//--------------------------------------


    await search.sortBy.click()
    await browser.sleep(2000)
    // console.log("h2L click");
     await browser.executeScript('arguments[0].click()', search.hightolow);

    // console.log("h2L clicked");
        await browser.sleep(3000)
    let sortName2=await search.sortedText.getText()
    //  console.log("SortName2",sortName2);
    expect(sortName2.trim()).to.have.string('Price: High to Low');
//---------------------------------------------------
await search.sortBy.click()
    await browser.sleep(2000)
    // console.log("review click");
    await browser.executeScript('arguments[0].click()', search.avgReview);
    // console.log("review clicked");
        await browser.sleep(3000)
    let sortName3=await search.sortedText.getText()
    //  console.log("SortName3",sortName3);
    expect(sortName3).to.have.string('Avg. Customer Review');
//----------------------------
await browser.sleep(2000)
    // console.log("newArrival click");
    await browser.executeScript('arguments[0].click()', search.newArrival);
    // console.log("newArrival clicked");
        await browser.sleep(3000)
    let sortName4=await search.sortedText.getText()
    //  console.log("SortName4",sortName4);
    expect(sortName4).to.have.string('Newest Arrivals');

  });
  Then(/^Select Apple from brands$/, { timeout: 2 * 105000 }, async () => {
   
    await browser.executeScript('arguments[0].click()', search.appleBrand);
    // console.log("Apple clicked");
    await browser.sleep(3000)

})
Then(/^Check all are Apple products$/, { timeout: 2 * 105000000 }, async () => {
  
let checkbxname=await(element.all(by.css('span[class="a-size-base-plus a-color-base a-text-normal"]')).get(0)).getAttribute('innerText')
console.log("chkbxname",checkbxname);
expect(checkbxname).to.have.string("Apple")
console.log("Product is of Apple brand");

    
})
Then(/^Check if customer review is 4 star and up$/, { timeout: 2 * 105000000 }, async () => {
     const urlbefore=await browser.getCurrentUrl()
    await search.scroll(search.starRating);
    await browser.sleep(3000)
    await browser.executeScript(`document.querySelectorAll('${search.starRatingI}')[0].click()`).catch((err: Error) => { throw new Error(`Unable to click: [${search.starRating}]`); });


console.log("PRESENT& SCORLLEd");
    const urlafter=await browser.getCurrentUrl()
    // console.log("URLbefr",urlbefore);
    // console.log("URLaftr",urlafter);

  await browser.sleep(5000)

for(let i=2;i<= 20;i++){
   let sponsered= await element(by.css(`div[cel_widget_id="MAIN-SEARCH_RESULTS-${i}"]`)).element(by.css("div[class='a-row a-spacing-micro']")).isPresent()
    //   console.log("SPONSEred",sponsered);
      if(sponsered){
    // console.log("IGnore SPOnsored");
    
    continue
   }else{
   const fourstarPresent= await element(by.css(`div[cel_widget_id="MAIN-SEARCH_RESULTS-${i}"]`)).element(by.css("i[class='a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom']")).isPresent()
     const namepdt=await element(by.css(`div[cel_widget_id="MAIN-SEARCH_RESULTS-${i}"]`)).element(by.css("span[class='a-size-medium a-color-base a-text-normal']")).getAttribute('innerText')
//    console.log("Unsponsored Product is 4 star&abv",fourstarPresent);
//    console.log("Unsponsored pName",namepdt);
       break
}
}
// console.log("4& UPclicked");
await browser.sleep(5000)
          
})
When(/^Enter "(.*?)" as minimum$/, { timeout: 2 * 105000000 }, async (MinAmt:number) => {
    // console.log("Amt", MinAmt);
    await search.present(search.minBox)
    await search.scroll(search.minBox)
    await search.minBox.sendKeys(MinAmt)
    await browser.sleep(5000)
    // console.log("Amt", MinAmt);
    // console.log("NOT CLicked");
 
    await browser.executeScript(`document.querySelectorAll('${search.gobtn}')[0].click()`).catch((err: Error) => { throw new Error(`Unable to click: [${search.gobtn}]`); });
    // console.log("CLICKED");
    await browser.sleep(5000)
})

Then(/^Check if price of product is above 1000$/, { timeout: 2 * 105000000 }, async () => {
   await search.present(search.sortBy)
   await search.clickAble(search.sortBy)

   await browser.executeScript(`arguments[0].scrollIntoView({block: "nearest"});`, search.sortBy.getWebElement());
    let lowtoHighname= await search.sortbyclick(search.lowtohigh)
//    console.log("L2H", lowtoHighname);
   await browser.sleep(2000)
    let price=await search.priceofitem1.getText()
    let stringWithoutComma = parseInt(price.replace(/,/g,''),10) 
    // console.log("Price of item1", stringWithoutComma);
    expect(stringWithoutComma).to.be.greaterThan(999)
    await browser.sleep(2000)

})





