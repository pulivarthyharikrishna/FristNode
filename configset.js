var fs = require('fs')
 
var configpatch = __dirname + '/config-template.json'
var setCofigpact;
if(fs.existsSync(configpatch))
{
   setCofigpact=configpatch
   console.log("access config.json" + setCofigpact)
}
else
 {
     console.log("not access config.json" + setCofigpact)

}
   var finaljson = JSON.parse(fs.readFileSync(setCofigpact))
   module.exports = finaljson