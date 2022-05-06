// May 06, 2022

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function removeExclamationMarks(s) {
	return s
		.split('')
		.filter((el) => el !== '!')
		.join('');
}

function removeExclamationMarks(s) {
	return s.split('!').join('');
}
