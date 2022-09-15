
// Add function
const add = (x, y) =>{
    return x + y
    }
    
    // Subtract function
    const subtract = (x, y) =>{
        return x - y
    }
    
    // Multiply function
    const multiply = (args) =>{
        const mult = args.reduce((a, b) => {
            return a * b
        },1)
        return mult
    }
    
    // Devide function
    const divide = (x,y) =>{
        return x / y
    }
    
    // Create a new function operate that takes an operator and 2 numbers 
    //and then calls one of the above functions on the numbers.
    const operate =  (x, y, operator) => {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(args);
        case "/":
            return divide(x, y)
    }
    };