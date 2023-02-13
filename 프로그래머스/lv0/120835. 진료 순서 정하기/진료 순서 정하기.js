function solution(emergency) {
    var answer = emergency.slice().sort((a,b) => b-a);
    let newArr = []
    
    for (let i = 0; i < answer.length; i++) {
        newArr.push(answer.indexOf(emergency[i]) + 1)
    }
    return newArr;
}