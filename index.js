const url = 'https://ahna.org.in/covid19.html'
const base = 'https://ahna.org.in/'
const folder = './files/'
const https = require('https')
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

request(url, function(err, response, body) {
    if (!err && response.statusCode == 200){
    	// get the body
        var $ = cheerio.load(body);

        // get the response
        var string = ($($('body').find('iframe')[0]).attr('src'))

        downloadPDF(folder+string, base+string)

	}
})

function downloadPDF(fileName, URL){
	const file = fs.createWriteStream(fileName);
	const requestFile = https.get(URL, function(response) {
	  response.pipe(file);
	});
}