function fatorial(n) {
    let res = 1

    for(n;n>1;n--) {
        res *= n
    }

    return res
}

console.log(fatorial(5))

// 5! = 5x4x3x2x1