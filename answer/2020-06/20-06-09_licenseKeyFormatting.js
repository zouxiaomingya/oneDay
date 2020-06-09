/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    S = S.toLocaleUpperCase();
    const [head, ...rest] = S.split("-");
    const restStr = rest.join("");
    let temp = "";
    let result = head;
    for (let i of restStr) {
      temp += i;
      if (temp.length === K) {
        result = result + "-" + temp;
        temp = "";
      }
    }
    if (temp && temp.length !== K) {
      result = result + "-" + temp;
    }
    return result;
  };
  
  licenseKeyFormatting("5F3Z-2e-9-w", 4);
  