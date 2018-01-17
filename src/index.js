const puppeteer = require('puppeteer');

const CONF = require('./config');

const PAGE_LIMIT = 8; /* limitation of the number of pages at the same time */
const pages = [];

const scheduler = () => {
    // TODO: get or wait for a page instance available
};

let browser;
const getBrowser = async () => {
    if (browser) return browser;
    browser = await puppeteer.launch();
    return browser;
};

const queue = [];

const getPage = async () => {
    if (pages.length < PAGE_LIMIT) {
        const brsr = await getBrowser();
        const page = await brsr.newPage();
        pages.push(page);
        return page;
    } else {
        // TODO
    }
};

async function run(url = CONF.entry) {
    const brsr = await getBrowser();
    const page = await getPage();
    await page.goto(url);
    // TODO: 1) get all data needed in this page
    let title = await page.title();
    console.log('page title: ', title);
    // TODO: 2) go to the next url selected from the data
}

module.exports = {
    run
};
