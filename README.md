<h1 align="center">One Day</h1>
<p align="center">每天记录一点</p>
<p align="center"><a href='https://zouxiaomingya.github.io/oneDay'>题目地址--方便阅读</a></p>

### 565. 等差数列划分

> 2020 年 11 月 22 日

如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，以下数列为等差数列:

```
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

```

以下数列不是等差数列。

```
1, 1, 2, 5, 7

```

数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

如果满足以下条件，则称子数组(P, Q)为等差数组：

元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

函数要返回数组 A 中所有为等差数组的子数组个数。

**示例**

```
A = [1, 2, 3, 4]

返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/arithmetic-slices/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-11/220-11-15_arrayNesting.js)

### 565. 数组嵌套

> 2020 年 11 月 15 日

索引从 0 开始长度为 N 的数组 A，包含 0 到 N - 1 的所有整数。找到最大的集合 S 并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

假设选择索引为 i 的元素 A[i]为 S 的第一个元素，S 的下一个元素应该是 A[A[i]]，之后是 A[A[A[i]]]... 以此类推，不断添加直到 S 出现重复的元素。

**示例**

```
输入: A = [5,4,0,3,1,6,2]
输出: 4
解释:
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

```

**提示：**

N 是[1, 20,000]之间的整数。
A 中不含有重复的元素。
A 中的元素大小在[0, N-1]之间。

[原题 leetcode 链接](https://leetcode-cn.com/problems/array-nesting/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-11/220-11-15_arrayNesting.js)

### 甲板上的战舰

> 2020 年 10 月 31 日

给定一个二维的甲板， 请计算其中有多少艘战舰。  战舰用  'X'表示，空位用  '.'表示。  你需要遵守以下规则：

给你一个有效的甲板，仅由战舰或者空位组成。
战舰只能水平或者垂直放置。换句话说,战舰只能由  1xN (1 行, N 列)组成，或者  Nx1 (N 行, 1 列)组成，其中 N 可以是任意大小。
两艘战舰之间至少有一个水平或垂直的空位分隔  - 即没有相邻的战舰。

**示例**

```
X..X
...X
...X
```

在上面的甲板中有 2 艘战舰。

**提示：**

```
...X
XXXX
...X
```

0 <= num < 231

你不会收到这样的无效甲板 - 因为战舰之间至少会有一个空位将它们分开。

[原题 leetcode 链接](https://leetcode-cn.com/problems/battleships-in-a-board/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-10/20-10-31_countBattleships.js)

### 按姓名笔画排序的功能

> 2020 年 10 月 10 日

```
相同的笔画的姓氏用拼音排序
```

### 剑指 Offer 46. 把数字翻译成字符串

> 2020 年 10 月 06 日

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

**示例 1**

```
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

提示：

0 <= num < 231

[原题 leetcode 链接](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-10/20-10-06_translateNum.js)

### 有效的完全平方数

> 2020 年 10 月 04 日

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

**示例 1**

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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-10/20-10-04_fourSum.js)

### 有效的完全平方数

> 2020 年 10 月 02 日

有两个容量分别为  x 升 和 y 升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好  z 升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的  z 升   水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空

**示例 1**

```
输入: x = 3, y = 5, z = 4
输出: True

```

**示例 2**

```
输入: x = 2, y = 6, z = 5
输出: False
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/water-and-jug-problem/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-10/20-10-02_canMeasureWater.js)

### 有效的完全平方数

> 2020 年 09 月 12 日

给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如   sqrt。

**示例 1**

```
输入：16
输出：True
```

**示例 2**

```
输入：14
输出：False
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-09/20-09-12_longestSubarray.js)

### 绝对差不超过限制的最长连续子数组

> 2020 年 08 月 26 日

给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。

**示例 1**

```
输入：nums = [8,2,4,7], limit = 4
输出：2
解释：所有子数组如下：
[8] 最大绝对差 |8-8| = 0 <= 4.
[8,2] 最大绝对差 |8-2| = 6 > 4.
[8,2,4] 最大绝对差 |8-2| = 6 > 4.
[8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
[2] 最大绝对差 |2-2| = 0 <= 4.
[2,4] 最大绝对差 |2-4| = 2 <= 4.
[2,4,7] 最大绝对差 |2-7| = 5 > 4.
[4] 最大绝对差 |4-4| = 0 <= 4.
[4,7] 最大绝对差 |4-7| = 3 <= 4.
[7] 最大绝对差 |7-7| = 0 <= 4.
因此，满足题意的最长子数组的长度为 2 。

```

**示例 2**

```
输入：nums = [10,1,2,4,7,2], limit = 5
输出：4
解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。

```

**示例 3**

```
输入：nums = [4,2,2,2,4,4,2,2], limit = 0
输出：3

```

说明:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
0 <= limit <= 10^9

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-08/20-08-26_longestSubarray.js)

### 丑数 II

> 2020 年 08 月 15 日

编写一个程序，找出第 n 个丑数。

丑数就是质因数只包含 2, 3, 5 的正整数。

**示例 1**

```
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```

说明:

1 是丑数。
n 不超过 1690。

