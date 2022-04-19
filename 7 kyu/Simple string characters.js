// April 19, 2022

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!


*/
function solve(s) {
	let newArr = Array(4).fill(0);
	let specialChars = new RegExp(/[0-9 `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
	let numbers = new RegExp(/[0-9]/);

	s.split('').forEach((el) => {
		if (el === el.toUpperCase() && !specialChars.test(el)) {
			newArr[0]++;
		} else if (el === el.toLowerCase() && !specialChars.test(el)) {
			newArr[1]++;
		} else if (numbers.test(el)) {
			newArr[2]++;
		} else if (specialChars.test(el)) {
			newArr[3]++;
		}
	});
	return newArr;
}
