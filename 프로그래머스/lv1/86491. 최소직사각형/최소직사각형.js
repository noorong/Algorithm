function solution(sizes) {
    var answer = [[],[]];
    for (let v of sizes) {
        v.sort((a,b) => b - a)
        answer[0].push(v[0])
        answer[1].push(v[1])
    }
    
    answer[0] = Math.max(...answer[0])
    answer[1] = Math.max(...answer[1])
    return (answer[0])*(answer[1]);
}