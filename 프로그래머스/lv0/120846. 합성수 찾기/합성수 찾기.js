function solution(n) {
    var answer = [];

    if (n < 4) return 0;
    for (let i = 4; i <= n; i ++) {
        for (let j = 2; j < i; j ++) {
          if (i % j == 0) {
              answer.push(i);
              break;
          }
        }
    }
    
    return answer.length;
}