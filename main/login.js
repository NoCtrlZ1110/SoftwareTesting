import { HOST_URL } from './const.js';
import { sleep } from './ultis.js';
import { Key, By, until } from 'selenium-webdriver';

const loginTest = async (driver, account) => {
  await driver.get(HOST_URL);
  await driver.get(`${HOST_URL}/login`);
  await sleep(500);

  const inputs = await driver.findElements(By.className('form-control'));
  await inputs[0].click();
  await inputs[0].sendKeys(account.email);
  await inputs[1].click();
  await inputs[1].sendKeys(account.password);
  await sleep(1000);
  await inputs[1].sendKeys(Key.RETURN);
  await driver.wait(until.elementLocated(By.className('feed-toggle')), 10000);
};

export default loginTest;
