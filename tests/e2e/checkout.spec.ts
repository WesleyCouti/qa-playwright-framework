import { test } from '../../fixtures/test';
import { users } from '../../data/users';
import { checkoutCustomer } from '../../data/checkout';

test.describe('Checkout', () => {
  test('completes a purchase successfully', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    const product = 'Sauce Labs Bike Light';

    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.addProduct(product);
    await inventoryPage.openCart();
    await cartPage.expectProduct(product);
    await cartPage.startCheckout();
    await checkoutPage.fillCustomerData(checkoutCustomer);
    await checkoutPage.finish();
    await checkoutPage.expectCompleted();
  });
});
