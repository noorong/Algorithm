function solution(my_string) {
    var answer = 0;
    let Arr = my_string.split('').map(v => v = Number(v).isNaN ? ' ' :  Number(v)).join("").split("NaN");
    console.log(Arr)
    Arr.map(v => Number(v).isNaN ? answer += 0 : answer += Number(v))
    return answer;
}