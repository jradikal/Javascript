console.log(
  "function isEven, 1 arguement returns true if even and false if not."
);

// function isEven(number) {
//   if (number % 2 === 0) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     return false;
//   }
// }

function isEven(number) {
    return number % 2 === 0;
}


console.log("function factorial() 1 arguement returns factorial (!)");

function factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1;

console.log("function kebabToSnake() 1 kebab-cased string and returns snake_cased version");

function kebabToSnake(str) {
    //replace all "-" to "_"
    var newStr = str.replace(/-/g, "_");
    //return str
    return newStr;
}

