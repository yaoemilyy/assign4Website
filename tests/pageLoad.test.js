const puppeteer = require('puppeteer');

describe('Simple Webpage Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Page loads successfully', async () => {
    await page.goto('http://localhost');  // Use the correct URL for local testing
    const title = await page.title();
    expect(title).toBe('Expected Page Title');  // Replace with your page title
  });

  test('Check for key element', async () => {
    await page.goto('http://localhost');  // Use the correct URL for local testing
    const element = await page.$('h1');   // Replace with an element selector to verify it exists
    expect(element).not.toBeNull();
  });
});
