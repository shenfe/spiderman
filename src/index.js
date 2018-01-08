const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();

const CONF = require('./config');

const PAGE_LIMIT = 8; /* limitation of the number of pages at the same time */

const scheduler = () => {
    // TODO: get or wait for a page instance available
};

async function run(url = CONF.index) {
    const page = await browser.newPage();
    await page.goto(url);
    // TODO: 1) get all data needed in this page
    // TODO: 2) go to the next url selected from the data
}

function exit() {
    browser.close();
}

module.exports = {
    run,
    exit
};
