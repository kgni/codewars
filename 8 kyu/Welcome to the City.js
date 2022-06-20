// June 20, 2022

/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

//PREP

//P - p1 - array of names (strings), will at least contain 1 name, p2 - city (string), p3 - state (string)
//R - string, greeting the person
function sayHello(name, city, state) {
	// join array with spaces between the elements:

	// string template literal:
	return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}
//E -
