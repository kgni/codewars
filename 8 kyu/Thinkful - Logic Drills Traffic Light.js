// April 28, 2022

/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.
*/

function updateLight(current) {
	let lightState = current;

	switch (lightState) {
		case 'green':
			lightState = 'yellow';
			break;
		case 'yellow':
			lightState = 'red';
			break;
		case 'red':
			lightState = 'green';
			break;
	}

	return lightState;
}

// Done with an object:
const updateLight = (current) =>
	({
		green: 'yellow',
		yellow: 'red',
		red: 'green',
	}[current]);

// Done with a ternary operator:
function updateLight(current) {
	return current === 'yellow'
		? 'red'
		: current === 'green'
		? 'yellow'
		: 'green';
}
