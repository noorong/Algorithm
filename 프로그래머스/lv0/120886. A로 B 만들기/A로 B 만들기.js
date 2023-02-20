function solution(before, after) {
    let beforeArr = before.split('')
    let afterArr = after.split('')
    
    beforeArr.map(v => {
        afterArr.indexOf(v) + 1 && afterArr.splice(afterArr.indexOf(v),1) 
    })
    return afterArr.length ? 0 : 1;
}