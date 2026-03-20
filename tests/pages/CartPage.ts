import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart(itemName: string) {
    await expect(this.page.locator('.inventory_item_name', { hasText: itemName })).toBeVisible();
  }

  async proceedToCheckout() {
    await expect(this.page.getByRole('button', { name: 'checkout' })).toBeVisible();
    await this.page.getByRole('button', { name: 'checkout' }).click();
  }
}
