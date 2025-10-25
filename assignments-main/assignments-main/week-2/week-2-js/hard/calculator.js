/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor(result){
      this.result= result
    }
    add(number){
      this.result += number
    }
    sub(number){
      this.result -=number
    }
    mul(number){
      this.result *= number
    }
    divide(number){
      if(number === 0){
       throw new Error("Infinity")
      }
        this.result /=number
    }
    clear(){
      this.result = 0
    }
    getResult(){
      return this.result
    }
    calculate(s){
      let exp = ""
      s=s.trim()
      let allowed = "0123456789.()+-*/"
      for (let char of s){
       if (char === " ") continue;
      if (!allowed.includes(char)) {
        throw new Error("Invalid character in expression");
      }
          exp+=char
    }
        this.result= eval(exp)
    }
        
        
      
}
const myCalculator = new Calculator
myCalculator.calculate( `10 +   2 *    (   6 - (4 + 1) / 2) + 7`)
console.log(myCalculator.getResult());

module.exports = Calculator;