[原题 leetcode 链接](https://leetcode-cn.com/problems/ugly-number-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-08/2020-08/20-08-15_nthUglyNumber.js)

### 分割数组

> 2020 年 07 月 29 日

给定一个数组  A，将其划分为两个不相交（没有公共元素）的连续子数组  left  和  right，  使得：

left  中的每个元素都小于或等于  right  中的每个元素。
left 和  right  都是非空的。
left  要尽可能小。
在完成这样的分组后返回  left  的长度。可以保证存在这样的划分方法。

**示例 1**

```
输入：[5,0,3,8,6]
输出：3
解释：left = [5,0,3]，right = [8,6]
```

**示例 2**

```
输入：[1,1,1,0,6,12]
输出：4
解释：left = [1,1,1,0]，right = [6,12]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/partition-array-into-disjoint-intervals/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-29_partitionDisjoint.js)

### 可能的二分法

> 2020 年 07 月 25 日

给定一组  N  人（编号为  1, 2, ..., N），  我们想把每个人分进任意大小的两组。

每个人都可能不喜欢其他人，那么他们不应该属于同一组。

形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。

当可以用这种方法将每个人分进两组时，返回 true；否则返回 false。

**示例 1**

```
输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]
```

**示例 2**

```
输入： pattern = "abba", value = "dogcatcatfish"
输出： false
```

**示例 3**

```
输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false
```

**示例 4**

```
输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false
```

提示：

1 <= N <= 2000
0 <= dislikes.length <= 10000
dislikes[i].length == 2
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
对于 dislikes[i] == dislikes[j] 不存在 i != j

[原题 leetcode 链接](https://leetcode-cn.com/problems/possible-bipartition/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-19_patternMatching.js)

### 面试题 16.18. 模式匹配

> 2020 年 07 月 19 日

你有两个字符串，即 pattern 和 value。 pattern 字符串由字母"a"和"b"组成，用于描述字符串中的模式。例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断 value 字符串是否匹配 pattern 字符串。

**示例 1**

```
输入： pattern = "abba", value = "dogcatcatdog"
输出： true
```

**示例 2**

```
输入： pattern = "abba", value = "dogcatcatfish"
输出： false
```

**示例 3**

```
输入： pattern = "aaaa", value = "dogcatcatdog"
输出： false
```

**示例 4**

```
输入： pattern = "abba", value = "dogdogdogdog"
输出： true
解释： "a"="dogdog",b=""，反之也符合规则
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/pattern-matching-lcci/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-19_patternMatching.js)

### 组合

> 2020 年 07 月 11 日

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

**示例 1**

```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/combinations/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-11_combine.js)

### 重构字符串

> 2020 年 07 月 08 日

给定一个字符串 S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

**示例 1**

```
输入: S = "aab"
输出: "aba"
```

**示例 2**

```
输入: S = "aaab"
输出: ""
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/reorganize-string/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-07-07_reorganizeString.js)

### 对角线遍历

> 2020 年 07 月 06 日

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

**示例 1**

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

```

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/diagonal_traverse.png)

[原题 leetcode 链接](https://leetcode-cn.com/problems/diagonal-traverse/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-06_.js)

### 二叉树着色游戏

> 2020 年 07 月 05 日

有两位极客玩家参与了一场「二叉树着色」的游戏。游戏中，给出二叉树的根节点  root，树上总共有 n 个节点，且 n 为奇数，其中每个节点上的值从  1 到  n  各不相同。

游戏从「一号」玩家开始（「一号」玩家为红色，「二号」玩家为蓝色），最开始时，

「一号」玩家从 [1, n]  中取一个值  x（1 <= x <= n）；

「二号」玩家也从  [1, n]  中取一个值  y（1 <= y <= n）且  y != x。

「一号」玩家给值为  x  的节点染上红色，而「二号」玩家给值为  y  的节点染上蓝色。

之后两位玩家轮流进行操作，每一回合，玩家选择一个他之前涂好颜色的节点，将所选节点一个 未着色 的邻节点（即左右子节点、或父节点）进行染色。

如果当前玩家无法找到这样的节点来染色时，他的回合就会被跳过。

若两个玩家都没有可以染色的节点时，游戏结束。着色节点最多的那位玩家获得胜利 ✌️。

现在，假设你是「二号」玩家，根据所给出的输入，假如存在一个  y  值可以确保你赢得这场游戏，则返回  true；若无法获胜，就请返回 false。

**示例 1**
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/04/1480-binary-tree-coloring-game.png)

```
输入：root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3
输出：True
解释：第二个玩家可以选择值为 2 的节点。

```

**示例 2**

```
输入: "(*)"
输出: True
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/binary-tree-coloring-game/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-05_btreeGameWinningMove.js)

### 有效的括号字符串

> 2020 年 07 月 01 日

给定一个只包含三种字符的字符串：（ ，）  和 \*，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 (  必须有相应的右括号 )。
任何右括号 )  必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
\*  可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。

**示例 1**

```
输入: "()"
输出: True

```

**示例 2**

```
输入: "(*)"
输出: True
```

**示例 2**

```
输入: "(*))"
输出: True
```

注意:

字符串大小将在 [1，100] 范围内。

[原题 leetcode 链接](https://leetcode-cn.com/problems/valid-parenthesis-string/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-07/20-07-01_checkValidString.js)

### 不同路径

> 2020 年 06 月 28 日

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

**示例 1**

```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右

```

**示例 1**

```
输入: m = 7, n = 3
输出: 28
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/unique-paths/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-20_triangleNumber.js)

### 前 K 个高频单词

> 2020 年 06 月 26 日

给一非空的单词列表，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

**示例 1**

```
输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。

```

**示例 1**

```
输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。

```

注意：

假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
输入的单词均由小写字母组成。

[原题 leetcode 链接](https://leetcode-cn.com/problems/top-k-frequent-words/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-20_triangleNumber.js)

### 有效三角形的个数

> 2020 年 06 月 20 日

给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

**示例 1**

```
输入: [2,2,3,4]
输出: 3
解释:
有效的组合是:
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/valid-triangle-number/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-20_triangleNumber.js)

### 汇总区间

> 2020 年 06 月 14 日

给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

**示例 1**

```
输入: [0,1,2,4,5,7]
输出: ["0->2","4->5","7"]
解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
```

**示例 2**

```
输入: [0,2,3,4,6,8,9]
输出: ["0","2->4","6","8->9"]
解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/summary-ranges/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-14_summaryRanges.js)

### 供暖器

> 2020 年 06 月 12 日

冬季已经来临。  你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

**示例 1**

```
输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
```

**示例 2**

```
输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/heaters/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-12_findRadius.js)

### 密钥格式化

> 2020 年 06 月 09 日

有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。

给你一个数字 K，请你重新格式化字符串，除了第一个分组以外，每个分组要包含 K 个字符；而第一个分组中，至少要包含 1 个字符。两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。

给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

**示例 1**

```
输入：S = "5F3Z-2e-9-w", K = 4
输出："5F3Z-2E9W"
解释：字符串 S 被分成了两个部分，每部分 4 个字符；
     注意，两个额外的破折号需要删掉。
```

