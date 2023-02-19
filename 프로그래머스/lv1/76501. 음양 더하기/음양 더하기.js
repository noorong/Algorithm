function solution(absolutes, signs) {
    var answer = [];
    let tmp = '';
    
    for (let i = 0; i < signs.length; i++) {
          signs[i] = signs[i] == true? '+' : '-'
          answer[i] = signs[i] + absolutes[i]
    }
    
    return eval(answer.join(''));
}