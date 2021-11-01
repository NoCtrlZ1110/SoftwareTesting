import { sleep } from './ultis.js';
import { HOST_URL } from './const.js';
import { Key, By } from 'selenium-webdriver';

const createPost = async (driver) => {
  await sleep(2000);
  await driver.get(`${HOST_URL}/editor`);
  const forms = await driver.findElements(By.className('form-control'));
  const btn = await driver.findElement(By.className('btn'));
  const [titleInput, descriptionInput, bodyInput, tagInput] = forms;

  await titleInput.click();
  await titleInput.sendKeys('Đây là tiêu đề bài viết');

  await descriptionInput.click();
  await descriptionInput.sendKeys('Đây là mô tả bài biết');

  await bodyInput.click();
  await bodyInput.sendKeys('Đây là nội dung bài viết');

  await tagInput.click();
  await tagInput.sendKeys(
    'Đây',
    Key.RETURN,
    'là',
    Key.RETURN,
    'thẻ',
    Key.RETURN,
    'ví dụ',
    Key.RETURN
  );

  await sleep(500);
  btn.click();
};

export default createPost;
