const gulp = require('gulp');
const server = require('gulp-server-livereload');
const puppeteer = require('puppeteer');
const exec = require('child_process').exec;
const opn = require('opn');


gulp.task('build', function (callback) {
    console.log('build Navegador....')
    setTimeout(callback, 1200);
})

gulp.task('server', function(callback) {
    gulp.src('www')
        .pipe(server({
            livereload: false,
            open: true
        }))
    opn('http://localhost:8000')
})



gulp.task('news', function (callback) {
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
    
        let content = await page.evaluate(() => {
            try {
                let data = document.querySelector('.mg-post-thumb')
                return data.style.backgroundImage;
            } catch (error) {
                console.error('Ups sucedio alg mal', error)
            }
        })
    
        let init = content.search('http');
        let url = content.substring(init, content.length - 2);
        console.log(url)

        exec(`wget ${url}`)

        console.log('Detenemos Navegador...')
        browser.close()
        console.log('Navegador Cerrado...')    
    })();
})



gulp.task('default', gulp.series('build', 'server'));
