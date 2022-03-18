import { expect, Locator, Page } from '@playwright/test';

let PropertiesReader = require('properties-reader');
let prop = PropertiesReader('./config/prop.properties');

export class browser {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(prop.get('envURL'));
  }

}