
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const domain=argv.domain
console.log("siteDomain YARG",domain);

export const domainSelector=(domain:string)=>{
    
    return  `https://www.amazon.${domain}`

}