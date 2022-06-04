// June 04, 2022

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//PREP

//P - string, can both be upper and lowercase - only alphabets and numeric digits - string can be empty
//R - number, count of chars that are duplicates, so if you have like 3 i's that will count as 1 duplicate.

function duplicateCount(text) {
	// create duplicates variable to keep track of how many duplicates we have
	let duplicates = 0;

	// create object to have each char as a key, and the number that char appears in our string as a value.
	let obj = {};

	// lower case string
	// turn string into array, and add each char as a key to an object, where each object has a number value (which is the count of how many times the char appears in the string)
	text
		.toLowerCase()
		.split('')
		.forEach((el) => {
			obj[el] ? obj[el]++ : (obj[el] = 1);
		});

	// loop through object, and for each key that has a value that is greater than 1, add 1 to our duplicates variable
	for (let key in obj) {
		if (obj[key] > 1) {
			duplicates++;
		}
	}

	return duplicates;
}

//E -
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
