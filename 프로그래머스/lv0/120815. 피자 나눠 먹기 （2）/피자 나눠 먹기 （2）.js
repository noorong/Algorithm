function solution(n) {
    var answer = 0;
    for (let i = Math.min(n,6); i <= n*6 ; i++) {
        if (i % n == 0 && i % 6 == 0) {
            answer = i / 6
            break;
        }
    }
    return answer;
}