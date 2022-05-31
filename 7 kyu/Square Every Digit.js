// May 31, 2022

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//PREP

//P - integer, can be 0
//R - integer, can be  0

function squareDigits(num) {
	// loop through each number, square that number, add it to a string where we will concatenate every squared number together. At last we will parse the string to a number again.

	// First we have to turn the number into a string, so we can loop over it. A number is not an iterable or array like object, so in order for us to loop through it, we have to turn it into a string. Also numbers doesn't have a length, so if we want to have our condition using the length of our number, we also need to turn that into a string.

	// create empty string (this way we can use type coersion to our advantage, because if you add a number to a string, the number gets concatenated into a string)
	let str = '';

	for (let i = 0; i < num.toString().length; i++) {
		// adding each number squared to our string array, the reason we use toString here on every single number, is so we can use square brackets to access the correct number (you cannot use square brackets on numbers because they are not iterable objects)
		str += num.toString()[i] ** 2;
	}

	// Parse back from string to a number
	return Number(str);
}
//E -

console.log(squareDigits(3212));
console.log(squareDigits(2112));

// using array methods. First turning the number into a string using type coersion, then splitting that string into an array, and then mapping over the each multiplying the element by itself. At last we join everything back together and parse it as a number.

function squareDigits(num) {
	return Number(
		('' + num)
			.split('')
			.map(function (val) {
				return val * val;
			})
			.join('')
	);
}
