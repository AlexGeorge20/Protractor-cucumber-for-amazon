import { EMLINK } from "constants";
import { browser, element, by, protractor, ElementFinder } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var assert = require('assert')
// const asserts = chai.asserts;
var should = require('chai').should()
const search: SearchPageObject = new SearchPageObject();

    async function sortbyclick(sortedItem:ElementFinder){
        await search.sortby.click()
        console.log("sort by btn clicked");
        await browser.sleep(3000)
        await browser.executeScript('arguments[0].click()', sortedItem);
        let sortName=await search.sortedText.getText()
        console.log("SortName",sortName);
        return sortName
}   

When(/^I click on Japan$/, { timeout: 2 * 105000 }, async () => {
    await search.scroll(search.japan)
    await search.present(search.japan)
    await search.japan.click()
    console.log("scrolled to Japan");
    let countrydomain= await element(by.id("nav-logo")).element(by.id("nav-logo-sprites")).element(by.css("span[class='nav-logo-locale']")).getText()
     console.log("Country",countrydomain);
     expect(countrydomain).to.have.string('.co.jp');
    
    console.log("JAPAN clicked");
        await browser.sleep(2000)
       await browser.get("http://www.amazon.in");
})
  When(/^Enter "(.*?)" in searchbar$/, { timeout: 2 * 105000 }, async (itemName:string) => {
   
    await search.present(search.searchbox)
    await search.searchbox.sendKeys(itemName);
    await browser.executeScript(`arguments[0].scrollIntoView();`, search.submitSearch.getWebElement());
    
    console.log("searchbn");
    await search.present(search.submitSearch)
    await browser.sleep(3000);
    await search.submitSearch.click();
    await browser.sleep(3000);
    console.log("ITEM",itemName);
     
  })
  Then(/^Click on sortby button$/, { timeout: 3 * 150000 }, async () => {
   
   let lowtoHighname= await sortbyclick(search.lowtohigh)
   console.log("L2H", lowtoHighname);
   expect(lowtoHighname).to.have.string('Price: Low to High');
    // await search.sortby.click()
    // console.log("sort by btn clicked");
    // await browser.sleep(3000)
    // await browser.sleep(3000)
    // await browser.executeScript('arguments[0].click()', search.lowtohigh);
    // let sortName1=await search.sortedText.getText()
    //  console.log("SortName",sortName1);
    // expect(sortName1.trim()).to.have.string('Price: Low to High');
        // expect(sortName1.trim()).to.have.string('Price: Low to High');
    
    console.log("same text");
    await browser.sleep(2000)
//--------------------------------------
// await search.present(search.hightolow)

// let hightoLowname= await sortbyclick(search.hightolow)
//  console.log("h2L", hightoLowname);
//  await browser.sleep(2000)
// await expect(hightoLowname).to.have.string('Price: High to Low');

    await search.sortby.click()
    await browser.sleep(2000)
    console.log("h2L click");
    // await search.present(search.hightolow)

    await browser.executeScript('arguments[0].click()', search.hightolow);
    // await search.hightolow.click()

    console.log("h2L clicked");
        await browser.sleep(3000)
    let sortName2=await search.sortedText.getText()
     console.log("SortName2",sortName2);
    expect(sortName2.trim()).to.have.string('Price: High to Low');
//---------------------------------------------------
await search.sortby.click()
    await browser.sleep(2000)
    console.log("review click");
    await browser.executeScript('arguments[0].click()', search.avgreview);
    console.log("review clicked");
        await browser.sleep(3000)
    let sortName3=await search.sortedText.getText()
     console.log("SortName3",sortName3);
    expect(sortName3).to.have.string('Avg. Customer Review');
//----------------------------
await browser.sleep(2000)
    console.log("newArrival click");
    await browser.executeScript('arguments[0].click()', search.newArrival);
    console.log("newArrival clicked");
        await browser.sleep(3000)
    let sortName4=await search.sortedText.getText()
     console.log("SortName4",sortName4);
    expect(sortName4).to.have.string('Newest Arrivals');

  });
  Then(/^Select Apple from brands$/, { timeout: 2 * 105000 }, async () => {
   
    await browser.executeScript('arguments[0].click()', search.applebrand);
    console.log("Apple clicked");
    await browser.sleep(3000)

})
Then(/^Check all are Apple products$/, { timeout: 2 * 105000000 }, async () => {
  for(let i=2; i<=10; i++){
    // browser.sleep(2000)
    await search.present(await element(by.css(`div[cel_widget_id='MAIN-SEARCH_RESULTS-${i}']`)).element(by.css("span[class='a-size-base-plus a-color-base a-text-normal']")))
    await search.scroll(await element(by.css(`div[cel_widget_id='MAIN-SEARCH_RESULTS-${i}']`)).element(by.css("span[class='a-size-base-plus a-color-base a-text-normal']")))

    let NAme= await element(by.css(`div[cel_widget_id='MAIN-SEARCH_RESULTS-${i}']`)).element(by.css("span[class='a-size-base-plus a-color-base a-text-normal']")).getText()
    console.log("pdt name",NAme,i);
    browser.sleep(2000)
    expect(NAme).to.have.string("Apple")
  }
    
})
Then(/^Check if customer review is 4 star and up$/, { timeout: 2 * 105000000 }, async () => {
    await element(by.xpath("//*[@id='p_72/1318476031']/span/a/section")).click()
  
  
    // await search.scroll(element(by.css("section[aria-label='4 Stars & Up']")))
   
//    await element(by.id("p_72/1318476031")).click()
//    browser.sleep(5000)
    // await element(by.id("p_72/1318476031")).element(by.css("section[aria-label='4 Stars & Up']")).click()
    // await browser.executeScript('arguments[0].click()', element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")));
    // await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")).click()
    // await search.present(await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")))

// console.log("PRESENT");
// await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")).click()
// await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")).click()

//await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("a[href='/s?k=apple&dc&crid=B46J9A88ZVC9&qid=1657675234&rnid=1318475031&sprefix=appl%2Caps%2C268&ref=sr_nr_p_72_1&ds=v1%3APZNjg3iCh1pRAu%2FolazhwyG5IwYQiJ%2FOqjkz1I56Z4c']")).click()
// await search.present(element(by.xpath("//*[@id='p_72/1318476031']")).element(by.css("section[aria-label='4 Stars & Up']")))
// await browser.executeScript('arguments[0].click()', element(by.xpath("//*[@id='p_72/1318476031']")).element(by.css("section[aria-label='4 Stars & Up']")));
// let word=await element(by.xpath("//*[@id='p_72/1318476031']")).element(by.css("section[aria-label='4 Stars & Up']")).getAttribute('innerText')

// await element(by.xpath('//*[@id="p_72/1318476031"]/span/a')).click()
// let word=await element(by.xpath('//*[@id="p_72/1318476031"]/span/a/section/i/span')).getText()
// let word= await element(by.css("div[id='reviewsRefinements']")).element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")).getAttribute('innerText')
    // let word= await element(by.id("p_72/1318476031")).element(by.css("i[class='a-icon a-icon-star-medium a-star-medium-4']")).getAttribute('innerText')

    console.log("4 & UPclicked");
        browser.sleep(5000)
        console.log("CLICKED PAGE");
        
})
Then(/^Enter "(.*?)" as minimum$/, { timeout: 2 * 105000000 }, async (MinAmt:number) => {
    console.log("Amt", MinAmt);
    await search.present(element(by.xpath("//*[@id='low-price']")))
    await search.scroll(element(by.xpath("//*[@id='low-price']")))
    await element(by.xpath("//*[@id='low-price']")).sendKeys(MinAmt)
    await browser.sleep(2000)
    await(element(by.xpath("//*[@id='a-autoid-1']/span/input"))).click()
    await browser.sleep(2000)
    let lowtoHighname= await sortbyclick(search.lowtohigh)
   console.log("L2H", lowtoHighname);
   await browser.sleep(2000)
    let price=await element(by.xpath("//*[@id='search']/div[1]/div[1]/div/span[3]/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[1]/div/a/span/span[2]/span[2]")).getText()
    let stringWithoutComma = parseInt(price.replace(/,/g,''),10) 
    console.log("Price of item1", stringWithoutComma);
    expect(stringWithoutComma).to.be.greaterThan(999)
    await browser.sleep(2000)

})



