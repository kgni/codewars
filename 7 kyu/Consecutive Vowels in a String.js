// July 05, 2022

/*
Consecutive Vowels
You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!
*/

//PREP

//P - string (lowercase)
//R - integer with the length of the consecutive vowels found.

function getTheVowels(word) {
	const vowels = 'aeiou';

	return word
		.split('')
		.reduce((acc, c) => acc + (c === vowels[acc % vowels.length]), 0);
}
//E -

console.log(getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie')); // 7
console.log(getTheVowels('eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou')); // 0
console.log(
	getTheVowels(
		'desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua'
	)
); // 16
console.log(
	getTheVowels(
		'sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja'
	)
); // 16
console.log(
	getTheVowels(
		'jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua'
	)
); // 16

// done in a bit more readable way:

function getTheVowels(word) {
	let vowelSequence = 'aeiou'; // correct sequence of vowels
	let currentVowelIndex = 0; // index of vowel in the sequence currently being checked
	let consecutiveCount = 0; // how many consecutive vowels are in the word

	//  check every letter of the word against current vowel
	for (letter of word) {
		if (letter == vowelSequence[currentVowelIndex]) {
			consecutiveCount++;

			// the mod here, ensures that we will keep looping through the vowels sequence. Because when we reach 5, then we mod by 5%, meaning that we set the currentVowelIndex (vowel being checked) to 0, and we continue the cycle for finding consecutive vowels. The currentVowelIndex will only ever be 0-4
			currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
		}
	}

	return consecutiveCount;
}
