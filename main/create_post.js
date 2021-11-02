import { sleep } from './ultis.js';
import { HOST_URL } from './const.js';
import { Key, By, until } from 'selenium-webdriver';
import faker from 'faker';

const createPost = async (driver) => {
  faker.locale = 'en_US';
  await driver.get(`${HOST_URL}/editor`);
  await sleep(1000);

  const forms = await driver.findElements(By.className('form-control'));
  const btn = await driver.findElement(By.className('btn'));
  const [titleInput, descriptionInput, bodyInput, tagInput] = forms;

  await titleInput.click();
  await titleInput.sendKeys(faker.lorem.sentence());

  await descriptionInput.click();
  await descriptionInput.sendKeys(faker.lorem.sentences(2));

  await bodyInput.click();
  await bodyInput.sendKeys(faker.lorem.paragraph());

  await tagInput.click();
  await tagInput.sendKeys(
    faker.lorem.word(),
    Key.RETURN,
    faker.lorem.word(),
    Key.RETURN,
    faker.lorem.word(),
    Key.RETURN,
    faker.lorem.word(),
    Key.RETURN
  );

  await sleep(1000);
  btn.click();
  await driver.wait(until.elementLocated(By.className('article-page')), 10000);
};

export default createPost;
