import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import loginData from '../test-Data/loginData.json';

for (const user of loginData)
{

test(`Login with ${user.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername(user.username);
    await loginPage.enterPassword(user.password);
    
})
};
