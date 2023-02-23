function solution(s) {
    var answer = s.split(' ');
    
    for (let i = answer.length-1; i >= 0; i--) {
        if(answer[i] == "Z") answer.splice(i-1, 2);
    }
    return answer.reduce((a,b) => a+Number(b),0);
}