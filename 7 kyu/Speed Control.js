// June 18, 2022

/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
with the above data your function gps(s, x)should return 74

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

(3600 * delta_distance) / s.
*/

//PREP

//P - p1 array of distances / p2 seconds
//R - an integer of the maximum average speed per hour obtained on the sections of p1

function gps(s, x) {
	if (x.length <= 1) {
		return 0;
	}
	// create new array where the sections will be pushed into:
	const sections = [];

	// loop through array and get the difference between each element.
	x.forEach((el, index) => {
		// check if the next element in the iteration exists, if not we are at the last element.
		if (x[index + 1]) {
			// push the difference between the current element and the next element into sections.
			sections.push(Math.abs(el - x[index + 1]));
		}
	});
	// map over sections to get the average speed for each section:
	let avgSpeed = sections.map((section) => {
		return (3600 * section) / s;
	});

	// Spread out array and into Math.max() method to get the highest avg speed (this should be floored)

	return Math.floor(Math.max(...avgSpeed));
}

//E -

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
