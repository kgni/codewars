// June 28, 2022

/*
Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters. Watch out for the three points at the end of the song.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
Good Luck!
*/

function babySharkLyrics() {
	s = ' shark';
	a = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'];
	d = `,${' doo'.repeat(6)}`;
	h = "Let's go hunt";
	return (
		a.reduce(
			(l, n, i) => (l += (n + s + d + '\n').repeat(3) + n + s + '!\n'),
			''
		) +
		(h + d + '\n').repeat(3) +
		h +
		'!\n' +
		'Run away,…'
	);
}

console.log(babySharkLyrics());