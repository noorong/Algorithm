function solution(a, b) {
    var answer = 0;
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    for(min; min <= max; min++) {
        answer += min
    }
    
    return answer;
}