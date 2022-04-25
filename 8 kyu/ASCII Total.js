// April 25, 2022

/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/
function uniTotal(string) {
	return string
		.split('')
		.reduce((acc, c, index) => acc + string.charCodeAt(index), 0);
}
