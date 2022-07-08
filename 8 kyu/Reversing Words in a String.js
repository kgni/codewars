// July 08, 2022

/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/

//PREP

//P - string (with spaces between each word)
//R - string (with all of the words in reversed order)

function reverse(string) {
	// split string into words, reverse the order of each word, join together again

	return string.split(' ').reverse().join(' ');
}
//E -
console.log(reverse('I am an expert at this')); // this at expert an am I