**示例 2**

```
输入：S = "2-5g-3-J", K = 2
输出："2-5G-3J"
解释：字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/license-key-formatting/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-09_licenseKeyFormatting.js)

### 只出现一次的数字 II

> 2020 年 06 月 05 日

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1**

```
输入: [2,2,3,2]
输出: 3
```

**示例 2**

```
输入: [0,1,0,1,0,1,99]
输出: 99
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/single-number-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-05_singleNumber.js)

> 2020 年 05 月 28 日

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1**

```
输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

**示例 2**

```
输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。


```

[原题 leetcode 链接](https://leetcode-cn.com/problems/house-robber-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-06/20-06-02_inorderTraversal.js)

### 二叉树的中序遍历

> 2020 年 06 月 01 日

给定一个二叉树，返回它的中序 遍历。

**示例**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-22_combinationSum3.js)

> 2020 年 05 月 28 日

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1**

```
输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

**示例 2**

```
输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。


```

[原题 leetcode 链接](https://leetcode-cn.com/problems/house-robber-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-22_combinationSum3.js)

### 组合总和 III

> 2020 年 05 月 22 日

找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

注意：

你可以假设胃口值为正。
一个小朋友最多只能拥有一块饼干。

**示例 1**

```
输入: k = 3, n = 7
输出: [[1,2,4]]

```

**示例 2**

```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/combination-sum-iii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-22_combinationSum3.js)

### 分发饼干

> 2020 年 05 月 21 日

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值  gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

注意：

你可以假设胃口值为正。
一个小朋友最多只能拥有一块饼干。

**示例 1**

```
输入: [1,2,3], [1,1]

输出: 1

解释:
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。

```

**示例 2**

```
输入: [1,2], [1,2,3]

输出: 2

解释:
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/assign-cookies/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-16_superEggDrop.js)

### 简化路径

> 2020 年 05 月 19 日

以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..）  表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix 中的绝对路径 vs 相对路径

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。

**示例 1**

输入："/home/"
输出："/home"
解释：注意，最后一个目录名后面没有斜杠。

**示例 2**

```
输入："/../"
输出："/"
解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。
```

**示例 3**

```
输入："/home//foo/"
输出："/home/foo"
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
```

**示例**

```
输入: [4,1,2,1,2]
输出: 4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/single-number/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-16_superEggDrop.js)

### 课程表 II

> 2020 年 05 月 17 日

> 待搞清楚
> 现在你总共有 n 门课需要选，记为  0  到  n-1。

在选修某些课程之前需要一些先修课程。  例如，想要学习课程 0 ，你需要先完成课程  1 ，我们用一个匹配来表示他们: [0,1]

给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。

可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

**说明**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1**

```
输入: 2, [[1,0]]
输出: [0,1]
解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
```

**示例 2**

```
输入: 4, [[1,0],[2,0],[3,1],[3,2]]
输出: [0,1,2,3] or [0,2,1,3]
解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
     因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。

```

**说明:**

输入的先决条件是由边缘列表表示的图形，而不是邻接矩阵。详情请参见图的表示法。
你可以假定输入的先决条件中没有重复的边。

**提示:**

这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
通过 DFS 进行拓扑排序 - 一个关于 Coursera 的精彩视频教程（21 分钟），介绍拓扑排序的基本概念。
拓扑排序也可以通过  BFS  完成。

[原题 leetcode 链接](https://leetcode-cn.com/problems/course-schedule-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-17_findOrder.js)

### 鸡蛋掉落

> 2020 年 05 月 16 日

你将获得  K  个鸡蛋，并可以使用一栋从  1  到  N   共有 N  层楼的建筑。

每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

你知道存在楼层  F ，满足  0 <= F <= N 任何从高于 F  的楼层落下的鸡蛋都会碎，从  F  楼层或比它低的楼层落下的鸡蛋都不会破。

每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层  X  扔下（满足  1 <= X <= N）。

你的目标是确切地知道 F 的值是多少。

无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？

**说明**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1**

```
输入：K = 1, N = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
如果它没碎，那么我们肯定知道 F = 2 。
因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
```

**示例 2**

```
输入：K = 2, N = 6
输出：3
```

**示例 3**

```
输入：K = 3, N = 14
输出：4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/super-egg-drop/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-16_superEggDrop.js)

### 只出现一次的数字

> 2020 年 05 月 14 日

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例**

```
输入: [2,2,1]
输出: 1
```

**示例**

```
输入: [4,1,2,1,2]
输出: 4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/single-number/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-16_superEggDrop.js)

### 二叉树的层序遍历)

> 2020 年 05 月 13 日

给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

**示例**
二叉树：[3,9,20,null,null,15,7],

```
   3
   / \
  9  20
    /  \
   15   7
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-13_levelOrder.js)

### Pow(x, n)

> 2020 年 05 月 11 日

实现 pow(x, n) ，即计算 x 的 n 次幂函数。

**示例 1**

```
输入: 2.00000, 10
输出: 1024.00000
```

**示例 2**

```
输入: 2.10000, 3
输出: 9.26100
```

**示例 3**

```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/powx-n/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-011_myPow.js)

### x 的平方根

> 2020 年 05 月 08 日

实现  int sqrt(int x)  函数。

计算并返回  x  的平方根，其中  x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

**示例 1**

```
输入: 4
输出: 2
```

**示例 2**

```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/sqrtx/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-08_mySqrt.js)

### 全排列 II

> 2020 年 05 月 06 日

给定一个可包含重复数字的序列，返回所有不重复的全排列。

**示例 1**

```
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/permutations-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-06_permuteUnique.js)

### 验证二叉搜索树

> 2020 年 05 月 04 日

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

**示例 1**

```
输入:
    2
   / \
  1   3
输出: true
```

**示例 2**

```
输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/validate-binary-search-tree/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-05_isValidBST.js)

### 全排列

> 2020 年 05 月 04 日

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

**示例**

