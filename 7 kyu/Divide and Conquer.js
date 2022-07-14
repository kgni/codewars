// July 14, 2022

/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

//PREP

//P - array mixed with integers and integers as strings
//R - integer (the total sum of the integers, subtracted by the total sum of the strings)

function divCon(x) {
	// create counter for integers and strings
	let integerTotal = 0;
	let stringTotal = 0;

	// loop over array, check if the current element is a number, if it is add to integerTotal, if not add to stringTotal

	x.forEach((el) => {
		typeof el === 'number' ? (integerTotal += el) : (stringTotal += Number(el));
	});

	return integerTotal - stringTotal;
}
//E -
console.log(divCon([9, 3, '7', '3'])); // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13

// done with reduce:

function divCon(x) {
	return x.reduce(
		(acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)),
		0
	);
}
