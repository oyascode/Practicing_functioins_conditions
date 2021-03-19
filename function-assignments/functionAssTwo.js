
// FUNCTION 1

//store an anonymous function in a variable
const rateTutor = function() {
	const rating = prompt('Rate Don JS on a 1 to 10 scale', 10);// prompt user for number input
  // if rating is less than 5
	if (rating < 5) {
		const response = 'You lack good sense of value, try again!';
		return response;
	} 
  // If rating is btw 5 and 7
	else if (rating >=5 && rating < 8) {
		const response = 'You have serious bias, but try better';
		return response;
	} 
  // If rating is btw 8 and 9
	else if (rating >= 8 && rating < 10) {
		const response = "You have good sense of judgement, thumbs up!";
		return response;
	}
  // if rating is a whooping 10
	else {
		const response = "You have good sense of humour!";
		return response;
	}
}
// Log our function on the console
console.log(rateTutor());

// FUNCTION 2

// Generate random number and output a message
const randomNumber = () => {
	const random = Math.floor(Math.random() * 10 + 1); // generates numbers from 1 to 10
	if (random === 10) {
		console.log("Hurray! you have hit the zenith");
	}
	else if (random === 0){
		console.log("You have hit rock bottom !")
	}
	else if (random >= 1 && random < 5) {
		console.log("Below average, try harder!")
	}
	else if (random >= 5 && random < 9) {
		console.log("Above average, Keep moving!")
	}
	else {
		console.log("Keep moving!")
	}
}


randomNumber();




// FUNCTION 3
// Declare a function that calculate area
function calculateArea(length, breadth) {
  const area = (length * breadth);
  return area;
}

console.log(calculateArea(5, 6));
console.log(calculateArea(4, 5));