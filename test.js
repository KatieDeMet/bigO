const squareEveryDigit = num => Number(('' + num).split('').map(val => val * val).join(''))

console.log(squareEveryDigit(946))