// May 13, 2022

/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/

// PREP

// P - integer (2 arguments, qty & price)
// R - integer (total cost)

function mango(quantity, price) {
	// for every 3rd mango you get 1 for free
	// First we get the full price
	const fullPrice = quantity * price;

	// we can divide the quantity by 3, and do a math.floor to figure out how many mangos we get for free.
	const freeMangos = Math.floor(quantity / 3);
	// When we have the amount of mangos we get for free, we can take that number multiply it by the price to figure out how much we are saving.

	const discount = freeMangos * price;

	// Then we simply subtract the total amount with the amount saved

	return fullPrice - discount;
}

// E

console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30

// codewars way of doing it:

function mango(quantity, price) {
	return price * (quantity - Math.floor(quantity / 3));
}
