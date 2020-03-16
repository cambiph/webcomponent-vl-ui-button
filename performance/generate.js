const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

JSDOM.fromFile(path.join(__dirname, '../demo/vl-button.html')).then(dom => {
    const scripts = [];
    dom.window.document.querySelectorAll('script[type="module"]').forEach(s => scripts.push(s.outerHTML));

    const stylesheets = [];
    dom.window.document.querySelectorAll('link[rel="stylesheet"]').forEach(s => stylesheets.push(s.outerHTML));

    const demo = dom.window.document.querySelectorAll('.demo')[0].outerHTML;
    let demoMultiplied = '';
    for (i = 0; i < 100; i++) {
        demoMultiplied += demo;
    }

    const html = `<html><head>${scripts.join('')}${stylesheets.join('')}</head><body>${demoMultiplied}</body></html>`;

    fs.writeFileSync(path.join(__dirname, '../performance/performance.html'), html, 'utf8', (err) => {
        if (err) throw err;
    });
});
