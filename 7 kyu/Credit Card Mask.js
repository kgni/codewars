// May 09, 2022

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

function maskify(cc) {
	if (cc.length < 5) {
		return cc;
	}
	let newStr = '';
	for (let i = cc.length - 4; i > 0; i--) {
		newStr += '#';
	}

	newStr += cc.slice(cc.length - 4);

	return newStr;
}

// Done with padstart and slice. We are first slicing off the last 4 numbers, and then we are adding in as many # signs as the length of the string.
// The first argument to padStart is the target length, and the 2nd is the padstring. So we are getting the target legnth from the orignal strings length, and then we are simply just padding every single char with # but the 4 last chars.

function maskify(cc) {
	return cc.slice(-4).padStart(cc.length, '#');
}
