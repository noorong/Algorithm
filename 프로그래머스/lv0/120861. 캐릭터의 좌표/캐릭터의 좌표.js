function solution(keyinput, board) {
    var now = [0,0];
    board = [(board[0]-1)/2, (board[1]-1)/2]
    for(let i=0;i<keyinput.length;i++){
        if(keyinput[i] === "left" && (now[0]) > -board[0]) 
            now[0] -= 1
        if(keyinput[i] === "right" && now[0] < board[0])
            now[0] += 1
        if(keyinput[i] === "up" && now[1] < board[1])
            now[1] += 1
        if(keyinput[i] === "down" && now[1] > -board[1])
            now[1] -= 1
        console.log(now)
    }
    
    return now;
}