/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const mapRow = new Map();
    const mapColum = new Map();
    // 验证横竖不重复
    for (let i = 0; i < 9; i++) { 
        mapRow.clear();
        mapColum.clear();
        for (let j = 0; j < 9; j++) {
            if (mapRow.has(board[i][j])) return false
            if (mapColum.has(board[j][i])) return false
            if (board[i][j] !== '.') {
                mapRow.set(board[i][j], j)
            }
            if (board[j][i] !== '.') {
                mapColum.set(board[j][i], i)
            }
        }
    }
    // 块状验证
    const map = new Map()
    let m = 0, n = 0
    while (m < 9) {
        while (n < 9) {
            map.clear()
            for (let i = m; i < m + 3; i++) {
                for (j = n; j < n + 3; j++) {
                    if (map.has(board[i][j])) return false
                    if (board[i][j] !== '.') {
                        map.set(board[i][j], j)
                    }
                }
            }
            n += 3
        }
        m += 3
        n = 0
    }
    return true
};