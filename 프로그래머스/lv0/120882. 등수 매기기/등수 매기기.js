function solution(score) {
    var answer = [];
    let rank = [];
    
    for (let x of score) answer.push(x.reduce((a,b) => (a+b) / 2))
    for (let i = 0; i < answer.length; i++) {
        rank[i] = answer.slice().sort((a,b) => b - a).indexOf(answer[i]) + 1;
    }
    return rank;
}