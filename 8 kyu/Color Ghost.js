// July 08, 2022

/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

//PREP

//P -
//R -

// factory function
const GhostFactory = function () {
	const colors = ['white', 'yellow', 'purple', 'red'];
	return {
		color: colors[Math.floor(Math.random() * 4)],
	};
};
//E -

// done with a class:

class Ghost {
	constructor() {
		this.colors = ['white', 'yellow', 'purple', 'red'];
	}
	get color() {
		return this.colors[Math.floor(Math.random() * this.colors.length)];
	}
}

const testGhost = new Ghost();
console.log(testGhost.color);
