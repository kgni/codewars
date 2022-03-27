// March 27, 2022

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x) {
	return Array.from(x, (x) => {
		Number(x);
		if (x < 5) {
			return (x = 0);
		} else {
			return (x = 1);
		}
	}).join('');
}
