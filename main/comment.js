import { sleep } from './ultis.js';
import { By, until } from 'selenium-webdriver';
import faker from 'faker';
import assert from 'assert';

const commentPost = async (driver) => {
  // --- Get form điền bình luận và nút submit

  const textArea = await driver.findElement(By.xpath('//textarea'));
  const btn = await driver.findElement(By.xpath(`//button[@type='submit']`));

  // --- Điền bình luận

  await textArea.click();
  await textArea.sendKeys(faker.lorem.sentence());

  // --- Submit

  await btn.click();
  await driver.wait(until.elementLocated(By.className('ion-trash-a')), 10000);

  // --- Kiểm tra thành công

  const isSuccess = await driver.findElement(By.className('ion-trash-a'));
  assert.equal(isSuccess !== null, true);
};

export default commentPost;
