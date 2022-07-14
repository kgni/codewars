// July 14, 2022

/*

*/

//PREP

//P - p1 - price of card, p2 - price of ticket, p3 - percentage it costs less every time
//R -

function movie(card, ticket, perc) {
	let counter = 0;
	let ticketTotalPrice = 0;
	let cardPrice = card;
	let cheapTicket = ticket;
	while (true) {
		ticketTotalPrice += ticket;
		cardPrice += cheapTicket;
		cheapTicket *= perc;
		if (Math.ceil(cardPrice) < ticketTotalPrice) return counter;
		counter++;
	}
}
//E -

console.log(movie(500, 15, 0.9)); // 43
