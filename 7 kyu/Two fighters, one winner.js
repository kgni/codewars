// May 30, 2022

/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

//PREP

//P - object instance of a fighter, containing properties that is: name, health (integer above 0), damagePerAttack
//R - the battle sequence of the two fighters, resulting in who is winning.

function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () {
		return this.name;
	};
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	// Create conditional for who is starting.
	// Create a while loop that keeps attacking back and forth and after each attack it checks the opponents health, if the opponents health is 0 or below, return the attacker as the winner.
	let isGameOver = false;

	// Conditions if fighter1 is the firstAttacker
	if (fighter1.name === firstAttacker) {
		while (!isGameOver) {
			fighter2.health -= fighter1.damagePerAttack;
			// Checking after each attack if fighter2 health is equal to og below 0, if that is the case, then we set isGameOver to true and return the attackers name
			if (fighter2.health <= 0) {
				isGameOver = true;
				return fighter1.name;
			}
			fighter1.health -= fighter2.damagePerAttack;
			// Checking after each attack if fighter1 health is equal to og below 0, if that is the case, then we set isGameOver to true and return the attackers name
			if (fighter1.health <= 0) {
				isGameOver = true;
				return fighter2.name;
			}
		}
	}

	// Conditions if fighter2 is the firstAttacker
	if (fighter2.name === firstAttacker) {
		while (!isGameOver) {
			fighter1.health -= fighter2.damagePerAttack;
			// Checking after each attack if fighter1 health is equal to og below 0, if that is the case, then we set isGameOver to true and return the attackers name
			if (fighter1.health <= 0) {
				isGameOver = true;
				return fighter2.name;
			}
			fighter2.health -= fighter1.damagePerAttack;
			// Checking after each attack if fighter2 health is equal to og below 0, if that is the case, then we set isGameOver to true and return the attackers name
			if (fighter2.health <= 0) {
				isGameOver = true;
				return fighter1.name;
			}
		}
	}
}

//E -

console.log(
	declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
);

// SHORTER SOLUTION THAN THE ONE ABOVE, MORE LOGICAL, MAKES SENSE

function declareWinner(fighter1, fighter2, firstAttacker) {
	while (fighter1.health > 0 && fighter2.health > 0) {
		fighter2.health -= fighter1.damagePerAttack;
		fighter1.health -= fighter2.damagePerAttack;
	}

	if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
	else if (fighter1.health <= 0) return fighter2.name;
	else return fighter1.name;
}

// USING MATHS (DIVISION AS REPEATED SUBTRACTION) - https://www.homeschoolmath.net/teaching/md/division-repeated-subtraction.php

function declareWinner(fighter1, fighter2, firstAttacker) {
	var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
	var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
	if (fac1 < fac2) {
		return fighter2.name;
	} else if (fac2 < fac1) {
		return fighter1.name;
	} else {
		return firstAttacker;
	}
}
