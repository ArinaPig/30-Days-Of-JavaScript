//Task1-easy
function functionName1() {
	console.log('Petya Ivanov')
}

functionName1()

//Task2-easy
function functionName2(firstName, lastName) {
	console.log(`My full name is ${firstName} ${lastName}.`)
}

functionName2('Sanya', 'Sidorov')

//Task3-easy
function addNumbers(a, b) {
	sum = a + b
	return sum
}

console.log(addNumbers(2, 5))

//Task4-easy
function calculateAreaOfRectangle(length, width) {
	let area = length * width
	return area
}

console.log(calculateAreaOfRectangle(3, 4))

//Task5-easy
function calculatePerimeterOfRectangle(length, width) {
	let perimeter = 2 * (length + width)
	return perimeter
}

console.log(calculatePerimeterOfRectangle(3, 4))

//Task6-easy
function calculateVolumeOfRectangle(length, width, height) {
	let volume = length * width * height
	return volume
}

console.log(calculateVolumeOfRectangle(3, 4, 2))

//Task7-easy
function calculateAreaOfCircle(r) {
	let area = Math.PI * r * r
	return area
}

console.log(calculateAreaOfCircle(1))

//Task8-easy
function calculateCircumOfCircle(r) {
	let circum = 2 * Math.PI * r
	return circum
}

console.log(calculateCircumOfCircle(1))

//Task9-easy
function calculateDensityOfSubstance(mass, volume) {
	let density = mass / volume
	return density
}

console.log(calculateDensityOfSubstance(2, 4))

//Task10-easy
function calculateSpeed(distance, time) {
	let speed = distance / time
	return speed
}

console.log(calculateSpeed(12, 2))

//Task11-easy
function calculateWeight(mass) {
	const gravity = 9.8
	weight = mass * gravity
	return weight
}

console.log(calculateWeight(12))

//Task12-easy
function convertCelsiusToFahrenheit(oC) {
	let oF = (oC * 9) / 5 + 32
	return oF
}

console.log(convertCelsiusToFahrenheit(12))

//Task13-easy
function calculateBMI(weight, height) {
	let bmi = weight / (height * height)
	return bmi
}

function defineWeightGroup(weight, height) {
	let group
	let bmi = calculateBMI(weight, height)

	switch (true) {
		case bmi < 18.5:
			group = 'underweight'
			break
		case bmi >= 18.5 && bmi <= 24.9:
			group = 'normal weight'
			break
		case bmi >= 25 && bmi <= 29.9:
			group = 'overweight'
			break
		case bmi >= 30:
			group = 'obese'
			break
		default:
			console.log('ERROR')
	}

	return group
}

console.log(defineWeightGroup(53, 1.68))

//Task14-easy
function checkSeason(month) {
	let season
	switch (true) {
		case (month >= 1 && month <= 2) || month == 12:
			season = 'winter'
			break
		case month >= 3 && month <= 5:
			season = 'spring'
			break
		case month >= 6 && month <= 8:
			season = 'summer'
			break
		case month >= 9 && month <= 11:
			season = 'fall'
			break
		default:
			console.log('ERROR')
	}

	return season
}

console.log(checkSeason(12))

//Task15-easy
function findMax(a, b, c) {
	let max
	switch (true) {
		case a > b && a > c:
			max = a
			break
		case b > a && b > c:
			max = b
			break
		case c > b && c > a:
			max = c
			break
		default:
			console.log('ERROR')
	}

	return max
}

console.log(findMax(0, -10, -5))
