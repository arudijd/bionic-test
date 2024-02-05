function generatePattern(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        output += '**';
        for (let k = i + 3; k <= n+3; k++) {
            output += k;
        }
        console.log(output);
    }
}