function solution(arr) {
    var answer = arr.indexOf(Math.min(...arr));
    let a = arr.splice(answer,1)
    return arr.length > 1 ? arr : [-1];
}