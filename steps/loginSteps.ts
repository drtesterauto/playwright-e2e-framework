import {Given,When,Then, setDefaultTimeout} from '@cucumber/cucumber'
import { chromium, Page, Browser } from 'playwright';
import { LoginPage } from '../tests/pages/LoginPage';
import { ProductListingPage } from '../tests/pages/ProductListingPage';
import { USERS } from '../tests/constants/userdata';
import { expect } from '@playwright/test';
let browser: Browser;
let page: Page;
setDefaultTimeout(30 * 1000);

Given('the user is on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
});
Given('the user is logged in', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );
});

When('the user logs in with valid credentials', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );
});


When('the user adds a product to the cart', async function () {
  const plpPage = new ProductListingPage(page);
  await plpPage.addProductToCart('Sauce Labs Bike Light');
});

Then('the cart should contain that product', async function () {
  const badge = page.locator('.shopping_cart_badge');

  await expect(badge).toHaveText('1');

  await browser.close();
});

Then('the user should see the product page', async function () {
  const plpPage = new ProductListingPage(page);
  await plpPage.verifyPageLoaded();

  await browser.close();
});