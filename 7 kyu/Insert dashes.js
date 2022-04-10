// April 10, 2022

/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
	let string = num.toString();
	return string
		.split('')
		.map((el, index) => {
			if (string[index] % 2 === 1 && string[index + 1] % 2 === 1) {
				return string[index] + '-';
			} else {
				return el;
			}
		})
		.join('');
}
