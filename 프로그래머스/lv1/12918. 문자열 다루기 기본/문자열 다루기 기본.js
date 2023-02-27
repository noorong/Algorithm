function solution(s) {
    var answer = (s.length === 4 || s.length === 6) 
    && ([...s].every(v => !isNaN(v))) 
    ? true : false;
    return answer;
}