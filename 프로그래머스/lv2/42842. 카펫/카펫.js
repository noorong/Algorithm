function solution(brown, yellow) {
    let arr = []
    if(Number.isInteger(Math.sqrt(yellow))) return [Math.sqrt(yellow)+2,Math.sqrt(yellow)+2]
    else {
    for (let i = 1; i <= yellow; i++) yellow % i === 0 && arr.push(i);
    let tmp = [arr[arr.length/2]+2 , arr[arr.length/2 - 1]+2];
        
    if (tmp[0] * tmp[1] - yellow == brown) return tmp;
    
    for (let j = 1; j <= arr.length/2; j++) {
        tmp = [arr[arr.length/2 + j]+2 , arr[arr.length/2 - 1 - j]+2]
        if (tmp[0] * tmp[1] - yellow == brown) return tmp
    }
        
    }
}