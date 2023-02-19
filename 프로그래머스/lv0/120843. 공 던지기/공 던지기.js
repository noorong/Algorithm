// function solution(numbers, k) {
//     var answer = 0;
//     let tmp = []
    
//     if(numbers.length % 2 == 0) {
//         tmp = numbers.filter(v => v % 2 != 0)
//         answer = k % tmp.length == 0 ? tmp[tmp.length-1] : tmp[k % tmp.length - 1]
//     }
//     else {
//         if (k <= Math.ceil(numbers.length/2)) {
//             tmp = numbers.filter(v => v % 2 != 0) //홀수만 담기
//             answer = k % tmp.length == 0 ? tmp[tmp.length-1] : tmp[k % tmp.length - 1]
//         }
//         else if (k > Math.ceil(numbers.length/2)) {
//             tmp = numbers.filter(v => v % 2 == 0)
//             answer = k % tmp.length == 0 ? tmp[tmp.length-1] : tmp[k % tmp.length - 1]
//         }
//     }
//     return answer;
// }

function solution(numbers, k) {
    return numbers[(--k*2)%numbers.length];
}