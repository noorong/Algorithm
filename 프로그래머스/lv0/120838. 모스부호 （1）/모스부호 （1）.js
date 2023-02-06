function solution(letter) {
    let input = letter.split(' ');
    var db = []
    let answer = ''
    
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    db = (Object.entries(morse))
    input.map(arr => {
        db.map(i => {
           if(arr === i[0]) answer += i[1]
        })
    })
    
    return answer;
}