```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/permutations/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-05/20-05-04_permute.js)

### 在排序数组中查找元素的第一个和最后一个位置

> 2020 年 04 月 30 日

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是  O(log n) 级别。

如果数组中不存在目标值，返回  [-1, -1]。

**示例 1**

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```

**示例 1**

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-30_searchRange.js)

### 面试题 56 - I. 数组中数字出现的次数

> 2020 年 04 月 27 日

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是 O(n)，空间复杂度是 O(1)。

**示例 1**

```
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

```

**示例 1**

```
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-27_singleNumbers.js)

### 二叉树的右视图

> 2020 年 04 月 22 日

**示例 1**

```
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/binary-tree-right-side-view/)

### 寻找重复数

> 2020 年 04 月 20 日

两个数组的交集 II

**示例 1**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

**示例 2**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

说明:
输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。

[原题 leetcode 链接](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

### 寻找重复数

> 2020 年 04 月 19 日

给定一个包含  n + 1 个整数的数组  nums，其数字都在 1 到 n  之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

**示例 1**

```
输入: [1,3,4,2,2]
输出: 2
```

**示例 2**

```
输入: [1,3,4,2,2]
输出: 2
```

说明:

1. 不能更改原数组（假设数组是只读的）。
2. 只能使用额外的 O(1) 的空间。
3. 时间复杂度小于 O(n2) 。
4. 数组中只有一个重复的数字，但它可能不止重复出现一次。

[原题 leetcode 链接](https://leetcode-cn.com/problems/move-zeroes/)

### 移动零

> 2020 年 04 月 18 日

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例**

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

[原题 leetcode 链接](https://leetcode-cn.com/problems/move-zeroes/)

### 两数相加 II

> 2020 年 04 月 16 日

给出集合  [1,2,3,…,n]，其所有元素共有  n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当  n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定  n 和  k，返回第  k  个排列。

**示例 1**

```
输入: n = 3, k = 3
输出: "213"
```

**示例 2**

```
输入: n = 4, k = 9
输出: "2314"
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/permutation-sequence/)

### 两数相加 II

> 2020 年 04 月 14 日

给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

**示例**

```
输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/add-two-numbers-ii/)

### 最长有效括号

> 2020 年 04 月 12 日

给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度

**示例 1**

```
输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
```

**示例 2**

```
输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-valid-parentheses/)

### 鸡蛋掉落

> 2020 年 04 月 11 日

> TODO 未解答出来

你将获得  K  个鸡蛋，并可以使用一栋从  1  到  N   共有 N  层楼的建筑。

每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

你知道存在楼层  F ，满足  0 <= F <= N 任何从高于 F  的楼层落下的鸡蛋都会碎，从  F  楼层或比它低的楼层落下的鸡蛋都不会破。

每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层  X  扔下（满足  1 <= X <= N）。

你的目标是确切地知道 F 的值是多少。

无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？

**示例 1**

```
输入：K = 1, N = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
如果它没碎，那么我们肯定知道 F = 2 。
因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
```

**示例 2**

```
输入：K = 2, N = 6
输出：3
```

**示例 3**

```
输入：K = 3, N = 14
输出：4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/super-egg-drop/)

### 翻转字符串里的单词

> 2020 年 04 月 10 日

给定一个字符串，逐个翻转字符串中的每个单词。

**示例 1**

```
输入: "the sky is blue"
输出: "blue is sky the"
```

**示例 2**

```
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

**示例 3**

```
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-10_reverseWords.js)

### 有效的数独

> 2020 年 04 月 09 日

判断一个  9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字  1-9  在每一行只能出现一次。
数字  1-9  在每一列只能出现一次。
数字  1-9  在每一个以粗实线分隔的  3x3  宫内只能出现一次。

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

**示例 1**

```
输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true

```

**示例 2**

```
输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/valid-sudoku/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-09_isValidSudoku.js)

### 位运算实际场景

[运算符优先级](https://github.com/xhlwill/blog/issues/16)

> 2020 年 04 月 08 日

[原题 leetcode 链接](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-08_ bitOperation.js)

### 机器人的运动范围

> 2020 年 04 月 07 日

地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于 k 的格子。例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。但它不能进入方格 [35, 38]，因为 3+5+3+8=19。请问该机器人能够到达多少个格子？

**示例 1**

```
输入：m = 2, n = 3, k = 1
输出：3
```

**示例 2**

```
输入：m = 2, n = 3, k = 1
输出：3
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-07_movingCount.js)

### LFU 缓存

> 2020 年 04 月 05 日

> TODO 未解答

设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get  和  put。

get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。

进阶：
你是否可以在  O(1)  时间复杂度内执行两项操作？

示例：

```
LFUCache cache = new LFUCache( 2 /* capacity (缓存容量) */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2)
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/lfu-cache/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-05_LFUCache.js)

### 实现 add 方法

> 2020 年 04 月 04 日

如下调用输出对应的结果

```
add(1)(2,3)(4).value()
输出： 10
```

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-04_add.js)

### 使用最小花费爬楼梯

> 2020 年 04 月 03 日

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/generate-parentheses/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-03_generateParenthesis.js)

### 使用最小花费爬楼梯

> 2020 年 04 月 02 日

数组的每个索引做为一个阶梯，第  i 个阶梯对应着一个非负数的体力花费值  cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

**示例 1**

```
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。

```

**示例 2**

```
输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。

```

**注意：**

cost 的长度将会在 [2, 1000]。
每一个 cost[i] 将会是一个 Integer 类型，范围为 [0, 999]。

[原题 leetcode 链接](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-02_minCostClimbingStairs.js)

### 排序数组

> 2020 年 04 月 01 日

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。  感谢 Marcos 贡献此图。

**示例**

```
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/trapping-rain-water/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-04/20-04-01_trap.js)

### 排序数组

> 2020 年 03 月 31 日

给你一个整数数组 nums，请你将该数组升序排列。

**示例 1**

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

```

**示例 2**

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/sort-an-array/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-30_lastRemaining.js)

### 圆圈中最后剩下的数字

> 2020 年 03 月 30 日

0,1,,n-1 这 n 个数字排成一个圆圈，从数字 0 开始，每次从这个圆圈里删除第 m 个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4 这 5 个数字组成一个圆圈，从数字 0 开始每次删除第 3 个数字，则删除的前 4 个数字依次是 2、0、4、1，因此最后剩下的数字是 3。

**示例 1**

```
输入: n = 5, m = 3
输出: 3

