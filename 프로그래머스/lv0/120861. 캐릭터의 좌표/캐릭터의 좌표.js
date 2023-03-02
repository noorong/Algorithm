function solution(keyinput, board) {
    let resultX = 0;
    let resultY = 0;
    
    let hor = keyinput.filter(v => v === "left" || v === "right");
    let ver = keyinput.filter(v => v === "up" || v === "down");
    
    for(let v of hor) {
        v === "right" ? 
            resultX < Math.floor(board[0]/2) && resultX++ : -resultX < Math.floor(board[0]/2) && resultX--;
    }
    
    for(let v of ver) {
        v === "up" ? 
        resultY < Math.floor(board[1]/2) && resultY++ : -resultY < Math.floor(board[1]/2) && resultY--;
    }
    
    
    return [resultX,resultY];
}