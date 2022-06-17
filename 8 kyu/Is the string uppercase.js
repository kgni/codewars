// June 17, 2022

/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

//PREP

//P - string, case sensitive
//R - boolean, if all chars casing is uppercase, return true else false

String.prototype.isUpperCase = function () {
	// because we are creating a method on the String objects prototype, we need to use the this keyword (which will be the calling object (basically refering to the string it is called on))
	// we split the string into an array, use the .every method and check if each char is uppercase
	return this.split('').every((char) => char === char.toUpperCase());
};
//E -

// could also just be done like this:

String.prototype.isUpperCase = function () {
	return this === this.toUpperCase();
};
