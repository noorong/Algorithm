function solution(s) {
    var answer = '';
    
    let Arr = s.split(' ').map(v => Number(v))
    console.log(Math.max(...Arr))
    
    return answer = Math.min(...Arr)+ ' ' + Math.max(...Arr);
}