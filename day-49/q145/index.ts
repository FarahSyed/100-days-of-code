// A Higher-order function that receives another function as a parameter and invokes it with specific arguments
function foo (callback: (num1: number, num2: number) => number): number {
    
    // Return the result of invoking the callback function
    return callback(2, 3);
}

// A function that multiplies two numbers
function multiply (num1: number, num2: number): number {
    
    // Multiply both numbers
    const result = num1 * num2;
    
    // Return the result 
    return result;
}

// Invoke the foo function with the multiply function as a callback, and log the result
console.log(foo(multiply));