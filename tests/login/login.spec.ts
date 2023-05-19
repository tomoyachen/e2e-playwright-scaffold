import { test, expect } from '@playwright/test'
import { LoginPage } from '~pages/login/login.page'
import * as utils from '~tests/utils'

const testData = utils.getTestData('users');
const normalUser = testData['normal'];

test('login', async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.visit();
  
  await loginPage.loginWithPassword(normalUser.account, normalUser.password);
  await expect(loginPage.page).toHaveURL(/.*intro/);
});
