
// 初始化数组 nums = [1, 2, 3, 4, 5, 6];
// 首先应该明白，以 1 开头的全排列有 5! 个，以 2 开头的全排列有 5! 个 …… 共 5! * 6 = 6! 个；

// 故 k = 373 时，全排列的第一个数字应该是 nums[ k / 5! ] = 4 ;
// 数组删除 4, 此时 nums = [1, 2, 3, 5, 6]; k %= 5! = 12 ;
// 接下来就是在 nums 中找第 12 个全排列，重复 1，2 步即可 。