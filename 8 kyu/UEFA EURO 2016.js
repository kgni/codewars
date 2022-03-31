// March 31, 2022

/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/
function uefaEuro2016(teams, scores) {
	const teamOne = teams[0];
	const teamTwo = teams[1];

	if (scores[0] > scores[1]) {
		return `At match ${teamOne} - ${teamTwo}, ${teamOne} won!`;
	} else if (scores[0] < scores[1]) {
		return `At match ${teamOne} - ${teamTwo}, ${teamTwo} won!`;
	} else {
		return `At match ${teamOne} - ${teamTwo}, teams played draw.`;
	}
}
