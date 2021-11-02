import { sleep } from './ultis.js';
import { By } from 'selenium-webdriver';
import faker from 'faker';

const commentPost = async (driver) => {
  const textArea = await driver.findElement(By.xpath('//textarea'));
  const btn = await driver.findElement(By.xpath(`//button[@type='submit']`));

  await sleep(1000);
  await textArea.click();
  await sleep(500);
  await textArea.sendKeys(faker.lorem.sentence());
  await sleep(1000);
  await btn.click();
};

export default commentPost;
