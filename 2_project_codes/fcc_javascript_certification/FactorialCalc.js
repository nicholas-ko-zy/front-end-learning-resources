let num = 10;

function factorialCalculator(num) {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        result = result * i
    }
    return result
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);