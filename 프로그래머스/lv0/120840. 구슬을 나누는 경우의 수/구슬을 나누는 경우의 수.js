function solution(balls, share) {
    if(balls === share || balls == 1) return 1;
    var answer = [balls, share, balls - share];
    answer = answer.map(v => BigInt(v))
    let i = 1;
    let tmp = balls - share;
    
    for (let i = 1; i < balls; i++) {
        
     if (i < balls) answer[0] *= BigInt(i);
     if (i < share) answer[1] *= BigInt(i);
     if (i < tmp) answer[2] *= BigInt(i);

    }
    
    return answer[0] / (answer[1] * answer[2]);
}
