function solution(s, n) {
    const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const Lower =  'abcdefghijklmnopqrstuvwxyz'.split('')
    let num = 0;
    let New = []
    
    let Str = s.split('');
    Str.map(v => {
        if (v == ' ') New.push(' ')
        else if (Lower.includes(v)) {
            num = Lower.indexOf(v) + n 
            num > 25 ? New.push(Lower[num - 26]) : New.push(Lower[num])
        } else if (Upper.includes(v)) {
            num = Upper.indexOf(v) + n 
            num > 25 ? New.push(Upper[num - 26]) : New.push(Upper[num])
        } 
    } )
    
    return New.join('');
}