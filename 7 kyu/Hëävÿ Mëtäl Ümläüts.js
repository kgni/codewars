// July 14, 2022

/*
Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!
*/

//PREP

//P - String
//R - Turn string into Hëävÿ Mëtäl Ümläüts

function heavyMetalUmlauts(boringText) {
	const pedalToTheMetal = {
		A: 'Ä',
		O: 'Ö',
		E: 'Ë',
		U: 'Ü',
		I: 'Ï',
		Y: 'Ÿ',
		a: 'ä',
		o: 'ö',
		e: 'ë',
		u: 'ü',
		i: 'ï',
		y: 'ÿ',
	};

	// turn string into array and map over it, checking if the current char is in the pedalToTheMetal object, if it is, then return pedalToTheMetal[char], else just return the char.

	return boringText
		.split('')
		.map((char) => {
			return pedalToTheMetal[char] ? pedalToTheMetal[char] : char;
		})
		.join('');
}

console.log(heavyMetalUmlauts('Announcing the Macbook Air Guitar')); // Ännöüncïng thë Mäcböök Äïr Güïtär
