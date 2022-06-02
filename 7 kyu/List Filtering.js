// June 02, 2022

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//PREP

//P - array of non-negative integers and strings
//R - array only of the integers

function filter_list(l) {
	// filter array, checking if the element is a number (typeof), if it is, return that number to a new array.
	return l.filter((el) => typeof el === 'number');
}

//E -
console.log(filter_list([1, 'a', 'b', 0, 15]));
