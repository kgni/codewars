// April 17, 2022

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
let countSheep = function (num) {
	if (num === 0) {
		return '';
	}

	let sheepString = '';
	for (let i = 1; i <= num; i++) {
		sheepString += `${i} sheep...`;
	}
	return sheepString;
};

// Can also be done by creating an array with as many elements as the number we input:

const countSheep2 = (n) =>
	[...Array(n)].map((el, index) => `${index + 1} sheep...`).join('');
