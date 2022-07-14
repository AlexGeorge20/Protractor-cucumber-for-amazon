import { EMLINK } from "constants";
import { Given } from "cucumber";
import { setMaxListeners } from "process";
import { browser, element, by, protractor, ElementFinder } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var assert = require('assert')
// const asserts = chai.asserts;
var should = require('chai').should()
const search: SearchPageObject = new SearchPageObject();

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
    await search.present(search.egypt)
    await search.scroll(search.egypt)
    await search.egypt.click() 
    await browser.sleep(3000)
    })
Then(/^Find openings$/, { timeout: 2 * 1050000 }, async () => {

    let openingavailable=await search.jobtitleblocks.isPresent()
    if(openingavailable){
       let count= await search.openingCount.count()
        console.log("Openings available in page1",count);
        
    }else{
        console.log("No Openings");
            }
})
When(/^I select Malayalam as language$/, { timeout: 2 * 1050000 }, async () => {
    await search.languageBox.click()
    await browser.sleep(3000)
//     await search.clickAble(element(by.css('input[value="ml_IN"]')).element(by.css("i[class='a-icon a-icon-radio']")))
//     // await element(by.css('input[value="ml_IN"]')).element(by.css("i[class='a-icon a-icon-radio']")).click()
   //   //  await element(by.linkText("ML")).click()
    await search.malayalam.click()
    await browser.sleep(3000)
    
    await search.savelanguagebtn.click()
    await browser.sleep(3000)
   

})
Then(/^I check if language is Malayalam$/, { timeout: 2 * 1050000 }, async () => {
    // let language=await element(by.css("span[class='icp-color-base']")).getAttribute('innerText')
   await search.scroll(search.languageBox)
    let language=await search.languageBox.getAttribute('innerText')

    console.log("LANGUAGE",language);
    expect(language).to.have.string("മലയാളം")
    await browser.sleep(3000)

})