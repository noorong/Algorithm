function solution(numbers) {
    var answer = numbers.sort((a,b) => a - b)
    let res = 0;
    
    return res = 
        answer[0] * answer[1] > answer[answer.length-1] * answer[answer.length-2] ? 
        answer[0] * answer[1] : answer[answer.length-1] * answer[answer.length-2];
}