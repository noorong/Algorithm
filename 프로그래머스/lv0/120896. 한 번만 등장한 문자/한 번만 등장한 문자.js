function solution(s) {
    var answer = s.split('').filter(v => s.indexOf(v) === s.lastIndexOf(v)).sort().join('')
    return answer;
}