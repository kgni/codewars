// May 18, 2022

/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/

//PREP

//P - Array of objects of developers. We have a property "language" that contains a string with the language the developer uses and "continent" that contains a String with the continent that the developer is from. The format of the language will be "JavaScript" continent string for Europe, will always be "Europe"
//R - A number (how many developers there JavaScript developers and are from Europe), if no developer have this combination, return 0

function countDevelopers(list) {
	// Loop through the array of objects, filter only the objects that have continent set to "Europe", take the length of the new array we returned = how many developers are from europe.

	return list.filter(
		(developer) =>
			developer.continent === 'Europe' && developer.language === 'JavaScript'
	).length;
}

//E -

const list1 = [
	{
		firstName: 'Noah',
		lastName: 'M.',
		country: 'Switzerland',
		continent: 'Europe',
		age: 19,
		language: 'JavaScript',
	},
	{
		firstName: 'Maia',
		lastName: 'S.',
		country: 'Tahiti',
		continent: 'Oceania',
		age: 28,
		language: 'JavaScript',
	},
	{
		firstName: 'Shufen',
		lastName: 'L.',
		country: 'Taiwan',
		continent: 'Asia',
		age: 35,
		language: 'HTML',
	},
	{
		firstName: 'Sumayah',
		lastName: 'M.',
		country: 'Tajikistan',
		continent: 'Asia',
		age: 30,
		language: 'CSS',
	},
];

console.log(countDevelopers(list1));
