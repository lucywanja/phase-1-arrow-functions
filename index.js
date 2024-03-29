 
// a function expression called divide
// divide divides 2000 by 100

 const divide = function (a, b) {
    return a/b
 }

// an arrow function called square ,takes one parameter and multiplies it times itself
const square = num1 => num1 * num1;
console.log (square(2));

// an arrow func called add ,takes two parameters and adds them together
const add = (parameter1, parameter2) =>{
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
}

add(3,4);

 