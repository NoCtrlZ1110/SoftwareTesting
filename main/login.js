import { HOST_URL } from './const.js';
import { sleep } from './ultis.js';
import { Key, By, until } from 'selenium-webdriver';
import assert from 'assert';

const loginTest = async (driver, account) => {
  // --- Truy cập trang đăng nhập

  await driver.get(`${HOST_URL}/login`);

  // --- Get ra form đăng nhập

  const inputs = await driver.findElements(By.className('form-control'));

  // --- Điền form đăng nhập

  await inputs[0].click();
  await inputs[0].sendKeys(account.email);
  await inputs[1].click();
  await inputs[1].sendKeys(account.password);

  // --- Đăng nhập

  await inputs[1].sendKeys(Key.RETURN);

  // --- Kiểm tra đã đăng nhập thành công hay chưa

  await driver.wait(until.elementLocated(By.className('ion-gear-a')), 10000);

  const isSuccess = await driver.findElement(By.className('ion-gear-a'));
  assert.equal(isSuccess !== null, true);
};

export default loginTest;
