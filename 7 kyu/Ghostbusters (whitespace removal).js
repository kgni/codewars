// May 31, 2022

/*
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

//PREP

//P - String
//R - Return the string minus whitesapces. If the string doesn't have any ghosts (no whitespaces), then return "You just wanted my autograph didn't you?",

function ghostBusters(building) {
	// Check if string has whit espaces, if it does remove those white spaces and return the string. If it doesn't have white spaces, return "You just wanted my autograph didn't you?",

	return building.includes(' ')
		? building.replaceAll(' ', '')
		: "You just wanted my autograph didn't you?";
}
//E -

console.log(ghostBusters('Factor y'));
console.log(ghostBusters('O  f fi ce'));
console.log(ghostBusters('BusStation'));

// using split() and join()

function ghostBusters(building) {
	return building.includes(' ')
		? building.split(' ').join('')
		: "You just wanted my autograph didn't you?";
}
