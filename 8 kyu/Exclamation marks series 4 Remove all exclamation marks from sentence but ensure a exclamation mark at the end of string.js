// April 27, 2022

/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/
function remove(string) {
	return (
		string
			.split('')
			.filter((el, index) => {
				if (el !== '!') {
					return el;
				}
			})
			.join('') + '!'
	);
}

// COULD ALSO BE DONE BY SPLITTING AND THEN JOINING

const remove = (string) => string.split('!').join('') + '!';
