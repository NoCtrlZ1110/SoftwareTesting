import chromedriver from 'chromedriver';
import { Builder, Key, By } from 'selenium-webdriver';
import { WebDriver } from 'selenium-webdriver';
import faker from 'faker';
import loginTest from './login.js';
import createPost from './create_post.js';
import registerTest from './register.js';
import commentPost from './comment.js';

describe('Testing Realworld', function () {
  let driver;
  faker.locale = 'en_US';

  let account = {
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    username:
      faker.internet.userName().toLowerCase() +
      '_' +
      Math.floor(Math.random() * 10).toString(),
    password: faker.internet.password(),
  };

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('create new account', () => registerTest(driver, account));

  it('login realworld', () => loginTest(driver, account));

  it('create post', () => createPost(driver));

  // it('comment post', () => commentPost(driver));

  after(() => driver && driver.quit());
});
