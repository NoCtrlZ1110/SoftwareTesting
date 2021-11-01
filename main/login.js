import { HOST_URL } from './const.js';
import { sleep } from './ultis.js';
import { Key, By } from 'selenium-webdriver';

const loginTest = async (driver) => {
  await driver.get(HOST_URL);
  await sleep(500);
  await driver.get(`${HOST_URL}/login`);
  await sleep(500);

  const inputs = await driver.findElements(By.className('form-control'));
  await inputs[0].click();
  await inputs[0].sendKeys('huynd.nguyen@gmail.com');
  await inputs[1].click();
  await inputs[1].sendKeys('11102000');
  await sleep(500);
  await inputs[1].sendKeys(Key.RETURN);
};

export default loginTest;
