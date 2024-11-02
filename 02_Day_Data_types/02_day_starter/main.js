//Task1-medium
console.log(
	"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
)

//Task2-medium
console.log(
	'"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead." is a quote by Mother Teresa'
)

//Task3-medium
console.log(typeof '10' == typeof 10)
console.log(typeof '10' == typeof '10')

//Task4-medium
console.log(parseFloat('9.8') == 10)
console.log(Math.round(parseFloat('9.8')) == 10)

//Task5-medium
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))

//Task6-medium
console.log('I hope this course is not full of jargon.'.includes('jargon'))

//Task7-medium
console.log(Math.floor(Math.random() * 101))

//Task8-medium
console.log(Math.floor(Math.random() * 51) + 50)

//Task9-medium
console.log(Math.floor(Math.random() * 256))

//Task10-medium
let string = 'JavaScript'
let num = []
let characters = []
let rand

while (num.length < string.length) {
	rand = parseInt(Math.random() * (string.length - 2))
	if (!num.includes(rand)) {
		num.push(rand)
	}
}

for (const i of num) {
	characters.push(string[i])
}

console.log(characters)

//Task11-medium
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

//Task12-medium
console.log(
	'You cannot end a sentence with because because because is a conjunction'.substr(
		31,
		24
	)
)
