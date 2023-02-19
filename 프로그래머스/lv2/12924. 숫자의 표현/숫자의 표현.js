function solution(n) {
    var answer = 0;
    for (let i = 1; i < n; i +=2) {
        if (n % i == 0) answer++;
    }
    
    
    return answer = n % 2 == 0 ? answer : answer+1;
}