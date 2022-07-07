// July 07, 2022

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

//PREP

//P - string (case sensitive), can contain spaces
//R - String (case sensitive), can contain spaces

function getDrinkByProfession(param) {
	// split string into array, and make the first letter of each word uppercase, rest lowercase

	const newStr = param
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');

	// switch statement for checking cases
	switch (newStr) {
		case 'Jabroni':
			return 'Patron Tequila';
		case 'School Counselor':
			return 'Anything with Alcohol';
		case 'Programmer':
			return 'Hipster Craft Beer';
		case 'Bike Gang Member':
			return 'Moonshine';
		case 'Politician':
			return 'Your tax dollars';
		case 'Rapper':
			return 'Cristal';

		default:
			return 'Beer';
	}
}
//E -
console.log(getDrinkByProfession('scHOOl counselor'));

// we could also just lowercase the param, instead of having to format it in the correct way, the return is the only thing that needs to be formatted correctly.
function getDrinkByProfession(param) {
	param = param.toLowerCase();

	switch (param) {
		case 'jabroni':
			return 'Patron Tequila';
		case 'school counselor':
			return 'Anything with Alcohol';
		case 'programmer':
			return 'Hipster Craft Beer';
		case 'bike gang member':
			return 'Moonshine';
		case 'politician':
			return 'Your tax dollars';
		case 'rapper':
			return 'Cristal';
		default:
			return 'Beer';
	}
}
