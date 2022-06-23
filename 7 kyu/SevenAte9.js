// June 23, 2022

/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

//PREP

//P - string
//R - string with all lone '9's that are in between 7's removed
function sevenAte9(str) {
	// split string into array.
	// filter array, checking if the current element is a 9, the previous element is a 7, and the next element is a 7, then remove that 9, else just return the current element.
	return str
		.split('')
		.filter((el, index) => {
			if (el === '9' && str[index - 1] === '7' && str[index + 1] === '7') {
				return;
			} else {
				return el;
			}
		})
		.join('');
}
//E -

console.log(sevenAte9('797')); // 77
console.log(sevenAte9('7979797')); // 7777
console.log(sevenAte9('165561786121789797')); // 16556178612178977
