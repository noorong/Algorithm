function solution(num, k) {
    let answer = num.toString().split('').map(v=>Number(v)).indexOf(k);
return  answer >= 0 ? answer + 1 : answer ;
}