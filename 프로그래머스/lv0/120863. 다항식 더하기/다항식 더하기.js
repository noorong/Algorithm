function solution(polynomial) {
    let tmp = 0;
    let tmp2 = 0;
    var answer = polynomial.split(' ')
    
    answer.map(v => {
        if(Number(v) > 0) tmp += Number(v);
        else if (v.includes('x')) {
            v === 'x' ? tmp2++ :
            tmp2 += parseInt(v.replace('x','.0'))
            console.log(tmp2)
        }
    })
    let result = ''
    if (tmp2 === 1) {
        result += "x"
        if (tmp !== 0) result += ' + ' + tmp
    }
    else if(tmp2 !== 0) {
        result += tmp2 + "x";
        if (tmp !== 0) result += ' + ' + tmp
    }
    else if (tmp2 === 0 && tmp !== 0) result += tmp;
    
    
    return result;
}