import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
import { capabilities } from "./capabilities";
import { browserSelector } from "./capabilities";
import { domainSelector } from "./domain";

const jsonReports = process.cwd() + "/reports/json";

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const browserName=argv.browserSel
console.log("browserNameconfg YARG",browserName);
const domain=argv.domain
console.log("siteDomain YARG",domain);

console.log("CApaBILIties", capabilities.chrome);


export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: domainSelector(domain),

    capabilities: browserSelector(),
        // //capabilities :capabilities.firefox,

    // capabilities: {
        // browserName: `${browserName}`,
                // browserName: 'chrome',

        // chromeOptions: {
        //     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        //   }
       
    // },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};


// npm run test -- --browserSel=chrome --domain=in