import { Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly loginBtnLocator: Locator

    constructor(page: Page) {
      this.page = page
      this.loginBtnLocator = page.locator('.navbar__link').first()
    }
  
    async visit() {
      await this.page.goto(`/`)
    }
  
    async loginWithPassword(account: string, password: string) {
      // await this.page.locator('#account').fill(account)
      // await this.page.locator('#password').fill(password)
      await this.loginBtnLocator.click()
    }
  
  }
  