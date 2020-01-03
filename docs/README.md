<h1 align="center">One Day</h1>
<p align="center">每天记录一点</p>


### 网上算法题

从一个数组 arr 中找出 N 个数，其和为 M 的所有解

**示例 1:**

```
给出数组 arr = [1,2,3,4], N = 2, M =5

满足要求的集合
[
  [2, 3],
  [1, 4]
]

```

### 四数之和

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

**示例 1:**
```
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/4sum/)


### 最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
**示例 1:**
```
例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/3sum-closest/)


### 完全平方数

给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
**示例 1:**
```
输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
```

**示例 2:**

```
输入: n = 13
输出: 2
解释: 13 = 4 + 9.
```
[原题 leetcode 链接](https://leetcode-cn.com/problems/perfect-squares/)

### AST 解析函数
> 学习使用 AST 来修改函数内容

### 电话号码的字母组合

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png)

**示例 1:**

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

[原题 leetcode 链接](https://leetcode-cn.com/problems/next-permutation/submissions/)


### 下一个排序

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1


[原题 leetcode 链接](https://leetcode-cn.com/problems/next-permutation/submissions/)

#### 解题思路
这道题，我花的时间较长，开始思路一直有点问题并且复杂了。
[图文详解](https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode/)

### 最长公共子序列

给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

若这两个字符串没有公共子序列，则返回 0。


**示例 1:**

```
输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace"，它的长度为 3。
```

**示例 2:**

```
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc"，它的长度为 3。
```

**示例 3:**

```
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-common-subsequence/)


### 红绿灯

如何用js实现一个红绿灯。那我们如何实现呢。

首先第一步：分析需求

一个红绿灯，有哪些功能呢：红灯绿灯黄灯依次切换，并且一直循环。

### 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

**示例 1:**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2:**

```
输入: "cbbd"
输出: "bb"
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-palindromic-substring/)


### 使括号有效的最少添加

给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。

从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

它是一个空字符串，或者
它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
它可以被写作 (A)，其中 A 是有效字符串。
给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。

**示例 1:**

```
输入："())"
输出：1
```

**示例 2:**

```
输入："((("
输出：3
```

**示例 3:**

```
输入："()"
输出：0
```

**示例 4:**

```
输入："()))(("
输出：4
```
提示：

S.length <= 1000
S 只包含 '(' 和 ')' 字符。

[原题 leetcode 链接](https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/)


### 相同的树

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例 1:**

```
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```

**示例 2:**

```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

**示例 3:**

```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/same-tree/)


### 三数之和

> 2019 年 12 月 22 日

给定一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/3sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-22_threeSum.js)

### 报数

> 2019 年 12 月 21 日

报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
     1.     1
     2.     11
     3.     21
     4.     1211
     5.     111221
```

1  被读作   "one 1"  ("一个一") , 即  11。
11 被读作  "two 1s" ("两个一"）, 即  21。
21 被读作  "one 2",  "one 1" （"一个二" ,  "一个一") , 即  1211

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

**示例 1:**

```
  输入: 1
  输出: "1"
```

**示例 2:**

```
  输入: 4
  输出: "1211"
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/count-and-say/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-21_countAndSay.js)

### 快乐树

> 2019 年 12 月 20 日

编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

**示例:**

```
  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
```

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
[原题 leetcode 链接](https://leetcode-cn.com/problems/happy-number/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-20_isHappy.js)

### 反转链表

> 2019 年 12 月 19 日

反转一个单链表。

**示例:**

```
  输入: 19
  输出: true
  解释:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
```

#### 解题思路

在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！

### 二叉树的最大深度

> 2019 年 12 月 18 日

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-linked-list/)

**示例:**
给定二叉树 [3,9,20,null,null,15,7]，

```
    3
   / \
  9  20
    /  \
   15   7
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/19-12-18_maxDepth)

### 阶乘后面的零

> 2019 年 12 月 17 日

给定一个整数 n，返回 n! 结果尾数中零的数量。

**示例 1:**

```
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
```

**示例 2:**

```
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
```

说明: 你算法的时间复杂度应为 O(log n) 。
**示例 3:**

[原题 leetcode 链接](https://leetcode-cn.com/problems/factorial-trailing-zeroes/)

#### 解题思路

- 乘积有 0 只有 2 \* 5 这样的。
- 所以看有多少个 2，5 那么就有多少个 0
- 由于 2 很多， 所以只要看 5

```
比如 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 * 13 * 14 * 15 * 。。。。

