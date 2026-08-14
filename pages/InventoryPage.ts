import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  private readonly inventoryItems: Locator;
  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.inventoryItems = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addProduct(productName: string): Promise<void> {
    const item = this.inventoryItems.filter({ hasText: productName });
    await expect(item).toHaveCount(1);
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  async expectCartCount(count: number): Promise<void> {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
