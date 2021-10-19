// Nhập tháng và năm => Cho biết tháng đó có bao nhiêu ngày
const assert = require('assert');
const isLeapYear = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

const countDays = (month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      let check = isLeapYear(year);
      if (check == 1) {
        return 29;
      } else {
        return 28;
      }
    default:
      return 'input not valid';
  }
};

// --- Kiểm thử giá trị biên ---

describe('Testing count day', () => {
  before(() => console.log('\n--- start testing ---\n'));

  it('nomx, nomy', () => {
    let month = 6;
    let year = 2021;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('nomx, miny', () => {
    let month = 6;
    let year = 1;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('nomx, miny+', () => {
    let month = 6;
    let year = 2;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('nomx, maxy-', () => {
    let month = 6;
    let year = 9998;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('nomx, maxy', () => {
    let month = 6;
    let year = 9999;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('minx, nomy', () => {
    let month = 1;
    let year = 2020;
    let expected = 31;
    assert(countDays(month, year), expected);
  });

  it('minx+, nomy', () => {
    let month = 2;
    let year = 2020;
    let expected = 29;
    assert(countDays(month, year), expected);
  });

  it('maxx, nomy', () => {
    let month = 12;
    let year = 2020;
    let expected = 31;
    assert(countDays(month, year), expected);
  });

  it('max-, nomy', () => {
    let month = 11;
    let year = 2020;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  after(() => console.log('\n--- testing completed ---'));
});

// --- Kiểm thử theo bảng quyết định

describe('Decision table testing', () => {
  before(() => console.log('\n--- start testing ---\n'));

  it('R1', () => {
    let month = 1;
    let year = 2021;
    let expected = 31;
    assert(countDays(month, year), expected);
  });

  it('R2', () => {
    let month = 4;
    let year = 2021;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('R3', () => {
    let month = 4;
    let year = 2021;
    let expected = 30;
    assert(countDays(month, year), expected);
  });

  it('R3', () => {
    let month = 2;
    let year = 2020;
    let expected = 29;
    assert(countDays(month, year), expected);
  });

  it('R4', () => {
    let month = 2;
    let year = 2021;
    let expected = 28;
    assert(countDays(month, year), expected);
  });

  it('R5', () => {
    let month = 123;
    let year = 2021;
    let expected = 'input not valid';
    assert(countDays(month, year), expected);
  });

  after(() => console.log('\n--- testing completed ---'));
});
