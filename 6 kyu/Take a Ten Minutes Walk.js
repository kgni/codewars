// June 25, 2022

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

//PREP

//P - array of strings, where each element is 1 letter (either 'n', 'e', 'w' or 's') cannot be empty
//R - boolean, true if then length of array is 10, false otherwise

function isValidWalk(walk) {
	// set a starting point, initially it is 0
	let startingPoint = 0;

	// check if array length is 10, if yes, then we will start our loop

	if (walk.length === 10) {
		// loop through array,
		// We need to be able to differentiate between going up and down and left and right.
		// If element is 'n' or 's' we will increment or decrement startingPoint by 1.
		// if element is 'e' or 'w',we will increment or decrement startingPoint by 2.
		walk.forEach((el) => {
			switch (el) {
				case 'n':
					startingPoint++;
					break;
				case 's':
					startingPoint--;
					break;
				case 'e':
					startingPoint += 2;
					break;
				case 'w':
					startingPoint -= 2;
					break;
			}
		});
		// after looping, check if startingPoint is equal to 0, if it is, then we know that our walk was 10 minutes exactly, and that we ended up at our startingPoint
		return startingPoint === 0;
	} else {
		// else statement created, because if the walk length is not 10, we will always return false
		return false;
	}
}

// done with a closure, where you are counting the different elements and comparing them ('n' and 's' is on the y-axis, 'w' and 'e' is the x-axis)

function isValidWalk(walk) {
	function count(val) {
		return walk.filter(function (a) {
			return a == val;
		}).length;
	}
	return (
		walk.length == 10 && count('n') == count('s') && count('w') == count('e')
	);
}
