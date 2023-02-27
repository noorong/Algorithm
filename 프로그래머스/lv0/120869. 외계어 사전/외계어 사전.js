function solution(spell, dic) {
    var answer = dic.find(v => spell.every(item => v.includes(item)));
    return answer != undefined ? 1 : 2 ;
}