// July 20, 2022

/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

//PREP

//P - a string
//R - boolean if any of the greetings words are in the string

function validateHello(greetings) {
	// to pass the random testcases, we need to use regex to just check if the word appears, if we were to just use includes, the random test case would fail, because we have cases where the word has exclamation marks and other symbols

	return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
}
//E -

console.log(validateHello('ahoj'));

console.log(validateHello('meh'));
