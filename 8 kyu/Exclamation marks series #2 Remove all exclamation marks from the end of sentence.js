// April 24, 2022

/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(string) {
	while (string && string.slice(-1) == '!') {
		string = string.slice(0, -1);
	}
	return string;
}

function remove(string) {
	while (string[string.length - 1] === '!') {
		string = string.substring(0, string.length - 1);
	}
	return string;
}
