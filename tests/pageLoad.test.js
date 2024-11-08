const puppeteer = require('puppeteer');

describe('Simple Webpage Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
  }, 30000);  // Set timeout for beforeAll to 30 seconds

  afterAll(async () => {
    await browser.close();
  });

  test('Page loads successfully', async () => {
    await page.goto('http://34.216.169.218/');  // Use EC2 public IP
    const title = await page.title();
    expect(title).toBe('Emily Yao - Resume');  // Update with actual title
  }, 30000);



  test('Check for key element', async () => {
    await page.goto('http://34.216.169.218/');  // Use EC2 public IP
    const element = await page.$('h1');   // Replace with a selector for an important element
    expect(element).not.toBeNull();
  }, 30000);
});
