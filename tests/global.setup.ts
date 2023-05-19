// global-setup
import { test as setup, Page } from '@playwright/test'
import { LoginPage } from '~pages/login/login.page'
import * as utils from '~tests/utils'
import { User } from '~tests/types'

console.log(`[ RUN_ENVIRONMENT ] ${process.env.RUN_ENVIRONMENT}`)

async function loginAndSaveCookies(page: Page, user: User, targetStorageStatePath: string){
  const betaCookies = [
    {
      "name": "NEW_FEATURE_SWITCH",
      "value": "1",
      "url": setup.info().project.use.baseURL,
    }
  ]
  await page.context().clearCookies()
  await page.goto("/login") // 新的 setup 方式，不需要再用 page.goto(`${baseURL}/login`)
  await page.context().addCookies(betaCookies) // 注入额外的 Cookies
  const loginPage = new LoginPage(page);
  await loginPage.loginWithPassword(user.account, user.password)
  await page.context().storageState({ path: targetStorageStatePath }) // Save signed-in state to file.

}

setup('normal user', async ({page}) =>{
    const normalUser = utils.getTestData("users")['normal']
    await loginAndSaveCookies(page, normalUser, utils.normalUserStorageStatePath)

})

setup('premium user', async ({page}) =>{
    const premiumUser = utils.getTestData("users")['premium']
    await loginAndSaveCookies(page, premiumUser, utils.premiumUserStorageStatePath)

})
