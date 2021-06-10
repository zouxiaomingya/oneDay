function asyncPool(poolLimit, array, iteratorFn) {
  let i = 0;
  const ret = [];
  const executing = [];
  const enqueue = function () {
    if (i === array.length) {
      return Promise.resolve();
    }
    // 每调一次enqueue，初始化一个promise
    const item = array[i++];
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    // 放入promises数组
    ret.push(p);

    // 当 promise 执行完毕，从 executing 中删除该 promise
    const e = p.then(() => {
      return executing.splice(executing.indexOf(e), 1);
    });
    // 插入executing数字，表示正在执行的promise
    executing.push(e);

    // 使用Promise.race，每当executing数组中promise数量低于poolLimit，就实例化新的promise并执行
    let r = Promise.resolve();
    if (executing.length >= poolLimit) {
      r = Promise.race(executing);
    }
    // 递归，直到遍历完array
    return r.then(() => enqueue());
  };

  return enqueue().then(() => Promise.all(ret));
}

const timeout = (i) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(i);
    }, i)
  );

asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
  console.log(results, "results>>>>>>");
});
