import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  // Navigate to login page

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Fill in username and password, then submit the form

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.keyboard.press('Enter');
  }
}
