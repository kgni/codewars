// July 08, 2022

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

//PREP

function combat(health, damage) {
	// if health-damage is less than 0, return 0, else return health-damage
	return health - damage < 0 ? 0 : health - damage;
}
