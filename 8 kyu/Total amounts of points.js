// March 24, 2022

/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
	let total = 0;
	games.forEach((el) => {
		if (el[0] > el[el.length - 1]) total += 3;
		if (el[0] === el[el.length - 1]) total++;
	});
	return total;
}

// With reduce:

const points = (games) =>
	games.reduce((output, current) => {
		return (output +=
			current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
	}, 0);
