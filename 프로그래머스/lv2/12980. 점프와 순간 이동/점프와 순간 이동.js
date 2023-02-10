function solution(n) {
    var ans = 0;
    let cnt = 0;
    
    for(let i = 0; n > 0; i++) {
        if(n % 2 == 0) n = n / 2;
        else {
            n = n - 1
            cnt++
        }
        
    }

    return cnt;
}