const puppeteer = require('puppeteer');

(async ()=> {
    // our code.
    console.log('Lanzamos Navegador...')
    const browser = await puppeteer.launch( { 
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process'
        ]
    });

    const page = await browser.newPage()

    await page.goto('http://200.7.160.154/caepagina/')

    var container = await page.evaluate(() => {
        try {
            let date = document.querySelector('.mg-sec-top-post')
            console.log(date.innerText)
            return date.innerText;
        } catch (error) {
            console.error('Ups sucedio alg mal', error)
        }
    })

    console.log(container)
    console.log('Detenemos Navegador...')
    browser.close()
    console.log('Navegador Cerrado...')    
})();


// (async ()=> {
//     // our code.
//     console.log('Lanzamos Navegador...')
//     const browser = await puppeteer.launch( { 
//         args: [
//             '--disable-gpu',
//             '--disable-dev-shm-usage',
//             '--disable-setuid-sandbox',
//             '--no-first-run',
//             '--no-sandbox',
//             '--no-zygote',
//             '--single-process'
//         ]
//     });
    

    

//     const page = await browser.newPage()

//     await page.goto('http://200.7.160.155/admivirtual/login/index.php')

//     var container = await page.evaluate(() => {
//         try {
//             let usuario = document.querySelector('#username')
//             let password = document.querySelector('#password')
//             let btn = document.querySelector('#loginbtn')
//             usuario.value = '1757554';
//             password.value = 'demo22fin##';
//             btn.clik();
//         } catch (error) {
//             console.error('Ups sucedio alg mal', error)
//         }
//     })

    
//     console.log('Detenemos Navegador...')
//     browser.close()
//     console.log('Navegador Cerrado...')    
// })();

// (async ()=> {
//     // our code.
//     console.log('Lanzamos de new Navegador...')
//     const browser = await puppeteer.launch( { 
//         args: [
//             '--disable-gpu',
//             '--disable-dev-shm-usage',
//             '--disable-setuid-sandbox',
//             '--no-first-run',
//             '--no-sandbox',
//             '--no-zygote',
//             '--single-process'
//         ]
//     });
    
//     const page2 = await browser.newPage()

//     await page2.goto('http://200.7.160.155/admivirtual/my')

//     var noti = await page2.evaluate(() => {
//         let valor = document.querySelector('#view_dates_6174e728910a16174e72880ac12');
//         console.log(valor.outerText)
//         return valor.outerText;
//     })
//     console.log(noti)
    
//     console.log('Detenemos de new Navegador...')
//     browser.close()
//     console.log('Navegador de new Cerrado...')    
// })();