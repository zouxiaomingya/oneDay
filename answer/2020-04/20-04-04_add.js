

function add(...num) {
  var cur = function (...out) {
    return add(...num.concat(out));
  };
  cur.value = () => {
    return num.reduce((a, b) => {
      return a + b;
    });
  };

  return cur;
}

const num = add(1)(2,3)(4).value()
console.log(num);
