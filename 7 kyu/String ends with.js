// June 09, 2022

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//PREP

//P - p1 string, p2 string
//R - return boolean if p1 ends with p2

function solution(str, ending) {
	return str.endsWith(ending);
}
