// May 23, 2022

/*
Introduction
Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
*/

//PREP

//P - P1 - string of only lowercase chars, P2 = positivee itenger
//R - Array of integers where each letter in the string (P1), is equal to their number in the alphabet PLUS a single integer from the integer in P2.

function encode(str, key) {
	// split str into an array and return new array, where each character is equivalent to its number in the alphabet

	const numArray = str.split('').map((el) => el.charCodeAt(0) - 96);

	// split key into seperate numbers, and add those numbers to each char in the string. The key can be shorter than the string length, therefore we want to continue looping through the key and adding its value to the elements in the new array

	//  Since a number is not an iterable object, we need to turn it into a string first, and then turn it back into a number, when we want to add inside our .map().

	// Also we need to keep looping over the key's numbers and add them, a work around for this, is to make the string repeat itself as many times as the length of the numArray, then we know for sure that we have enough iterations (more than enough of the numbers that we need)

	key = key.toString().repeat(numArray.length);

	return numArray.map((num, index) => {
		// Looping over the numArray, and adding the individual key (parsed as a Number) on each iteration.
		return (num += Number(key[index]));
	});
}

//E -

console.log(encode('scout', 1939)); // [ 20, 12, 18, 30, 21]

console.log(encode('masterpiece', 1939)); // [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
