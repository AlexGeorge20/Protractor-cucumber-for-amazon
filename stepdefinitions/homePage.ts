import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on "(.*?)" search page$/,{ timeout: 2 * 1050000 }, async (text:string) => {
  await  browser.get("https://www.amazon.in")
    if (text === "amazon") {
     console.log("TITLE", await browser.getTitle());
     await expect(browser.getTitle()).to.eventually.equal("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    }
    
});
