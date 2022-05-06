// May 06, 2022

/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
*/
// add the value "codewars" to the websites array 1,000 times
let websites = [];

for (let i = 0; i < 1000; i++) {
	websites.push('codewars');
}

// could also be done by using new array and fill:

let websites2 = new Array(1000).fill('codewars');

// done with while loop

let websites3 = [];
while (websites3.length < 1000) websites3.push('codewars');
