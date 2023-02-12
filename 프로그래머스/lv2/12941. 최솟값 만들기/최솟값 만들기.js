function solution(A,B){
    var answer = [];
    A.sort((a,b) => a - b)
    B.sort((a,b) => a - b)
    let sum = 0;
    
    
    while(A.length < B.length ? A.length : B.length) {
        
    sum += A[0] * B[B.length - 1]
        A.shift();
        B.pop();
    }
    
    
    return sum;
}