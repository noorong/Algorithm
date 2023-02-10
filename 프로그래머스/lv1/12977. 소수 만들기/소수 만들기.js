function solution(nums) {
    var answer = 0;
    let tmp = 0 ;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for(let j = i+1; j < nums.length - 1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let Arr = [];
                Arr.push(nums[i])
                Arr.push(nums[j])
                Arr.push(nums[k])
                tmp = Arr.reduce((a,b) => a + b, 0);
                // console.log(Arr)
                let count = 0;
                for(var l=1;l<=tmp;l++){
                    if(tmp%l==0) count++;
                }
                if(count==2) answer++;
                
            }
        }
    }
    
    return answer;
}