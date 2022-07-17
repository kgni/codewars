// July 17, 2022

/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

//PREP

//P -
//R -
function countRedBeads(n) {
	// if there are less than 2 blue beads, then there will be 0 red beads
	if (n < 2) return 0;

	// else return 2 times n minus 2
	return 2 * n - 2;
}
//E -
