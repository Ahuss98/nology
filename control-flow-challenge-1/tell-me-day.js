const day = 10;
const message = 'Today is';

switch (day) {
	case 1:
		console.log(`${message} Monday`);
		break;
	case 2:
		console.log(`${message} Tuesday`);
		break;
	case 3:
		console.log(`${message} Wednesday`);
		break;
	case 4:
		console.log(`${message} Thursday`);
		break;
	case 5:
		console.log(`${message} Friday`);
		break;
	case 6:
		console.log(`${message} Saturday`);
		break;
	case 7:
		console.log(`${message} sunday`);
		break;
	default:
		console.log(
			'Please pick a number between 1-7 to represent a day of the week from Monday - Sunday respectivley'
		);
}
