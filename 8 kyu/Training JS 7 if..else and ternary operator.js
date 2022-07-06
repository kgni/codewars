// July 06, 2022

/*

*/

//PREP

//P - integer
//R - integer (price in cents)

function saleHotdogs(n) {
	return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
//E -
