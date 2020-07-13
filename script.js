// var images = [
// 	"url('img/cat.jpg') center center",
// 	"url('img/cat.jpg') center center",
// 	"url('img/duck.jpg') center center / 250px 250px",
// 	"url('img/duck.jpg') center center / 250px 250px"
// ];

var squares = document.querySelectorAll('.square');

var hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;

function flipCard() {
	//cannot flip cards until turn is over
	if (lockBoard) return;
	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		//show image
		this.classList.add("card-front");
		//cannot click again until turn is over
		this.removeEventListener("click", flipCard);
	} else {
		hasFlippedCard = false;
		secondCard = this;
		//show image
		this.classList.add("card-front");
		//check if the two cards match
		checkMatch();
	} 
}

function checkMatch() {
	//cannot click cards until turn is over
	lockBoard = true;
	if (firstCard.dataset.name === secondCard.dataset.name) {
		setTimeout(() => {
			//remove cards if match
			firstCard.classList.add("hidden");
			secondCard.classList.add("hidden");
			//re-enable click event
			lockBoard = false;
		}, 1500);
	} else {
		setTimeout(() => {
			//flip cards back over
			firstCard.classList.remove("card-front");
			secondCard.classList.remove("card-front");
			//re-enable click event
			lockBoard = false;
			firstCard.addEventListener("click", flipCard);
		}, 1500);
	} 
}


// function flipCard() {
// 	if (!hasFlippedCard) {
// 		console.log("This is the first card!");
// 		hasFlippedCard = true;
// 		firstImage = this.style.background.replace(/"/g,"'");
// 		console.log(firstImage);
// 	} else {
// 		console.log("This is the second card!");
// 		hasFlippedCard = false;
// 		secondImage = this.style.background.replace(/"/g,"'");
// 		console.log(secondImage);
// 		checkMatch();
// 	} 
// }

// function checkMatch() {
// 	if (firstImage === secondImage) {
		
// 	} else {
// 		console.log("nooo");
// 	}
// }



for (var i=0; i<squares.length; i++) {
	//Assign random positions (shuffle)
	let position = Math.floor(Math.random()*12);
	squares[i].style.order = position;
	// squares[i].style.background = images[i];
	squares[i].addEventListener("click", flipCard);
}




// var pickedSquare = images[1];

// for (var i=0; i<squares.length; i++) {
// 	squares[i].style.background = images[i];

// 	squares[i].addEventListener("click", function(){
// 		//get image of clicked square
// 		var image = this.style.background;
// 		//replace "" with ''
// 		var clickedSquare = image.replace(/"/g,"'");

// 		//is clicked square equal to picked square? 
		
// 		if(clickedSquare === pickedSquare) {
// 			alert('Correct!');
// 		} else {
// 			alert('Wrong!');
// 		}
// 	})
// }




