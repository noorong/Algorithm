function solution(array) {
    var answer = array.join('').split('').filter(v=> v == 7);
    return answer.length;
}