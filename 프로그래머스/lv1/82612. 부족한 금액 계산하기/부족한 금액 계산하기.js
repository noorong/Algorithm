function solution(price, money, count) {
    var answer = price;

    for (let i = 2; i <= count; i++) {
        answer += price*i;
        console.log(answer)
    }
    
    return answer - money <=0 ? 0 : answer - money;
}