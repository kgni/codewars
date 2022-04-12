// April 12, 2022

/*
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/

function howManyGifts(maxBudget, gifts) {
	// Counter for how many gifts we can buy for the budget.
	let count = 0;

	// Sorting gifts from lowest to highest price. After we can reduce, where our accumulator starts at the maxBudget.
	gifts
		.sort((a, b) => a - b)
		.reduce((acc, c) => {
			// We check if the accumulator minus the current value is greater than or equal to 0 (if yes we can buy that gift and add 1 to the counter)
			if (acc - c >= 0) {
				count++;

				// Return keyword so that we are actually updating the accumulator after each iteration
				return acc - c;
			}
		}, maxBudget);
	return count;
}
