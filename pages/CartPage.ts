import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectProduct(productName: string): Promise<void> {
    const item = this.page.locator('.cart_item').filter({ hasText: productName });
    await expect(item).toHaveCount(1);
  }

  async startCheckout(): Promise<void> {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
