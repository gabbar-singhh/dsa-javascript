function recursive_range(n) {

    if (n === 0) return 1;

    return n + recursive_range(n-1)
    
}

console.log(recursive_range(3))