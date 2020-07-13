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

for (var i=0; i<squares.length; i++) {
	//Assign random positions (shuffle)
	let position = Math.floor(Math.random()*12);
	squares[i].style.order = position;
	// squares[i].style.background = images[i];
	squares[i].addEventListener("click", flipCard);
}





