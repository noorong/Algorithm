function solution(n) {
    var answer = 0;
    
    if (n == 1) answer = 1;
    else if(n >= 2 && n < 6) answer = 2;
    else if (n >= 6 && n < 24) answer = 3;
    else if (n >= 24 && n < 120) answer = 4;
    else if (n >= 120 && n < 720) answer = 5;
    else if (n >= 720 && n < 5040) answer = 6;
    else if (n >= 5040 && n < 40320) answer = 7;
    else if (n >= 40320 && n < 362880) answer = 8;
    else n >= 3628800? answer = 10 : answer = 9;
    
    return answer;
}
// 자릿수 ? 노노 
// 1
// 2
// 6
// 24
// 120
// 720
// 5040
// 40320
// 362880
// 3628800