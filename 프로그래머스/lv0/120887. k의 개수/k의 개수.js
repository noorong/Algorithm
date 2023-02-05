function solution(i, j, k) {
    var answer = 0;
    
    for (i; i <= j; i++) {
        String(i).split('').map( v => {
            v == k && answer++;
        })
    }
    
    return answer;
}