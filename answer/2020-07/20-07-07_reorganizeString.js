/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  var arr = S.split("");
  var map = new Map();

  for (var i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  var n = 0;
  var brr = [];

  for (var k in map) {
    var data = { k: k, count: map[k] };
    brr[n] = data;
    n++;
  }

  brr.sort(function (a, b) {
    return b.count - a.count;
  });
  var res = [];
  var pos = 1;
  var f = brr[0].count > (S.length + 1) / 2;
  if (f) {
    return "";
  }
  for (var i = 0; i < brr[0].count; i++) {
    res.push(brr[0].k);
  }
  for (var i = 1; i < brr.length; i++) {
    var count = brr[i].count;
    var k = brr[i].k;

    while (count > 0) {
      res.splice(pos, 0, k);
      count--;
      pos += 2;
      if (pos > res.length) {
        pos = 1;
      }
    }
  }

  return res.join("");
};

const a = reorganizeString("aaabbd");
console.log(a);