4 = 2 * 2； 8 = 2 * 2 * 2
25 = 5 * 5

所以 2 远远比 5 多

```

所以根据这样的方法来寻找可以分解多少个 5 来看有多少个 0

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-16_trailingZeroes.js)

### 无重复字符的最长子串

> 2019 年 12 月 16 日

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-16_lengthOfLongestSubstring)

### 最小栈

> 2019 年 12 月 15 日

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中。
- pop() -- 删除栈顶的元素。
- top() -- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素。

**示例:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/min-stack/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-15_MinStack)

### 两数相加

> 2019 年 12 月 14 日

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例 1:**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/house-robber/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-14_addTwoNumbers.js)

### 打家劫舍

> 2019 年 12 月 13 日

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1:**

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

```

**示例 2:**

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/house-robber/)

#### 解题思路

- 标签：动态规划
- 动态规划方程：dp[n] = MAX( dp[n-1], dp[n-2] + num )
- 由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
- 举例来说：1 号房间可盗窃最大值为 33 即为 dp[1]=3，2 号房间可盗窃最大值为 44 即为 dp[2]=4，3 号房间自身的值为 22 即为 num=2，那么 dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5，3 号房间可盗窃最大值为 55
- 时间复杂度：O(n)O(n)，nn 为数组长度

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2019-12/19-12-13_rob.js)

[可以参考的优秀的题解](https://leetcode-cn.com/problems/house-robber/solution/hua-jie-suan-fa-198-da-jia-jie-she-by-guanpengchn/)

### 验证回文串

> 2019 年 12 月 12 日

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

**示例 1:**

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

**示例 2:**

```
输入: "race a car"
输出: false
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/valid-palindrome/)

### 对称二叉树

> 2019 年 12 月 11 日

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    	1
       / \
      2   2
     / \ / \
    3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
       1
      / \
     2   2
      \   \
      3    3
```

说明:
如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

[原题 leetcode 链接](https://leetcode-cn.com/problems/symmetric-tree/)

### 仿 antd Table 布局

> 2019 年 12 月 10 日

中间部分溢出可以滚动，如下图 3 中情况所示

[antd Table 来源](https://ant-design.gitee.io/components/table-cn/#components-table-demo-fixed-columns)

![](https://github.com/zouxiaomingya/oneDay/blob/master/img/left.png)

![](https://github.com/zouxiaomingya/oneDay/blob/master/img/mid.png)

![](https://github.com/zouxiaomingya/oneDay/blob/master/img/right.png)

### 数组转二叉树

> 2019 年 12 月 7 日

将 [1,2,2,3,4,4,3] 转成下面的二叉树

```
    	1
       / \
      2   2
     / \ / \
    3  4 4  3
```

### 多数元素

> 2019 年 12 月 6 日

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1:**

```
输入: [3,2,3]
输出: 3
```

**示例 2:**

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

### 只出现一次的数字

> 2019 年 12 月 5 日

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1:**

```
输入: [2,2,1]
输出: 1
```

**示例 2:**

```
输入: [4,1,2,1,2]
输出: 4
```

### 杨辉三件 2

> 2019 年 12 月 4 日

给定一个非负索引 _k_，其中 _k_ ≤ 33，返回杨辉三角的第 _k_ 行。

**示例:**

```
输入: 3
输出: [1,3,3,1]
```

**进阶：**

你可以优化你的算法到 _O_(_k_) 空间复杂度吗？

### 杨辉三角

给定一个非负整数 *numRows，*生成杨辉三角的前 _numRows_ 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

### 最后一个单词的长度

> 2019 年 12 月 3 日

给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

**示例:**

```
输入: "Hello World"
输出: 5
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/length-of-last-word/)

### 罗马数字转整数

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

[原题 leetcode 链接](https://leetcode-cn.com/problems/roman-to-integer)

### leetcode 盛最多水的容器（11 题）

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

[原题 leetcode 链接](https://leetcode-cn.com/problems/container-with-most-water)

**示例:**

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

### leetcode 加一（66 题）

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例:**

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

**示例:**

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

### leetcode 有效的括号（20 题）

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。

2. 左括号必须以正确的顺序闭合。

**注意空字符串可被认为是有效字符串。**

`示例1`

```
输入: "()"
输出: true
```

`示例2`

```
输入: "()[]{}"
输出: true
```