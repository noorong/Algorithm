function solution(dots) {
    var answer = 0;
    dots.sort()
    console.log(dots)
    let width = Math.abs(dots[3][0] - dots[1][0])
    let height = Math.abs(dots[1][1] - dots[0][1])
    console.log(width, height)
    return answer = width * height;
}