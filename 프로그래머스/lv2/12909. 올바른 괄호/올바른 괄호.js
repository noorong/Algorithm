// function solution(s){
//     var answer = true;
//     let Arr = s.split('');
//     let cnt = 0;
    
//     if(s.length % 2 != 0) answer = false
//     else if (s.length % 2 == 0){
//         if (Arr.lastIndexOf("(") > Arr.lastIndexOf(")")) answer = false
//         else if (s[0] === ")" || s[s.length-1] === "(") answer = false
//         else {
//             Arr.map(v => {
//                 if (v === ")") cnt ++
//             })
//             cnt == s.length/2 ? true : false
//         }
//     }
//     return answer;
// }

function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}
