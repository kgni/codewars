// June 19, 2022

/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

//PREP

//P - p1 - array of integers p2 - integer which is the upper limit
//R - boolean (true if all inters in p1 are below or equal to p2)
function smallEnough(a, limit) {
	return a.every((el) => el <= limit);
}
//E -
