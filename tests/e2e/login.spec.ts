import { test } from '../../fixtures/test';
import { users } from '../../data/users';

test.describe('Login', () => {
  test('allows a valid user to access the product catalog', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('shows an error for a locked user', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.expectError('Sorry, this user has been locked out');
  });
});
