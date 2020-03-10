<h1 align="center">One Day</h1>
<p align="center">每天记录一点</p>
<p align="center"><a href='https://zouxiaomingya.github.io/oneDay'>题目地址--方便阅读</a></p>


###  二叉树的直径

> 2020 年 03 月 3 日

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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-02-28_buildTree.js)

### 57-II. 和为s的连续正数序列

> 2020 年 03 月 1 日


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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-02-28_buildTree.js)

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
  9  20
    /  \
   15   7

···
[原题 leetcode 链接](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-02-28_buildTree.js)

### 1103. 分糖果 II

> 2020 年 02 月 26 日

排排坐，分糖果。

我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

**例如1:**

```
输入：candies = 7, num_people = 4
输出：[1,2,3,1]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0,0]。
第三次，ans[2] += 3，数组变为 [1,2,3,0]。
第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。

```
**例如2:**

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

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/20-02-26_distributeCandies.js)

### 四数之和

> 2020 年 02 月 21 日

给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 

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

给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

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

### 面试题43. 1～n整数中1出现的次数

> 2020 年 02 月 16 日

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

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

### 面试题03. 数组中重复的数字

> 2020 年 02 月 14 日

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

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

给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

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

有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

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

给你一个字符串 s，它仅由字母 'a' 和 'b' 组成。每一次删除操作都可以从 s 中删除一个回文 子序列。

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
- s 仅包含字母 'a'  和 'b'
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

给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。

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

给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。

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

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

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

给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）

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

### 数组中的第K个最大元素
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
2. 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

[原题 leetcode 链接](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-23_maximumProduct.js)


### 下一个更大元素 I
> 2020 年 01 月 22 日

给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

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

nums1和nums2中所有元素是唯一的。
nums1和nums2 的数组大小都不超过1000。

[原题 leetcode 链接](https://leetcode-cn.com/problems/next-greater-element-i/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-22_nextGreaterElement.js)

### 颜色分类
> 2020 年 01 月 21 日

给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

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


### 最大连续1的个数
> 2020 年 01 月 20 日

给定一个二进制数组， 计算其中最大连续1的个数:

**示例 1**

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。
[原题 leetcode 链接](https://leetcode-cn.com/problems/max-consecutive-ones/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-20_findMaxConsecutiveOnes.js)


### 计数质数
> 2020 年 01 月 19 日
统计所有小于非负整数 n 的质数的数量。

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

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

[原题 leetcode 链接](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-17_minSubArrayLen.js)

### 零钱兑换
> 2020 年 01 月 16 日

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

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

**示例1:**
```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```
**示例2:**
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

**示例1:**
```
输入: [10,2]
输出: 210
```
**示例2:**
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
**示例1:**
```
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```
**示例2:**
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
**示例1:**
```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```
**示例2:**
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
请判断一个链表是否为回文链表。

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

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括 target）都是正整数。
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
[javaScript 代码实现答案](https://github.com/zouxiaomingya/oneDay/blob/master/answer/2020-01/20-01-02_fourSum.js)

[原题 leetcode 链接](https://leetcode-cn.com/problems/4sum/)


### 最接近的三数之和

> 2020 年 01 月 01 日

给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
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

> 2019 年 12 月 26 日

如何用js实现一个红绿灯。那我们如何实现呢。

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
