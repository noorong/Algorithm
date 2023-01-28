function solution(quiz) {
    var answer = [];
    let arr =[];
// console.log(quiz.map(v => v.split("=")))
    quiz.map(v => v.split("=")).map(v => v.map(i => arr.push(eval(i))))
    for(let i = 0; i <arr.length; i+=2) arr[i] == arr[i+1] ? answer.push('O') : answer.push('X')
    
    return answer;
}