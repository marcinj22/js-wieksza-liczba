let num1 = 2;
let num2 = 5;

function higherThan(num1, num2) {

    if (num2 > num1) {
        return num2;
    } else if (num1 > num2) {
        return num1;
    } else {
        return 'są równe';
    }
        
}

console.log(higherThan(num1, num2));