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
  }
};

describe('Testing count day', () => {
  before(() => console.log('--- start testing ---'));

  it('case 1', () => {
    let count = countDays(10, 2000);
    assert(count, 31);
  });

  it('case 2', () => {
    let count = countDays(2, 2000);
    assert(count, 29);
  });

  it('case 3', () => {
    let count = countDays(2, 2001);
    assert(count, 28);
  });
});
