// July 22, 2022

/*
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

//PREP

//P - p1 string, p2 integer (how many exclamation marks should be removed from left to right)
//R - new string, with the amount of n (p2) exclamation marks removed.

function remove(s, n) {
	let str = '';
	// loop through string, check if current element is an exclamation mark, and if n > 0, if n > 0 skip adding the exclamation mark to the new string and subtract one from n. If it is not an exclamation mark, add the char to the string.

	for (let i = 0; i < s.length; i++) {
		// check whenever n is 0, we just want to keep adding the chars in the string to the new string (no more exclamation marks are going to be removed / not added)
		if (n < 1) {
			str += s[i];
		}
		// if n is above 0, and it is an exclamation mark, we subtract one from n and skip that iteration (not adding it)
		else if (s[i] === '!') {
			n--;
			continue;
		}

		// else we just keep adding the chars to the string
		else {
			str += s[i];
		}
	}

	return str;
}
//E -

// done with less checks (using n as the condition taht we check, and using the replace string method)
// here we are basically just going to loop through n times and reassign the string to a new string with 1 more exclamation mark removed

function remove(s, n) {
	for (let i = 0; i < n; i++) s = s.replace('!', '');
	return s;
}
