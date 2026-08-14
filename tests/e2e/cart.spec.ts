import { test } from '../../fixtures/test';
import { users } from '../../data/users';

test.describe('Shopping cart', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('adds a product to the cart', async ({ inventoryPage, cartPage }) => {
    const product = 'Sauce Labs Backpack';
    await inventoryPage.addProduct(product);
    await inventoryPage.expectCartCount(1);
    await inventoryPage.openCart();
    await cartPage.expectProduct(product);
  });
});
