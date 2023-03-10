function solution(numlist, n) {
    let tmp = '';
    for(let i = 0; i < numlist.length; i++){
        for(let j = i+1; j < numlist.length; j++){
            if(Math.abs(numlist[i] - n) > Math.abs(numlist[j] - n)) {
                 tmp = numlist[i]
                 numlist[i] = numlist[j]
                 numlist[j] = tmp;
            }
            else if(Math.abs(numlist[i] - n) === Math.abs(numlist[j] - n)) {
                 if (numlist[i] < numlist[j]){
                 tmp = numlist[i]
                 numlist[i] = numlist[j]
                 numlist[j] = tmp}
            }
        }
    }    
    
    return numlist;
}