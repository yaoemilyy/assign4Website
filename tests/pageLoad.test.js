const puppeteer = require('puppeteer');

describe('Simple Webpage Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],  // Add these flags
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Page loads successfully', async () => {
    await page.goto('http://localhost');  // Update with your URL
    const title = await page.title();
    expect(title).toBe('Expected Page Title');  // Replace with actual title
  });

  test('Check for key element', async () => {
    await page.goto('http://localhost');  // Update with your URL
    const element = await page.$('h1');   // Replace with a selector for an important element
    expect(element).not.toBeNull();
  });
});
