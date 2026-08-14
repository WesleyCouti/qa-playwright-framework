import { expect, Page } from '@playwright/test';

type CheckoutData = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async fillCustomerData(data: CheckoutData): Promise<void> {
    await this.page.getByPlaceholder('First Name').fill(data.firstName);
    await this.page.getByPlaceholder('Last Name').fill(data.lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(data.postalCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async finish(): Promise<void> {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async expectCompleted(): Promise<void> {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
