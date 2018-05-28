// // Piece of code that does one or more actions
// // DRY - dont repeat yourself

// /*

// function go() {
// 	alert("Hi");
// 	alert("Hey there!");
// }

// go();

// //--------------------------------------------

// function go2(name, age) {
// 	alert(name);
// 	alert(age);
// }

// go2("Jared", 30);

// //--------------------------------------------

// function add(first, second) {
// 	return first + second;
// }

// var sum = add(1, 2);

// alert(sum);

// //or;

// function add(first, second) {
// 	return first + second;
// }

// alert(add(1, 2));

// //--------------------------------------------

// function go(name, age) {
// 	if (age < 20) {
// 		return name + "!";
// 	} else {
// 		return name;
// 	}
// }

// alert(go("Jared", 30));

// //--------------------------------------------

// var myList = ["apples", "oranges", "bananas"];

// myList[3] = "pineapples";

// myList[0] = "watermelon";

// //--------------------------------------------

// function go() {
// 	alert("hi");
// }

// var myList = ["apples", 12, go, ["will", "laura"]];

// myList[2]();

// //--------------------------------------------

// var myList = ["apples", "oranges", "bananas"];

// var currentFruit = myList.shift(); // Will remove the first item from the list and pass it to a new declared variable.

// var currentFruit = myList.pop(); // Will remove the last item from the list and pass it to a new declared variable.

// //--------------------------------------------

// var myList = ["apples", "oranges", "bananas"];

// myList.forEach(function(value, index) {
// 	console.log(value, index);
// }); // This will show the value and index.

// //--------------------------------------------

// //while loop, do loop, for loop

// //while loops -while true keeps running the loop

// var times = 0;

// while (times < 10) {
// 	console.log("tried it", times);
// 	times = times + 1; // or times++ (times-- to remove one number)
// }

// //do while loop
// //Do loops will always run minimum of 1 time, while will check and only run if it is true.

// var times = 0;

// do {
// 	console.log("tried it", times);
// 	times++;
// } while (times < 10);

// //FOR loop:

// //for (setup, comparison, change) {
// //
// //}

// //--------------------------------------------

// for (var i = 0; i < 10; i++) {
// 	console.log("i is", i);
// }

// //--------------------------------------------

// var myList = ["apples", "oranges", "bananas"];

// for (var i = 0; i < myList.length; i++) {
// 	console.log("i is", i);
// }

// var myList = ["apples", "oranges", "bananas"];

// for (var i = 0; i < myList.length; i++) {
// 	console.log(myList[i]);
// }

// var myList = ["apples", "oranges", "bananas"];

// for (var i = 0; i < myList.length; i++) {
// 	alert("you have " + myList[i] + " in your basket");
// }

// */

// // ----------------------------------------------

// // Selectors:

// // Selector methods are:

// // document.getElementsByTagName('div')
// // document.getElementsByClassName('done')
// // document.getElementById('my-id')
// // document.querySelector('#my-id')
// // document.querySelectorAll('.classname')

// // Once you have selected an html element, you can modify it:
// // document.getElementById('my-id').innerHTML = "new html"
// // document.getElementById('my-id').className = "newclass otherclass"