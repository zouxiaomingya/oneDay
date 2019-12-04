// 找规律对于[1,3,3,1]来说它在第三行:rowIndex = 3，3（第二个元素） = 1*（3-0）/（1+0）=3
//第三个元素3 ：3 = 3*(3 - 1)/(1+1)
//公式：a = a*(rowIndex - i)/(i+1)


var getRow = function(rowIndex) {
    let a = 1
    let arr = []
    for(let i = 0 ; i <= rowIndex; i++){
        arr.push(a)
        a = a *(rowIndex - i)/(i+1)
    }
    return arr
};
