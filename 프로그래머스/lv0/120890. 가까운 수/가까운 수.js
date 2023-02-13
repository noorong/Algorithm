function solution(array, n) {    
    
    var answer = array.sort((a,b) => a - b).map(v=> Math.abs(v - n))
    console.log(answer.indexOf(Math.min(...answer)))
    
    return array[answer.indexOf(Math.min(...answer))];
}