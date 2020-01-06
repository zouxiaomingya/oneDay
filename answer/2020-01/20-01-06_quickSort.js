var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var [head, ...rest] = arr;
  var left = [];
  var right = [];
  for (var i = 0; i < rest.length; i++) {
    if (rest[i] < head) {
      left.push(rest[i]);
    } else {
      right.push(rest[i]);
    }
  }

  return [...quickSort(left), head, ...quickSort(right)];
};

var arr = [5,3,1,6,7,9]
console.log(quickSort(arr));
