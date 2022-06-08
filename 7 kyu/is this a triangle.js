// June 07, 2022

/*

*/

//PREP

//P -
//R -

function isTriangle(a, b, c) {

  // if any of the lengths are 0 or below, return false
	if (a <= 0 || b <= 0 || c <= 0) return false;

  // check to see if it can be a triangle, in order for it to be a triangle, every side added together in pairs of 2, should be longer than the 3rd side alone.
	if (a + b > c && a + c > b && c + b > a) {
		return true;
	} else {
		return false;
	}
}

//E -
