// July 02, 2022

/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

//PREP

//P - number
//R - a function that always adds n to any number

function add(n) {
	return function (num) {
		return num + n;
	};
}
//E -
