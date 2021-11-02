import { sleep } from './ultis.js';
import { HOST_URL } from './const.js';
import { By } from 'selenium-webdriver';

const registerTest = async (driver, account) => {
  await driver.get(HOST_URL + '/register');

  const forms = await driver.findElements(By.className('form-control'));

  const [userNameInput, emailInput, passwordInput] = forms;
  const btn = await driver.findElement(By.className('btn'));

  await userNameInput.click();
  await userNameInput.sendKeys(account.username);

  await emailInput.click();
  await emailInput.sendKeys(account.email);

  await passwordInput.click();
  await passwordInput.sendKeys(account.password);

  await sleep(1000);
  btn.click();

  await sleep(1000);
  await driver.get(HOST_URL + '/settings');

  const logoutBtn = await driver.findElement(
    By.className('btn btn-outline-danger')
  );

  await logoutBtn.click();
};

export default registerTest;
