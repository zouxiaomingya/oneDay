const arr = new Array(30000000).fill(1);
console.time("a");
function test1() {
  return new Promise((resolve, reject) => {
    let sum = 10000;
    for (let i of arr) {
      sum += i;
    }
    resolve(sum);
  });
}
function test2() {
  return new Promise((resolve, reject) => {
    let sum = 10;
    for (let i of arr) {
      sum += i;
    }
    resolve(sum);
  });
}

function all() {
  return Promise.all([test1(), test2()]).then(([sum1, sum2]) => {
    console.log(sum1, sum2);
    console.timeEnd("a");
  });
}
all();

console.time("b");

let sum1 = 10;
setTimeout(()=>{
  
})
for (let i of arr) {
  sum1 += i;
}
console.log(sum1);

let sum2 = 10;
for (let i of arr) {
  sum2 += i;
}
console.log(sum2);

console.timeEnd("b");
