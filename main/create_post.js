import { sleep } from './ultis.js';
import { HOST_URL } from './const.js';
import { Key, By, until } from 'selenium-webdriver';
import faker from 'faker';
import assert from 'assert';

const createPost = async (driver) => {
  faker.locale = 'en_US';

  // --- Truy cập trang đăng bài

  await driver.get(`${HOST_URL}/editor`);

  // --- Get ra form nhập bài viết

  const forms = await driver.findElements(By.className('form-control'));
  const btn = await driver.findElement(By.className('btn'));
  const [titleInput, descriptionInput, bodyInput, tagInput] = forms;

  // --- Điền thông tin bài viết vào form

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
  btn.click();
  await driver.wait(until.elementLocated(By.className('article-page')), 10000);

  // ---

  const isSuccess = await driver.findElement(By.className('article-page'));
  assert.equal(isSuccess !== null, true);
};

export default createPost;
