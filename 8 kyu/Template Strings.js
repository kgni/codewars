// May 13, 2022

/*
Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
*/

//PREP

//P - 2 Strings no validation
//R - 1 String concatenated with the word "are" using template literals

const TempleStrings = function (obj, feature) {
	return `${obj} are ${feature}`;
};

//E

console.log(TempleStrings('Dogs', 'Cute'));
