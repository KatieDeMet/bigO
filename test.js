function squareEveryDigit(num) {
    return Number(('' + num).split('').map(val => val * val).join(''));
}

squareEveryDigit(946)