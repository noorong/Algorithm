function solution(id_pw, db) {
    var  answer="";
    
    db.map(arr=>{
        if(arr[0]==id_pw[0]&&arr[1]==id_pw[1]) answer= "login"
        else if(arr[0]==id_pw[0] && arr[1] != id_pw[1]) answer= "wrong pw" 
        else if(arr[0]!=id_pw[0] && arr[1] != id_pw[1]) answer= "fail"
    })
    
    return answer;
}