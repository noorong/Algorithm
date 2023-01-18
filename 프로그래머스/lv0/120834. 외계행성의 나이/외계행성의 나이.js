function solution(age) {
    var answer = String(age).split('').map(v => Number(v));
    return answer.map(v => String.fromCharCode(v + 97)).join('');
}