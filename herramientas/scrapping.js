const puppeteer = require('puppeteer');
const exec = require('child_process').exec;
(async () => {
    // our code
    console.log('Lanzamos Navegador....')
    const browser = await puppeteer.launch({
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process'
        ]
    })

    const page = await browser.newPage();
    // await page.goto('http://200.7.160.154/caepagina/')
    await page.goto('https://www.ketal.com.bo/lacteos')


    let container = await page.evaluate(() => {
        // let date = document.querySelector('.mg-post-thumb');
        // console.log(date.innerHTML)
        // return date.style.backgroundImage;
        let div = document.querySelector('.image');
        return div.innerHTML;
    })

    // let init = container.search('http');
    // let url = container.substring(init, container.length - 2)
    // console.log(url)
    // exec(`wget ${url}`)

    let init = container.search("https://cdn-dbcoo.nitrocdn.com");
    let url = container.substring(init, container.length - 2)
    console.log(url)
    exec(`wget ${url}`)
    
    console.log('Detenemos Navegador....')
    
    browser.close()

    console.log('Navegador Cerrado...')
})();