const parent1 = 'brown';
const parent2 = 'green';

if (
	(parent1 === 'green' || parent2 === 'green') &&
	(parent1 === 'brown' || parent2 === 'brown')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`);
} else if (
	(parent1 === 'blue' || parent2 === 'blue') &&
	(parent1 === 'brown' || parent2 === 'brown')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`);
} else if (
	(parent1 === 'green' || parent2 === 'green') &&
	(parent1 === 'blue' || parent2 === 'blue')
) {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`);
} else if (parent1 === 'brown' && parent2 === 'brown') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`);
} else if (parent1 === 'green' && parent2 === 'green') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`);
} else if (parent1 === 'blue' && parent2 === 'blue') {
	console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is % and green is 1%`)
} else {
    console.log('please pick a valid eye colour from : green , blue , brown')
}