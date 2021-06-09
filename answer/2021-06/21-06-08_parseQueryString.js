/**
 * @param {string} str
 * @return {object}
 */

const testURL =
  "https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22:%22abc%22,%22num%22:123%7D";

function parseQueryString(str) {
  const [_, params] = testURL.split("?");
  const paramsArr = params.split("&");
  const obj = {};
  for (let value of paramsArr) {
    const [key, _value] = value.split("=");
    const current = obj[key];
    const formatValue = decodeURIComponent(_value);
    // 是数组
    if (key.indexOf("[]") !== -1) {
      const _key = key.slice(0, -2);
      if (current) {
        obj[_key].push(formatValue);
      } else {
        obj[_key] = [formatValue];
      }
    } else {
      // 判断是否是 json
      try {
        obj[key] = JSON.parse(formatValue);
      } catch (error) {
        obj[key] = formatValue;
      }
    }
  }

  return obj;
}

parseQueryString(testURL);
