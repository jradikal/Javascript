console.log("Print all numbers between -10 and 19");

var num1 = -10;

while(num1 < 20) {
    console.log(num1);
    num1 ++;
}

console.log("Print all even numbers beteen 10 and 40");

var num2 = 10;

while(num2 < 41) {
    console.log(num2);
    num2 += 2;
}

console.log("Print all odd numbers between 300 and 333");

var num3 = 300;

while (num3 < 333) {
  if (num3 % 2 !== 0) {
    console.log(num3);
  }
  num3 += 1;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var num4 = 5;

while (num4 < 50) {
  if (num4 % 5 ===0 && num4 % 3 === 0) {
    console.log(num4);
  }
  num4 += 1;
}