// July 09, 2022

/*

*/

//PREP

//P - integer
//R - sum of triangular numbers

function sumTriangularNumbers(n) {
	// create variable to keep track of sum
	let sum = 0;
	// make a for loop, that loops from 1 to n (included)
	for (let i = 1; i <= n; i++) {
		// after each iteration, we add the triangular number to the sum.
		// a triangular number can be found by saying (i * (i+1)) / 2
		sum += (i * (i + 1)) / 2;
	}
	return sum;
}
//E -

console.log(sumTriangularNumbers(6)); // 56
