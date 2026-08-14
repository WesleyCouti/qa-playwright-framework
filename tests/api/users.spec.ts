import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

test.describe('Users API', () => {
  test('returns a user with the expected contract fields', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl}/users/1`);
    expect(response.ok()).toBeTruthy();

    const user = await response.json();
    expect(user).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      address: expect.any(Object),
      company: expect.any(Object)
    }));
  });

  test('returns not found for an unknown resource', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl}/posts/999999`);
    expect(response.status()).toBe(404);
  });
});
