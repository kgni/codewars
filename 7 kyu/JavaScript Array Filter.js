// June 25, 2022

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

//PREP

//P -
//R -

function getEvenNumbers(numbersArray) {
	// filter the array, return even numbers:

	return numbersArray.filter((num) => num % 2 === 0);
}
//E -
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
