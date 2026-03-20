import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: number) {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill('firstName');
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill('lastName');
    await this.page.getByRole('textbox', { name: 'Postal Code' }).fill(postalCode.toString());
  }

  async continue() {
    await this.page.getByRole('button', { name: 'continue' }).click();
  }

  async finishOrder() {
    await expect(
      this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Bike Light' }),
    ).toBeVisible();
    await this.page.getByRole('button', { name: 'finish' }).click();
  }

  async verifyOrderSuccess() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}
