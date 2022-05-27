// May 27, 2022

/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

//PREP

//P - Array of positive integers, cannot be empty
//R - the smallest unused ID.

function nextId(ids) {
	let res;

	// sort array of ids
	ids.sort((a, b) => a - b);

	// Remove duplicates
	ids = [...new Set(ids)];

	// Loop over array and check if the next element is the current element incremented by 1, if not, then return the current value in the array + 1
	for (let i = 0; i < ids.length; i++) {
		// Check if the first element is not equal to 0, if that is the case, then we know that 0 has not been used
		if (ids[0] !== 0) {
			return 0;
		} else if (ids[i] + 1 !== ids[i + 1]) {
			res = ids[i] + 1;
			break;
		}
	}

	return res;
}
//E -

console.log(nextId([1, 2, 3, 5])); // 4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

// Using a while loop and includes:

function nextId(ids) {
	let x = 0;
	while (ids.includes(x)) x++;
	return x;
}

// using includes and for loop:

function nextId(ids) {
	const used = [...new Set(ids)];
	for (let i = 0; i <= used.length; i++) {
		if (!used.includes(i)) return i;
	}
}
