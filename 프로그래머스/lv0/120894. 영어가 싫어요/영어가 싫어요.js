function solution(numbers) {
    var answer = "";
    let arr = numbers.split("")
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            answer += 1;
            i += 2;
        }
        else if(arr[i] === 't') {
            if(arr[i+1] === "w") {
                answer += 2;
                i += 2;
            } else {
                answer += 3;
                i += 4;
            }
        }
        else if(arr[i] === 'f') {
            if(arr[i+1] === "o") {
                answer += 4;
            } else {
                answer += 5;
            }
            i += 3;
        }
        else if(arr[i] === 's') {
            if(arr[i+1] === "i") {
                answer += 6;
                i += 2;
            } else {
                answer += 7;
                i += 4;
            }
        }
        else if(arr[i] === 'e') {
                answer += 8;
                i += 4;
        }
        else if(arr[i] === 'n') {
                answer += 9;
                i += 3;
        }
        else {
                answer += 0;
                i += 3;
        }
    }
    return Number(answer);
}