```

**示例 2**

```
输入: n = 10, m = 17
输出: 2

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-30_lastRemaining.js)

### 单词的压缩编码

> 2020 年 03 月 28 日

给定一个单词列表，我们将这个列表编码成一个索引字符串  S  与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S  中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

**示例**

```
输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/short-encoding-of-words/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-28_minimumLengthEncoding.js)

### K 个一组翻转链表

> 2020 年 03 月 25 日

给你一个链表，每  k  个节点一组进行翻转，请你返回翻转后的链表。

k  是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是  k  的整数倍，那么请将最后剩余的节点保持原有顺序。

**示例**

```
给你这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

```

**说明： :**

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-25_reverseKGroup.js)

### 链表的中间结点

> 2020 年 03 月 24 日

给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

**示例 1 :**

```
输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

```

**示例 2 :**

```
输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-23_minIncrementForUnique.js)

### 使数组唯一的最小增量

> 2020 年 03 月 23 日

给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

**示例 1 :**

```
输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
```

**示例 2 :**

```
输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-03-23_minIncrementForUnique.js)

### 面试题

> 2020 年 03 月 21 日

实现下面模版字符串的方法

```javascript
let template = "我是{{name}}，年龄{{age}}，性别{{list[0]}}";
let data = {
  name: "姓名",
  age: 18,
  list: [1],
};
var a = render(template, data); // 我是姓名，年龄18，性别undefined
```

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-21_模版字符串解析.js)

> 2020 年 03 月 19 日

### 阿里笔试题目

> 2020 年 03 月 19 日

```javascript
// =========================
// 题目：编写一个简单的事件监听处理器，要求具备 on 方法绑定、off 方法解绑
// 编写一个简单的事件监听处理器
// 1. 具备 on 方法绑定事件
// 2. 具备 off 方法解绑事件

function EventEmitter () {
  // todo
}

// test
var emitter = new EventEmitter();

emitter.on('foo', function (e) {
  console.log('foo event: ', e);
});

emitter.on('*', function (e, type) {
  console.log('some event: ', e, type);
});


function onBar (e) {
  console.log('bar event: ', e);
}

emitter.on('bar', onBar);


emitter.emit('foo', { name: 'John' });
emitter.emit('bar', { name: 'John' });

emitter.off('bar', onBar);
emitter.emit('foo', { name: 'John' });
emitter.emit('bar', { name: 'John' });


// =========================
// 题目：请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算。
// 请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算
class BigInt() {
  constructor(str) {
  }

  plus(bigInt) {

  }

  toString() {
  }
}

// usage
const big1 = new BigInt('1234232453525454546445451434342153453454545454545454');
const big2 = new BigInt('1234232453525454546445451434342153453454545454545454');
console.log(bigint1.plus(bigint2));

// =========================
// 题目：实现一个可以缓存其他函数的高阶函数memoize。能够实现：当入参相同时，可以不经过计算，直接返回结果。
/** 求平方根 */
function sqrt(n) { return Math.sqrt(n) }

const memoize = fn => {
  // 实现
}
const cachedSqrt = memoize(sqrt)
cachedSqrt(4) // 2
cachedSqrt(4) // 不经过计算，直接输出结果2

// =========================
// 题目：实现快速排序

function quicksort(array) {
	// TODO
}

// test
var array = [4, 7, 87, 34, 56, 69, 19, 26, 7, 9, 33];
var result = quicksort(array);


// =========================
// 实现多叉树的广度度优先搜索
function bfs(tree, name){
  // TODO: 你的代码
}

var tree = {
  name : '中国',
  children : [
    {
      name : '北京',
      children : [
        {
          name : '朝阳群众'
        },
        {
          name : '海淀区'
        },
                {
          name : '昌平区'
        }
      ]
    },
    {
      name : '浙江省',
      children : [
        {
          name : '杭州市',
          code : 0571,
        },
        {
          name : '嘉兴市'
        },
        {
          name : '绍兴市'
        },
        {
          name : '宁波市'
        }
      ]
    }
  ]
};

var node = bfs(tree, '杭州市');
console.log(node);    // { name: '杭州市', code: 0571 }

```

### 矩形重叠

> 2020 年 03 月 18 日

矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果。

**示例 1 :**

```
输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
输出：true

```

**示例 2 :**

```
输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
输出：false
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/rectangle-overlap/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-16_isSymmetric.js)

### 拼写单词

> 2020 年 03 月 17 日

给你一份『词汇表』（字符串数组） words  和一张『字母表』（字符串） chars。

假如你可以用  chars  中的『字母』（字符）拼写出 words  中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写时，chars 中的每个字母都只能用一次。

返回词汇表  words  中你掌握的所有单词的 长度之和。

**示例 1 :**

```
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释：
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。

```

**示例 2 :**

```
输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-16_isSymmetric.js)

### 对称的二叉树

> 2020 年 03 月 16 日

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

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

**示例 1 :**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2 :**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-16_isSymmetric.js)

### 求 1+2+…+n

> 2020 年 03 月 15 日

求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case 等关键字及条件判断语句（A?B:C）。
**示例 1 :**

```
输入: n = 3
输出: 6
```

**示例 2 :**

```
输入: n = 9
输出: 45
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/qiu-12n-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-15_sumNums.js)

### 字符串压缩

> 2020 年 03 月 14 日

字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串 aabcccccaaa 会变为 a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a 至 z）。

**示例 1 :**

```
 输入："aabcccccaaa"
 输出："a2b1c5a3"
```

**示例 2 :**

```
 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
```

**提示：**

```
字符串长度在[0, 50000]范围内。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/compress-string-lcci/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-14_compressString.js)

### 路径总和

> 2020 年 03 月 13 日

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明:  叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

```

返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

