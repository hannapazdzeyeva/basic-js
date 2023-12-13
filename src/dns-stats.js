const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dictionary = {};
  const reverseArr = domains.map((el) => el.split(".").reverse());
  for (let item of reverseArr) {
    for (let j = 1; j < item.length + 1; j++) {
      const elem = item.slice(0, j).join(".");
      if (!dictionary[`.${elem}`]) dictionary[`.${elem}`] = 1;
      else dictionary[`.${elem}`]++;
    }
  }
  return dictionary;
}

module.exports = {
  getDNSStats
};
