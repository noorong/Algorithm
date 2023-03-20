function solution(strings, n) {
    var answer = [];
    
    for(let x of strings) answer.push([x[n], x]);
    answer.sort();
    strings = []
    for(let x of answer) strings.push(x[1])
    
    return strings;
}

//strings 의 요소들을 [n번째 문자열 , 요소] 이런 형태로 answer에 담기
//배열로 담으면 