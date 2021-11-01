import loginTest from './login.js';
import('chromedriver');
import { Builder, Key, By } from 'selenium-webdriver';

import createPost from './create_post.js';

describe('Checkout Realworld', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('login realworld', () => loginTest(driver));

  it('create post', () => createPost(driver));

  after(() => driver && driver.quit());
});
