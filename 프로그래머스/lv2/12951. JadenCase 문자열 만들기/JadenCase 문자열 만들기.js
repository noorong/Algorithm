function solution(s) {
    var answer = s.toLowerCase().split(' ');
    let Arr = []
    
    answer.map(v => {
        if(v[0] == undefined) Arr.push('')
        else if(v[0] != undefined) Arr.push(v[0].toUpperCase() + v.slice(1))
        
    })
    
    return Arr.join(' ');
}