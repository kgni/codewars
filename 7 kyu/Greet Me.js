// July 02, 2022

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//PREP

//P - String, case sensitive
//R - A greeting in the following format - "Hello, Name!" (first letter upper cased, rest lower cased)
const greet = function (name) {
	// format the name correctly, first letter should be uppercase, rest should be lowercase (use slice here to get the rest)
	name = name[0].toUpperCase() + name.slice(1).toLowerCase();

	return `Hello ${name}!`;
};
//E -
