// June 23, 2022

/*
When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.
You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination)

*/

//PREP

//P - Number
//R - string containing x's, c's or o's. Because the rating is represented visually from 1-5, but the actual rating goes from 1-10, we start out by dividing the rating by 2.
// for every whole number, return o, for every 0.5 (we round here), return c, else return x

function moonRating(rating) {
	// divide the rating by 2, because the input can be from 1-10, but we only want to check for rating between 1-5
	rating /= 2;

	// round to nearest 0.5
	rating = (Math.round(rating * 2) / 2).toFixed(1);

	// switch statement for all possible cases, turn rating into number
	switch (Number(rating)) {
		case 0.0:
			return 'xxxxx';
		case 0.5:
			return 'cxxxx';
		case 1.0:
			return 'oxxxx';
		case 1.5:
			return 'ocxxx';
		case 2.0:
			return 'ooxxx';
		case 2.5:
			return 'oocxx';
		case 3.0:
			return 'oooxx';
		case 3.5:
			return 'ooocx';
		case 4.0:
			return 'oooox';
		case 4.5:
			return 'ooooc';
		case 5.0:
			return 'ooooo';
	}
}

//E -

console.log(moonRating(0)); // 'xxxxx'
console.log(moonRating(0.6)); // 'cxxxx'
console.log(moonRating(1.5)); // 'oxxxx'
console.log(moonRating(3.9)); // 'ooxxx'
