// July 12, 2022

/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
*/

//PREP

//P - p1, starting array of 3 elements, p2 the length of the array at the end
//R - a tribonacci sequence, where we are taking the sum of the first 3 elements, and the is going to be the 4th element, keep repeating until we have an array with the length of n.

function tribonacci(signature, n) {
	// if n is less than or equal to 3, then we just return the signature with the length of n (no addition)
	if (n <= 3) {
		return signature.slice(0, n);
	}

	// signature is going to be length of 3, subtract the length of the signature, from n, and create an array filled with 0's with the remaining length
	const restArray = new Array(n - signature.length).fill(0);
	const newArray = signature.concat(restArray);

	// create loop, looping through the array, summing the first 3 elements and inserting the sum into the 4th element.
	// then taking the next 3 elements (so from index 1) and do the same until we have filled the array

	newArray.forEach((el, index, arr) => {
		newArray[index + 3] =
			newArray[index] + newArray[index + 1] + newArray[index + 2];
	});

	// return the newArray with the length of n
	return newArray.slice(0, n);
}
//E -
console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]

// simply done with a for loop

function tribonacci(signature, n) {
	// iterate n times (minus first 3)
	for (var i = 0; i < n - 3; i++) {
		signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
	}
	return signature.slice(0, n); //return trib - length of n (if the length is less than 3)
}
