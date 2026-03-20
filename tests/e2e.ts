import { ProductListingPage } from './pages/ProductListingPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { checkoutData } from './constants/checkoutData';
import { CartPage } from './pages/CartPage';
import { test } from './fixtures/testFixtures';

test.describe('Sauce Demo - E2E flows', () => {
  test('User sees product listing page after successful login', async ({ loggedInPage }) => {
    const productPage = new ProductListingPage(loggedInPage);
    await productPage.verifyPageLoaded();
  });

  test('User can successfully complete a purchase', async ({ loggedInPage }) => {
    const productPage = new ProductListingPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);
    await productPage.addProductToCart('Sauce Labs Bike Light');
    await productPage.goToCart();
    await cartPage.verifyProductInCart('Sauce Labs Bike Light');
    await cartPage.proceedToCheckout();
    await checkoutPage.fillInformation(
      checkoutData.standard.firstName,
      checkoutData.standard.lastName,
      checkoutData.standard.postalCode,
    );
    await checkoutPage.continue();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderSuccess();
  });
});
