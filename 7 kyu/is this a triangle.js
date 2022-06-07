// June 07, 2022

/*

*/

//PREP

//P -
//R -

function isTriangle(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0) return false;

	if (a + b > c && a + c > b && c + b > a) {
		return true;
	} else {
		return false;
	}
}

//E -
