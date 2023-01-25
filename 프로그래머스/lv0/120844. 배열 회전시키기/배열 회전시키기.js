function solution(numbers, direction) {
    var answer = [];
    
    if(direction == "right") {
        answer.push(numbers[numbers.length - 1])
        
        for(let i = 0; i < numbers.length - 1; i ++) {
            answer.push(numbers[i])
        }
    } else {
        answer.unshift(numbers[0])
        
        for(let i = numbers.length-1; i > 0; i--) 
            answer.unshift(numbers[i])
    }
    
    return answer;
}