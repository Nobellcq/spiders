var request = require('request');
const cheerio = require('cheerio')

const urls = []

/**
http://www.bajiejiaoben.com/category/new/page/2/
 * 
 */

const baseUrl = 'http://www.bajiejiaoben.com/category/new/'
const target_urls = [baseUrl, ]
for (let i = 1; i < 7; i++) {
    target_urls.push(`${baseUrl}/page/${i}/`)
}
target_urls.forEach(it => {
    get(it)
})
// console.log(urls);

function get(url) {
    request.post(url, function (err, res) {
        // let firstResult = JSON.parse();
        const $ = cheerio.load(res.body)
        let h2 = $('h2')
        h2.each(it => {
            let url = h2[it].children[0].attribs.href
            urls.push(url)
        });
        console.log(urls.length);
    })
}



