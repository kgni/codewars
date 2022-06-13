// June 13, 2022

/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

//PREP

//P - P1 - boolean, P2 boolean
//R - return boolean, return true if p is true and p2 is false

function setAlarm(employed, vacation) {
	return employed && !vacation;
}

//E -
