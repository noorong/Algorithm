function solution(sides) {
    sides = sides.sort((a,b) => a - b)
    var answer = [];
    
    for (let j = 1; j <= sides[0]; j++) {
        answer.push(sides[1] + j - sides[0])
    }
    
    for (let i = sides[1]+1; i < sides[0] + sides[1]; i++) {
        answer.push(i)
    }
    
    return answer.length;
}