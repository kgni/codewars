// May 19, 2022

/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

//PREP

//P - Array of strings, elements are either X or O
//R - The first index of an empty room, if no empty rooms return 'None available!'

function meeting(arr) {
	// Loop through array, and find first index of empty room. If none empty return "None available"

	return arr.indexOf('O') === -1 ? 'None available!' : arr.indexOf('O');
}
//E -

console.log(meeting(['X', 'O', 'X']));
console.log(meeting(['X', 'X', 'X']));

// Extra challenge: Return an array of the indexes of all empty rooms available.

function roomsEmpty(arr) {
	let emptyRooms = [];
	arr.forEach((el, index) => {
		if (el === 'O') {
			emptyRooms.push(index);
		}
	});
	return emptyRooms;
}

console.log(roomsEmpty(['X', 'O', 'X', 'O', 'O', 'O', 'X', 'O']));
