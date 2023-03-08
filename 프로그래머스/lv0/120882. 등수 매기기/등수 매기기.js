function solution(score) {
    var answer = [];
    let avg = [];
    let rank = [];
    
    for (let x of score) answer.push(x.reduce((a,b) => (a+b) / 2))
    for (let i = 0; i < answer.length; i++) {
        avg = answer.slice().sort((a,b) => b - a);
        rank[i] = avg.indexOf(answer[i]) + 1
    }
    console.log(avg)
    return rank;
}