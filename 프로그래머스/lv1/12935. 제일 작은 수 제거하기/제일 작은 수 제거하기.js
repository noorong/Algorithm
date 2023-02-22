function solution(arr) {
    var min = arr.indexOf(Math.min(...arr));
    let answer = arr.splice(min,1)
    return arr.length > 1 ? arr : [-1];
}