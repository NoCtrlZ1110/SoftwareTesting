require('chromedriver');
const assert = require('assert');
const { Builder, Key, By } = require('selenium-webdriver');
const HOST_URL = 'http://localhost:4100';

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

describe('Checkout Realworld', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('login realworld', async function () {
    await driver.get(HOST_URL);
    await sleep(500);
    await driver.get(`${HOST_URL}/login`);
    await sleep(500);

    const inputs = await driver.findElements(By.className('form-control'));
    inputs[0].click();
    inputs[0].sendKeys('huynd.nguyen@gmail.com');
    inputs[1].click();
    inputs[1].sendKeys('11102000');
    await sleep(500);
    inputs[1].sendKeys(Key.RETURN);
  });

  it('create post', async function () {
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
  });

  after(() => driver && driver.quit());
});
