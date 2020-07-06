问题 1:首先 pcik 的作用不是属性变成可选，是一定需要这个属性。

问题 2: 意义在于可以复用以前写过的接口类型定义比如下面

```typescript

// 之前就定义的类型，用户的类型，比如姓名，年龄，罩杯
interface User {
  age: number;
  name: string;
  cup: string;
}

// User_Man 类型 没有罩杯
type User_Man = Pick<User, "age" | "name">;

// 女性增加一个罩杯属性
type User_Woman = Pick<User, "age" | "name" | "cup">;


const xiaoming: User_Man = {
  name: "小明",
  age: 18,
};


const xiaohong: User_Woman = {
  name: "小红",
  age: 19,
  cup: "B cup",
};
```
