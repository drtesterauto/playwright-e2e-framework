import { Page, expect } from '@playwright/test';

export class ProductListingPage {
  constructor(private page: Page) {}

  async verifyPageLoaded() {
    await expect(this.page.getByText('Swag Labs')).toBeVisible();
    await expect(this.page.getByTestId('title')).toContainText('Products');
  }

  async checkHomePageLogo(itemName: string) {
    await expect(this.page.getByText(/swag labs/i)).toBeVisible();
  }

  async addProductToCart(itemName: string) {
    await expect(this.page.locator('.inventory_item_name', { hasText: itemName })).toBeVisible();

    const productId = itemName.toLowerCase().replaceAll(' ', '-');
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
