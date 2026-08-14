import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

test.describe('Posts API', () => {
  test('returns a post by id', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl}/posts/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({ id: 1, userId: 1 });
    expect(body.title).toEqual(expect.any(String));
    expect(body.body).toEqual(expect.any(String));
  });

  test('creates a post', async ({ request }) => {
    const payload = {
      title: 'QA automation portfolio',
      body: 'API test created with Playwright',
      userId: 10
    };

    const response = await request.post(`${apiBaseUrl}/posts`, { data: payload });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toMatchObject(payload);
    expect(body.id).toBeDefined();
  });
});
