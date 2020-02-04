/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var signArr = String(num).split('');
    var len = signArr.length
    var sortArr = String(num).split('').sort((a,b)=>b-a);
    const getLastIndex = (target) => {
        for(let i = len - 1; i >= 0; i--){
            if(target === signArr[i]) return i;
        }
    }
    for(let i = 0; i <= len; i++){
        if(sortArr[i] === signArr[i]) continue;
        const tempIndex = getLastIndex(sortArr[i]);
        signArr[tempIndex] = signArr[i]; 
        signArr[i] = sortArr[i];
        break;
    }
    return Number(signArr.join(''));
};