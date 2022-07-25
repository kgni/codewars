// July 25, 2022

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

//PREP

function unluckyDays(year) {
	// create count variable to keep track
	let count = 0;
	// create for loop, looping through the 12 months
	for (let month = 0; month < 12; month++) {
		// set the day to be the 13's in a specific month
		let day = new Date(year, month, 13);
		// check if the 13th's is a friday, if it is add 1 to count
		if (day.getDay() == 5) {
			count++;
		}
	}
	return count;
}