[原题 leetcode 链接](https://leetcode-cn.com/problems/path-sum/description/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-13_hasPathSum.js)

### 自定义布局

> 2020 年 03 月 12 日
> css 复习： 圣杯布局，双飞翼布局，左侧自适应-两栏布局

### 最长上升子序列

> 2020 年 03 月 11 日
> 给定一个无序的整数数组，找到其中最长上升子序列的长度。

**示例 :**

```
输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

**说明 :**

```
可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
```

进阶: 你能将算法的时间复杂度降低到  O(n log n) 吗?

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-11_lengthOfLIS.js)

### 字符串的最大公因子

> 2020 年 03 月 10 日

对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

**示例 1:**

```
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

**示例 2:**

```
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

**示例 3:**

```
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

**提示:**

```
1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] 和 str2[i] 为大写英文字母
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-10_gcdOfStrings.js)

### 礼物的最大价值

> 2020 年 03 月 08 日

在一个 m\*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

**示例 1:**

```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-08_maxValue.js)

### 股票的最大利润

> 2020 年 03 月 07 日

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

**示例 1:**

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

```

**示例 2:**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-07_maxProfit.js)

### 将数组分成和相等的三个部分

> 2020 年 03 月 05 日

给你一个整数数组  A，只有可以将其划分为三个和相等的非空部分时才返回  true，否则返回 false。

形式上，如果可以找出索引  i+1 < j  且满足  (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])  就可以将数组三等分。

**示例 1:**

```
输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

```

**示例 2:**

```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

**示例 3:**

```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

提示：

3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4

[原题 leetcode 链接](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-01_findContinuousSequence.js)

### 常用的经典布局

> 2020 年 03 月 04 日

双飞翼布局
圣杯布局
两栏布局

### 二叉树的直径

> 2020 年 03 月 03 日

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

示例 :
给定二叉树
**示例 :**

```
          1
         / \
        2   3
       / \
      4   5

```

返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

**注意:** 两结点之间的路径长度是以它们之间边的数目表示。

[原题 leetcode 链接](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-01_findContinuousSequence.js)

### 57-II. 和为 s 的连续正数序列

> 2020 年 03 月 01 日

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

**示例 1:**

```
输入：target = 9
输出：[[2,3,4],[4,5]]

```

**示例 2:**

```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

**限制：**

```
1 <= target <= 10^5
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-03/20-03-01_findContinuousSequence.js)

### 从前序与中序遍历序列构造二叉树

> 2020 年 02 月 28 日

根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

```

返回如下二叉树
···

    3

/ \
 9 20
/ \
 15 7

···
[原题 leetcode 链接](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-28_buildTree.js)

### 1103. 分糖果 II

> 2020 年 02 月 26 日

排排坐，分糖果。

我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 \* n 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

**例如 1:**

```
输入：candies = 7, num_people = 4
输出：[1,2,3,1]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0,0]。
第三次，ans[2] += 3，数组变为 [1,2,3,0]。
第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。

```

**例如 2:**

```
输入：candies = 10, num_people = 3
输出：[5,2,3]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0]。
第三次，ans[2] += 3，数组变为 [1,2,3]。
第四次，ans[0] += 4，最终数组变为 [5,2,3]。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/distribute-candies-to-people/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-26_distributeCandies.js)

### 四数之和

> 2020 年 02 月 21 日

给定四个包含整数的数组列表  A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得  A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度  N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过  231 - 1

**例如:**

```
输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/4sum-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-21_fourSumCount.js)

### 两数相加 II

> 2020 年 02 月 20 日

给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。

**注意:**

```
num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/add-strings/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-20_addStrings.js)

### 实现一个比较完整的 Promise

> 2020 年 02 月 19 日

[promise 标准](https://promisesaplus.com/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-19_PromiseFake.js)

### node url

> 2020 年 02 月 18 日

讲讲 node 的 urL 模块

[讲解](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-18_node_url模块.md)

### 两数相加 II

> 2020 年 02 月 17 日

给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

**进阶:**

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

**示例:**

```
输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出: 7 -> 8 -> 0 -> 7

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/add-two-numbers-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-17_addTwoNumbers.js)

### 面试题 43. 1 ～ n 整数中 1 出现的次数

> 2020 年 02 月 16 日

输入一个整数 n ，求 1 ～ n 这 n 个整数的十进制表示中 1 出现的次数。

例如，输入 12，1 ～ 12 这些整数中包含 1 的数字有 1、10、11 和 12，1 一共出现了 5 次。

**示例 1**

```
输入：n = 12
输出：5

```

**限制**

```
输入：n = 13
输出：6
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-16_countDigitOne.js)

### 面试题 03. 数组中重复的数字

> 2020 年 02 月 14 日

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3

```

**限制**

```
2 <= n <= 100000
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-string-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-14_findRepeatNumber.js)

### 将反转字符串 II

> 2020 年 02 月 12 日

给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前 k 个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

**示例**

```
输入: s = "abcdefg", k = 2
输出: "bacdfeg"

```

**要求**

1. 该字符串只包含小写的英文字母。
2. 给定字符串的长度和 k 在[1, 10000]范围内。

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-string-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-12_reverseStr)

### 将有序数组转换为二叉搜索树

> 2020 年 02 月 11 日

有效括号字符串为空  ("")、"(" + A + ")"  或  A + B，其中  A 和  B  都是有效的括号字符串，+  代表字符串的连接。例如，""，"()"，"(())()"  和  "(()(()))"  都是有效的括号字符串。

如果有效字符串  S  非空，且不存在将其拆分为  S = A+B  的方法，我们称其为原语（primitive），其中  A 和  B  都是非空有效括号字符串。

给出一个非空有效字符串  S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中  P_i  是有效括号字符串原语。

对  S  进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

**示例 1**

```
输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

```

**示例 2**

```
输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

```

**示例 3**

```
输入："()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

```

**提示**

```
1.S.length <= 10000
2.S[i] 为 "(" 或 ")"
3.S 是一个有效括号字符串
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/remove-outermost-parentheses/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-11_removeOuterParentheses.js)

### 将有序数组转换为二叉搜索树

> 2020 年 02 月 08 日

将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

**示例**

