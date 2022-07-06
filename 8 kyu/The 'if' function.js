// July 06, 2022

/*
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.
*/

//PREP

//P - p1 - bool, p2 - func, p3 - func
//R - if p1 is true call p2 else call p3

function _if(bool, func1, func2) {
	return bool ? func1() : func2();
}
