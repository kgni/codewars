// June 24, 2022

/*
Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

Show some love ;) Rank and Upvote!
*/

//PREP

//P - p1 - integer, p2 - integer, p3 - String consisting of 2 words (first word is either Downstream or Upstream, 2nd word is a number)
//R - A number, if integer return the integer without decimal points, if the number is floated, return the float rounded to 2 fixed positions.

function time(distance, boatSpeed, stream) {
	// take distance and divide it by (boatspeed + or - stream, depending on if it is upstream or downstream

	// split stream into 2 words (because if the number in the stream is double digits, then we cannot just use the length-1 of the stream string)

	const streamArr = stream.split(' ');

	// Find out the value for the stream
	const streamValue =
		// Check if first word is 'Downstream', if yes, then return the a number, if not return a negative number
		streamArr[0] === 'Downstream'
			? Number(streamArr[1])
			: -Number(streamArr[1]);

	// Calculate the time
	const time = distance / (boatSpeed + streamValue);

	// check if time is an integer, if not then fix the decimal to 2 positions, else just return the time as an integer.

	return time % 1 !== 0 ? Number(time.toFixed(2)) : time;
}

//E -

console.log(time(24, 10, 'Downstream 2')); // 2
console.log(time(24, 14, 'Upstream 2')); // 2
console.log(time(54, 28, 'Downstream 3')); // 1.74
