import { sleep } from './ultis.js';
import { HOST_URL } from './const.js';
import { By, until } from 'selenium-webdriver';
import assert from 'assert';

const registerTest = async (driver, account) => {
  //--- Truy cập trang đăng ký ---

  await driver.get(HOST_URL + '/register');

  //--- Get ra form đăng ký ---
  const forms = await driver.findElements(By.className('form-control'));

  const [userNameInput, emailInput, passwordInput] = forms;
  const btn = await driver.findElement(By.className('btn'));

  //--- Điền form

  await userNameInput.click();
  await userNameInput.sendKeys(account.username);

  await emailInput.click();
  await emailInput.sendKeys(account.email);

  await passwordInput.click();
  await passwordInput.sendKeys(account.password);

  //--- Submit form

  await sleep(1000);
  btn.click();

  //--- Kiểm tra đã đăng ký thành công hay chưa

  await driver.wait(until.elementLocated(By.className('ion-gear-a')), 10000);

  const isSuccess = await driver.findElement(By.className('ion-gear-a'));

  assert.equal(isSuccess !== null, true);
};

export default registerTest;