```

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-08_sortedArrayToBST.js)

### 聊聊二维码登陆

> 2020 年 02 月 07 日

### 打家劫舍 III

> 2020 年 02 月 06 日

给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

**示例 1**

```
输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

```

**说明**

```
字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/shortest-distance-to-a-character/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-06_shortestToCha.js)

### 打家劫舍 III

> 2020 年 02 月 04 日

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1**

```
输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

```

**示例 2**

```
输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/house-robber-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-04_rob.js)

### 删除回文子序列

> 2020 年 02 月 03 日

给你一个字符串  s，它仅由字母  'a' 和 'b'  组成。每一次删除操作都可以从 s 中删除一个回文 子序列。

返回删除给定字符串中所有字符（字符串为空）的最小删除次数。

「子序列」定义：如果一个字符串可以通过删除原字符串某些字符而不改变原字符顺序得到，那么这个字符串就是原字符串的一个子序列。

「回文」定义：如果一个字符串向后和向前读是一致的，那么这个字符串就是一个回文。

**示例 1**

```
输入：s = "ababa"
输出：1
解释：字符串本身就是回文序列，只需要删除一次。
```

**示例 2**

```
输入：s = "abb"
输出：2
解释："abb" -> "bb" -> "".
先删除回文子序列 "a"，然后再删除 "bb"。
```

**示例 3**

```
输入：s = "baabb"
输出：2
解释："baabb" -> "b" -> "".
先删除回文子序列 "baab"，然后再删除 "b"。
```

**示例 4**

```
输入：s = ""
输出：0
```

**提示**

- 0 <= s.length <= 1000
- s 仅包含字母 'a' 和 'b'
  [原题 leetcode 链接](https://leetcode-cn.com/problems/remove-palindromic-subsequences/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-02/20-02-01_countSubstrings.js)

### 最大交换

> 2020 年 02 月 02 日

给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

**示例 1**

```
输入: 2736
输出: 7236
解释: 交换数字2和数字7。
```

**示例 2**

```
输入: 9973
输出: 9973
解释: 不需要交换。
```

**注意**

```
给定数字的范围是 [0, 108]
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/maximum-swap/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-02-01_countSubstrings.js)

### 最长回文子序列

> 2020 年 01 月 30 日

给定一个字符串 s，找到其中最长的回文子序列。可以假设 s 的最大长度为 1000。

**示例 1**

```
输入:
"bbbab"

输出:
4
```

**示例 2**

```
输入:
"cbbd"

输出:
2
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-28_uncommonFromSentences.js)

### 回文子串

> 2020 年 2 月 1 日

给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。

**示例 1**

```
输入: "abc"
输出: 3
解释: 三个回文子串: "a", "b", "c".
```

**示例 2**

```
输入: "aaa"
输出: 6
说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/palindromic-substrings/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-02-01_countSubstrings)

### 最长回文子序列

> 2020 年 01 月 30 日

给定一个字符串 s，找到其中最长的回文子序列。可以假设 s 的最大长度为 1000。

**示例 1**

```
输入:
"bbbab"

输出:
4
```

**示例 2**

```
输入:
"cbbd"

输出:
2
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-30_longestPalindromeSubseq.js)

### 卡牌分组

> 2020 年 01 月 29 日

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有  X  张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回  true。

**示例 1**

```
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```

**示例 2**

```
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```

**示例 3**

```
输入：[1]
输出：false
解释：没有满足要求的分组。
```

**示例 4**

```
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```

**示例 5**

```
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```

**提示：**

- 1 <= deck.length <= 10000
- 0 <= deck[i] < 10000

[原题 leetcode 链接](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-29_hasGroupsSizeX.js)

### 两句话中的不常见单词

> 2020 年 01 月 28 日

给定两个句子  A  和  B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）

如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。

返回所有不常用单词的列表。

您可以按任何顺序返回列表。

**示例 1**

```
输入：A = "this apple is sweet", B = "this apple is sour"
输出：["sweet","sour"]
```

**示例 2**

```
输入：A = "apple apple", B = "banana"
输出：["banana"]
```

**提示：**

- 0 <= A.length <= 200
- 0 <= B.length <= 200
- A 和 B 都只包含空格和小写字母。

[原题 leetcode 链接](https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-28_uncommonFromSentences.js)

### 数组中的第 K 个最大元素

> 2020 年 01 月 25 日

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
**示例 1**

```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

**示例 2**

```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-25_findKthLargest.js)

### 平方数之和

> 2020 年 01 月 24 日

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
**示例 1**

```
输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5
```

**示例 2**

```
输入: 3
输出: False
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/sum-of-square-numbers/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-01-24_judgeSquareSum.js)

### 三个数的最大乘积

> 2020 年 01 月 23 日

给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
**示例 1**

```
输入: [1,2,3]
输出: 6
```

**示例 2**

```
输入: [1,2,3,4]
输出: 24
```

**注意：**

1. 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
2. 输入的数组中任意三个数的乘积不会超出 32 位有符号整数的范围。

[原题 leetcode 链接](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-23_maximumProduct.js)

### 下一个更大元素 I

> 2020 年 01 月 22 日

给定两个没有重复元素的数组  nums1 和  nums2 ，其中 nums1  是  nums2  的子集。找到  nums1  中每个元素在  nums2  中的下一个比其大的值。

nums1  中数字  x  的下一个更大元素是指  x  在  nums2  中对应位置的右边的第一个比  x  大的元素。如果不存在，对应位置输出-1。

**示例 1**

```
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
```

**示例 2**

```
输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于num1中的数字2，第二个数组中的下一个较大数字是3。
    对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。
```

**注意：**

nums1 和 nums2 中所有元素是唯一的。
nums1 和 nums2 的数组大小都不超过 1000。

