const stringLength = (string) => {
    if(string.length < 1 || string.length >= 10){
        throw new Error('MIN_LENGTH_ERROR: The length  of the string should be greater than 1.')
    };

    return string.length;
}


const reverseString = (string) => {
    let reversedString = string.toLowerCase().split('').reverse().join('');

    return reversedString;
}

class Calculator {
    constructor(firstNumber, secondNumber){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    addition() {
        return this.firstNumber + this.secondNumber;
    }

    subtraction() {
        return this.firstNumber - this.secondNumber;
    }

    multiplication() {
        return this.firstNumber * this.secondNumber;
    }

    division() {
        return this.firstNumber / this.secondNumber;
    }
}

const capitalize = (string) => {
    if(!typeof string) {
      throw new Error (`string should be a 'Word'`)
    }
    else {
        let firstChar = string.slice(0, 1).toUpperCase();
        let restOfChar = string.slice(1).toLowerCase(); 

        return firstChar + restOfChar;
    }
}
module.exports = { stringLength, reverseString, Calculator, capitalize };