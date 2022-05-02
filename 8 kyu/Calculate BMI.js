// May 02, 2022

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
	const BMI = weight / height ** 2;
	if (BMI <= 18.5) return 'Underweight';
	if (BMI <= 25.0) return 'Normal';
	if (BMI <= 30.0) return 'Overweight';
	if (BMI > 30) return 'Obese';
}
