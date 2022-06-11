// June 11, 2022

/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//PREP

//P - url that is type string,
//R - return url still as a string but with everything after "#" removed

function removeUrlAnchor(url) {
	// find the index of the #

	// check if # is not present (-1), if that is the case, just return the url
	// use slice() to return a shallow copy that ends where the first # is
	return url.indexOf('#') === -1 ? url : url.slice(0, url.indexOf('#'));
}
//E -

console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // www.codewars.com/katas/?page=1
console.log(removeUrlAnchor('www.codewars.com/katas/')); // www.codewars.com/katas/

// using split and then just taking the first element in the array that split created:
function removeUrlAnchor(url) {
	return url.split('#')[0];
}
