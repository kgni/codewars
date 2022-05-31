// May 31, 2022

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//PREP

//P - String (can be both lower and uppercase)
//R - Same string (but with all vowels removed)

function disemvowel(str) {
	// Create array of vowels, that we will use to check if the letter in our string is present in that array, we want to remove it from the string.

	const vowels = ['a', 'e', 'i', 'o', 'u'];

	// turn string into array of all chars, filter through array and check if element is present in the vowels array, if not - then return element - if it is, then don't return anything
	// Lastly we will join the array, to turn it back into a string.
	return str
		.split('')
		.filter((el) => !vowels.includes(el.toLowerCase()))
		.join('');
}

//E -

console.log(disemvowel('This website is for losers LOL!'));
