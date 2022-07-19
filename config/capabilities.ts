const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const browserName=argv.browserSel
console.log("browserNameinCAPABlityYARG",browserName);


export const capabilities = {
    chrome: {
        browserName: 'chrome',
        chromeOptions: {
            // args: ["--no-sandbox", "--disable-gpu", "--headless", "--disable-dev-shm-usage", "--disable-infobars", "--disable-extensions", "--privileged"],
        },
        shardTestFiles: true,
        // maxInstances: 4,
        deviceProperties: {
            browser: {
                name: 'chrome',
                version: 'latest'
            },
            device: 'Development machine'
                   }
    },
    firefox: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            // args: ["--headless"],
            prefs: {
                'browser.download.folderList': 2,
                'browser.download.manager.closeWhenDone': true,
                'browser.download.manager.showWhenStarting': false,
                'browser.helperApps.alwaysAsk.force': false,
                'browser.download.manager.showAlertOnComplete': false,
                'browser.download.manager.useWindow': false,
                'browser.helperApps.neverAsk.saveToDisk': 'application/pdf,application/csv,text/plain,application/vnd.csv',
                'pdfjs.disabled': true
            },
        },
        shardTestFiles: true,
        // maxInstances: 4,
        deviceProperties: {
            browser: {
                name: 'firefox',
                version: 'latest'
            },
            device: 'Development machine',
           
        }
    }
}

    export const browserSelector=()=>{
  
        if(browserName=="chrome" || browserName=="firefox"){
            return capabilities[browserName]
            // console.log("CAPA IF",capabilities['chrome']);
            
         }else{
            return capabilities["chrome"];
        //    return  capabilities.chrome
            // config.capabilities = capabilities['chrome']
            // console.log("CAPA Else",capabilities.firefox);
         }
     }