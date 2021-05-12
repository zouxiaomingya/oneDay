/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
 const videoStitching = (clips, T) => {
  clips.sort((a, b) => a[0] - b[0]);
  // 0 <= T <= 100
  const dp = new Array(T + 1).fill(101);
  dp[0] = 0;
  for (let i = 0; i < clips.length; i++) {
    const [start, end] = clips[i];
    for (let j = start + 1; j <= end; j++) {
      // 计算当前片段上每个点的dp[j]
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }

  if (dp[T] == 101) {
    // 如果dp值为101，说明覆盖不了[0:T]，否则返回dp[T]
    return -1;
  }
  return dp[T];
};
