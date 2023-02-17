function solution(my_string, num1, num2) {
    let Arr = my_string.split('')
    var answer = Arr[num1];
    Arr[num1] = Arr[num2]
    Arr[num2] = answer
    answer = Arr.join('')
    
    return answer;
}