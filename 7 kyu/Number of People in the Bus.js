// June 09, 2022

/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

//PREP

//P - nested array, where each array inside the array contains 2 elements, the first element is going to be how many passengers got on the bus, the 2nd is going to be how many left.
//R - return an integer of how many people are still on the bus, after the last bus stop.

function number(busStops) {
	// loop through array, add the first element in each array to a counter, subtract the second element in each array from the same counter

	let peopleNum = 0;
	busStops.forEach((people) => (peopleNum += people[0] - people[1]));

	return peopleNum;
}

//E -

console.log(
	number([
		[10, 0],
		[3, 5],
		[5, 8],
	])
); // 5

// using reduce

const number = (busStops) =>
	busStops.reduce((acc, [on, off]) => acc + on - off, 0);
