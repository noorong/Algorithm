function solution(my_string) {
    let str = my_string.split(" ");
    let sum = Number(str[0]);
    
    console.log(str);
    
    for(let i = 1; i < str.length; i = i + 2) {
        let tmp = Number(str[i+1]);
        if (str[i] == "+") sum += (tmp)
        else sum -= (tmp);
    }
    return sum
}