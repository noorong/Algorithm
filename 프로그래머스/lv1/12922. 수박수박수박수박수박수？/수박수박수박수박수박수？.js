function solution(n) {
    var answer = '';
    
    if (n % 2 == 0) {
        for (let i = 1; i < n; i+=2) {
            answer += '수박'
        }
    }
    else if (n % 2 != 0) {
        for (let i = 1; i < n-1; i+=2) {
            answer += '수박'
        } 
        answer += "수"
    }
    
    return answer;
}