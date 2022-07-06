// July 06, 2022

/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

//PREP

//P - integers
//R - array

function getSize(width, height, depth) {
	// formula for calculating the total surface area of a box: SA = 2lw + 2lh + 2wh
	const area = 2 * width * height + 2 * width * depth + 2 * height * depth;
	const volume = width * height * depth;
	return [area, volume];
}
//E -
