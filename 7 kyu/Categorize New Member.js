// June 08, 2022

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

//PREP

//P - array with nested arrays inside, that consists of pairs of integers, the first element in a pair is the age, the second is the handicap. If a member is at least 55 and have a handicap greater than 7 he is considered "Senior", else "Open"
//R - array of strings where each string are either going to be "Open" or "Senior" depending on the members age and handicap.

function openOrSenior(data) {
	// loop through data array, and then loop through each element, checking if the first element is equal to or above 55, and the 2nd is above 7 (if this is true we will return "Senior" to our new array, else "Open")

	const newArr = [];

	for (let i = 0; i < data.length; i++) {
		newArr.pop();
		for (let j = 0; j < 2; j++) {
			if (data[i][0] >= 55 && data[i][1] > 7) {
				newArr.push('Senior');
			} else {
				newArr.push('Open');
			}
		}
	}
	return newArr.slice(0, -1);
}

//E -

console.log(
	openOrSenior([
		[45, 12],
		[55, 21],
		[19, -2],
		[104, 20],
	])
); // ['Open', 'Senior', 'Open', 'Senior']

console.log(
	openOrSenior([
		[59, 12],
		[55, -1],
		[12, -2],
		[12, 12],
	])
); // ['Senior', 'Open', 'Open', 'Open']

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data) {
	return data.map(([age, handicap]) =>
		age > 54 && handicap > 7 ? 'Senior' : 'Open'
	);
}

// using foreach

function openOrSenior(data) {
	var result = [];
	data.forEach(function (member) {
		if (member[0] >= 55 && member[1] > 7) {
			result.push('Senior');
		} else {
			result.push('Open');
		}
	});
	return result;
}

// using map

function openOrSenior(data) {
	return data.map((member) => {
		return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
	});
}