[原题 leetcode 链接](https://leetcode-cn.com/problems/next-greater-element-i/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-22_nextGreaterElement.js)

### 颜色分类

> 2020 年 01 月 21 日

给定一个包含红色、白色和蓝色，一共  n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

**注意:**

不能使用代码库中的排序函数来解决这道题。

**示例：**

```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```

**进阶：**

```
一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/sort-colors/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-21_sortColors.js)

### 最大连续 1 的个数

> 2020 年 01 月 20 日

给定一个二进制数组， 计算其中最大连续 1 的个数:

**示例 1**

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

注意：

输入的数组只包含 0 和 1。
输入数组的长度是正整数，且不超过 10,000。
[原题 leetcode 链接](https://leetcode-cn.com/problems/max-consecutive-ones/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-20_findMaxConsecutiveOnes.js)

### 计数质数

> 2020 年 01 月 19 日
> 统计所有小于非负整数 n 的质数的数量。

**示例:**

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/count-primes/submissions/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-19_countPrimes.js)

### 二叉树的层次遍历 II

> 2020 年 01 月 18 日

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
**例如:**
给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其自底向上的层次遍历为：

```
[
  [15,7],
  [9,20],
  [3]
]
```

**进阶:**

[原题 leetcode 链接](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-18_levelOrderBottom.js)

### 长度最小的子数组

> 2020 年 01 月 17 日

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

**示例:**

```
输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
```

**进阶:**

如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

[原题 leetcode 链接](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-17_minSubArrayLen.js)

### 零钱兑换

> 2020 年 01 月 16 日

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回  -1

**示例:**

```
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/coin-change/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-16_coinChange.js)

### 不同的二叉搜索树

> 2020 年 01 月 15 日

给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

**示例:**

```
输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/unique-binary-search-trees/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-15_numTrees.js)

### 合并区间

> 2020 年 01 月 14 日

给出一个区间的集合，请合并所有重叠的区间。

**示例 1:**

```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2:**

```
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/merge-intervals/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-14_merge.js)

### 最大数

> 2020 年 01 月 13 日

给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

**示例 1:**

```
输入: [10,2]
输出: 210
```

**示例 2:**

```
输入: [3,30,34,5,9]
输出: 9534330
```

**说明:** 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

[原题 leetcode 链接](https://leetcode-cn.com/problems/largest-number/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-13_largestNumber.js)

### 反转链表 II

> 2020 年 01 月 12 日

反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

**示例:**

```
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-12_reverseBetween.js)

### 旋转链表

> 2020 年 01 月 11 日

给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
**示例 1:**

```
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```

**示例 2:**

```
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/rotate-list/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-11_rotateRight.js)

### 跳跃游戏

> 2020 年 01 月 10 日

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。
**示例 1:**

```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```

**示例 2:**

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/jump-game/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-10_canJump.js)

### 子集

> 2020 年 01 月 09 日

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

**示例:**

```
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/subsets/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-09_subsets.js)

### 最小路径和

> 2020 年 01 月 08 日

给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

**示例 1:**

```
  输入:
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  输出: 7
  解释: 因为路径 1→3→1→1→1 的总和最小。
```

[原题 leetcode 链接](https://leetcode-cn.com/problems/minimum-path-sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-08_minPathSum.js)

### 回文链表

> 2020 年 01 月 07 日
> 请判断一个链表是否为回文链表。

**示例 1:**

```
  输入: 1->2
  输出: false
```

**示例 2:**

```
  输入: 1->2->2->1
  输出: true
```

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-07_isPalindrome.js)

[原题 leetcode 链接](https://leetcode-cn.com/problems/palindrome-linked-list/)

### 快速排序

> 2020 年 01 月 06 日

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-06_quickSort.js)

### 组合总和

> 2020 年 01 月 04 日

给定一个无重复元素的数组  candidates  和一个目标数  target ，找出  candidates  中所有可以使数字和为  target  的组合。

candidates  中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括  target）都是正整数。
- 解集不能包含重复的组合。

**示例 1:**

```
  输入: candidates = [2,3,6,7], target = 7,
  所求解集为:
  [
    [7],
    [2,2,3]
  ]

```

**示例 2:**

```
  输入: candidates = [2,3,5], target = 8,
  所求解集为:
  [
    [2,2,2,2],
    [2,3,3],
    [3,5]
  ]

```

[原题 leetcode 链接](https://leetcode-cn.com/problems/combination-sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-04_combinationSum.js)

### 网上算法题

> 2020 年 01 月 03 日

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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-03_search.js)

### 四数之和

> 2020 年 01 月 02 日

给定一个包含  n 个整数的数组  nums  和一个目标值  target，判断  nums  中是否存在四个元素 a，b，c  和 d ，使得  a + b + c + d  的值与  target  相等？找出所有满足条件且不重复的四元组。

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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-02_fourSum.js)

[原题 leetcode 链接](https://leetcode-cn.com/problems/4sum/)

### 最接近的三数之和

> 2020 年 01 月 01 日

给定一个包括  n 个整数的数组  nums  和 一个目标值  target。找出  nums  中的三个整数，使得它们的和与  target  最接近。返回这三个数的和。假定每组输入只存在唯一答案。
**示例 1:**

```
例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

```

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-01_threeSumClosest.js)

[原题 leetcode 链接](https://leetcode-cn.com/problems/3sum-closest/)

### 完全平方数

> 2019 年 12 月 31 日

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

> 2019 年 12 月 30 日

### 电话号码的字母组合

> 2019 年 12 月 29 日

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

> 2019 年 12 月 28 日

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

> 2019 年 12 月 27 日

给定两个字符串  text1 和  text2，返回这两个字符串的最长公共子序列。

一个字符串的   子序列   是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
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

> 2019 年 12 月 26 日

如何用 js 实现一个红绿灯。那我们如何实现呢。

首先第一步：分析需求

一个红绿灯，有哪些功能呢：红灯绿灯黄灯依次切换，并且一直循环。

### 最长回文子串

> 2019 年 12 月 25 日

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

> 2019 年 12 月 24 日

给定一个由  '('  和  ')'  括号组成的字符串 S，我们需要添加最少的括号（ '('  或是  ')'，可以在任何位置），以使得到的括号字符串有效。

从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

它是一个空字符串，或者
它可以被写成  AB （A  与  B  连接）, 其中  A 和  B  都是有效字符串，或者
它可以被写作  (A)，其中  A  是有效字符串。
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

> 2019 年 12 月 23 日

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
