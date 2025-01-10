const parent1 = 'blue';
const parent2 = 'blue';
let childEye = '';

if (
	(parent1 === 'green' || parent2 === 'green') &&
	(parent1 === 'brown' || parent2 === 'brown')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`);
    childEye = 'brown'
} else if (
	(parent1 === 'blue' || parent2 === 'blue') &&
	(parent1 === 'brown' || parent2 === 'brown')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`);
    childEye = 'brown'
} else if (
	(parent1 === 'green' || parent2 === 'green') &&
	(parent1 === 'blue' || parent2 === 'blue')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`);
    childEye = 'green'
} else if (parent1 === 'brown' && parent2 === 'brown') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`);
    childEye = 'brown'
} else if (parent1 === 'green' && parent2 === 'green') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`);
    childEye = 'green'
} else if (parent1 === 'blue' && parent2 === 'blue') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is % and green is 1%`)
    childEye = 'blue'
} else {
    console.log('please pick a valid eye colour from : green , blue , brown')
}

//BONUS

switch (childEye) {
    case 'brown':
        console.log(`ahhh the ${childEye} eye colour, my favourite as its mine too`)
        break;
    case 'green':
        console.log(`ohhh the ${childEye} eye colour, my least favourite`)
        break;
    case 'blue':
        console.log(`wow the ${childEye} eye colour, how rare. This is my 2nd favourite`)
}
