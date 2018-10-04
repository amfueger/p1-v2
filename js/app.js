//deck object
//moves for card start left to right. 
const deck = [{
	name: "Cobra",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +1,
		y: -1
	}, {
		x: +1,
		y: +1
	}],
	img: 'card-images/cobra.jpg'
}, {
	name: "Goose",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: +0
	}, {
		x: +1,
		y: +0
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/goose.jpg'
}, {
	name: "Elephant",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: +0
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Elephant.jpg'
}, {
	name: "Frog",
	moves: [{
		x: -2,
		y: +0
	}, {
		x: -1,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Frog.jpg'
}, { //done
	name: "Mantis",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: +0,
		y: -1
	}, {
		x: +1,
		y: +1
	}],
	img: 'card-images/Mantis.jpg'
}, {
	name: "Boar",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +0,
		y: +1
	}],
	img: 'card-images/Boar.jpg'
}, {
	name: "Rooster",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Rooster.jpg'
}, {
	name: "Crane",
	moves: [{
		x: -1,
		y: -1
	}, {
		x: +0,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Crane.jpg'
}, {
	name: "Horse",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +0,
		y: -1
	}],
	img: 'card-images/Horse.jpg'
}, {
	name: "Tiger",
	moves: [{
		x: +0,
		y: +2
	}, {
		x: +0,
		y: -1
	}],
	img: 'card-images/Tiger.jpg'
}, {
	name: "Dragon",
	moves: [{
		x: -2,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +2,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Dragon.jpg'
}, {
	name: "Rabbit",
	moves: [{
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +2,
		y: +0
	}],
	img: 'card-images/Rabbit.jpg'
}, {
	name: "Ox",
	moves: [{
		x: +0,
		y: +1
	}, {
		x: +0,
		y: -1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Ox.jpg'
}, {
	name: "Crab",
	moves: [{
		x: -2,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +2,
		y: +0
	}],
	img: 'card-images/Crab.jpg'
}, {
	name: "Monkey",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Monkey.jpg'
}, {
	name: "Eel",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Eel.jpg'
}]
class Deck {
	// draw a random card
	// deck has a property of cards
	constructor(cards) {
		this.cards = cards.slice();
	}
	drawCardAt(index) {
		return this.cards.splice(index, 1)[0];
	}
	drawRandom() {
		let index = Math.floor(Math.random() * this.cards.length);
		return this.index;
	}
}
//Pawn class
class Pawn {
	constructor(x, y, color, pawnnumber, live) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.pawnnumber = pawnnumber;
		this.live = live;
		// don't need sensei because it's always three. 
		//storing pawns in an array, will hide within the array using boolean instead of removing because otherwise that changes the position of the pawns upon calling them. 
	};
}
//Begin Game function
class Game {
	constructor() {
		this.redHand = [];
		this.blueHand = [];
		this.sideCard = {};
		this.selectedCard = {}; //this is to hold the player's selected card after pawn select
		this.whoseTurn = "red"; //true for red?
		this.clickedPawnX = null;
		this.clickedPawnY = null;
		this.cardClicked = null;
		this.currentDeck = [];
		this.currentPawn = null;
		this.cardClickedIndex = null;
		this.newPawnPositionY = null;
		this.newPawnPositionX = null;
		this.waitingForSquare = false;
		this.waitingForCard = false;
		this.waitingForPawn = true;
	}
	gameSetup() {
		//THIS WORKS
		this.redPawns = this.generatePawns("red", 1);
		this.bluePawns = this.generatePawns("blue", 5);
		this.currentDeck = this.generateDeck(deck);
		this.pushCardsintoHand(this.currentDeck);
	}
	// check if Stone is dead
	victoryRed() {
		if (this.whoseTurn === "red") {
			//Stone is asking if the squares have no child elements with attributes of a class
			if ($('.square').children().attr('blue-pawn-3') === false) {
				//true is victory!
				return true;
				//stream
			} else if ($('#3').attr('id', 'red-pawn-3')) {
				return true;
			}
			console.log("Red hasn't won yet, victory checked");
			return false;
		}
	}
	victoryBlue() {
		if (this.whoseTurn === "blue") {
			//Stone is asking if the squares have no child elements with attributes of a class
			if ($('.square').children().attr('red-pawn-3') === false) {
				//true is victory!
				console.log("Red has won!");
				return true;
				//stream
			} else if ($('.square').data('x') === 3 && $('.square').data('y') === 1 && $('.square').children().hasClass('blue-pawn-3')) {
				//true for victory!
				//(this.bluePawns[2].x === 3 && this.bluePawns[2].y === 1) << since I didn't use pawn class
				console.log("Blue has won!");
				return true;
			}
			//no one has won yet!
			console.log("Blue hasn't won yet, victory checked");
			return false;
		}
	}
	gameOver() {
		if (this.victoryBlue === true) {
			console.log("Blue has won!!!");
		}
		if (this.victoryRed === true) {
			console.log("Red has won!!!");
		}
	}
	generatePawns(color, y) {
		//WORKS
		let pawns = [];
		for (let i = 1; i < 6; i++) {
			pawns.push(new Pawn(i, y, color, i, true));
		};
		return pawns;
	}
	generateDeck() {
		//WORKS
		let fullDeck = [];
		fullDeck = deck.slice(0);
		for (let i = 0; i <= 4; i++) {
			this.currentDeck.push(fullDeck.splice(Math.floor(Math.random() * fullDeck.length), 1)[0]);
		}
		return this.currentDeck;
	}
	pushCardsintoHand(currentDeck) {
		//WORKS
		this.redHand.push(currentDeck[0]);
		this.redHand.push(currentDeck[1]);
		this.blueHand.push(currentDeck[2]);
		this.blueHand.push(currentDeck[3]);
		this.sideCard = currentDeck[4];
		$('#redcard1').attr('src', this.redHand[0].img);
		$('#redcard2').attr('src', this.redHand[1].img);
		$('#bluecard1').attr('src', this.blueHand[0].img);
		$('#bluecard2').attr('src', this.blueHand[1].img);
		$('#side-card').attr('src', this.sideCard.img);
	}
	removeOpponentPawn() {
		//TWO WAYS I can do this. 
		//1. On player turn, any pawns with the class that's NOT the player's get removed. 
		//If it's red's turn, and.... 
		if (this.whoseTurn === "red") {
			for(let i = 0; i <= 25; i++){
				if($('#' + i ).children().hasClass('current-pawn') && $('#' + i ).children().hasClass('blue-pawn') === true){ 
					$('#' + i).children('img.blue-pawn').remove()
				};
			}
		}
		if (this.whoseTurn === "blue") {
			for(let i = 0; i <= 25; i++){
				if($('#' + i ).children().hasClass('current-pawn') && $('#' + i ).children().hasClass('red-pawn') === true){ 
					$('#' + i).children('img.red-pawn').remove()
				};
			}
		}
	}
	checkIfPawnOfColorIsThere(e) {
		if (this.whoseTurn === "red") {
			//for (let i = 0; i <= this.redPawns.length; i++) {
			if ($('.square').children().hasClass('.red-pawn') && $('.square').data('x') === $(e.target).data('x') && $('.square').data('y') === $(e.target).data('y')) {
				//true means that one of your pawns is there already
				//(this.redPawns[i] === $(e.target).data('x') && this.redPawns[i] === $(e.target).data('y')) <,-- didn't use pawn array..... 
				//if an img with class red-pawn is in the target x and y (
				//RE-SET SQUARE CLICK
				this.waitingForSquare = false;
				return true;
			}
		} else if (this.whoseTurn === "blue") {
			//for (let i = 0; i < this.bluePawns.length; i++) {
			if ($('.square').children().hasClass('.blue-pawn') && $('.square').data('x') === $(e.target).data('x') && $('.square').data('y') === $(e.target).data('y')) {
				//true means one of your pawns is there already
				//(this.bluePawns[i] === $(e.target).data('x') && this.bluePawns[i] === $(e.target).data('y')) <-- didn't use arrrrayyyyy 
				this.waitingForSquare = false;
				return true;
				//}
			}
		}
		console.log("about to return false")
		return false;
	}
	switchCards(e) {
		//WORKS!!!!!
		if (this.whoseTurn === "red") {
			let tempSideCard = this.redHand[this.cardClickedIndex];
			this.redHand.splice(this.cardClickedIndex, 1, this.sideCard);
			this.sideCard = tempSideCard;
			$('#redcard1').attr('src', this.redHand[0].img);
			$('#redcard2').attr('src', this.redHand[1].img);
			$('#side-card').attr('src', this.sideCard.img);
		} else {
			let tempSideCard = this.blueHand[this.cardClickedIndex];
			this.blueHand.splice(this.cardClickedIndex, 1, this.sideCard);
			this.sideCard = tempSideCard;
			$('#bluecard1').attr('src', this.blueHand[0].img);
			$('#bluecard2').attr('src', this.blueHand[1].img);
			$('#side-card').attr('src', this.sideCard.img);
		}
	}
	switchToOtherPlayer() {
		//WORKS
		if (this.whoseTurn === "red") {
			this.whoseTurn = "blue";
			this.clickedPawnX = null;
			this.clickedPawnY = null;
			this.cardClicked = "";
			// this.currentDeck = []; ///?
			this.currentPawn = null;
			this.cardClickedIndex = null;
			this.newPawnPositionY = null;
			this.newPawnPositionX = null;
			$('.turn-text').empty();
			$('.turn-text').text('It is Blues turn!')
			$('.square').removeClass('current-pawn-container');
			$('img').removeClass('current-pawn');

		} else if (this.whoseTurn === "blue") {
			this.whoseTurn = "red";
			this.clickedPawnX = null;
			this.clickedPawnY = null;
			this.cardClicked = "";
			// this.currentDeck = [];
			this.currentPawn = null;
			this.cardClickedIndex = null;
			this.newPawnPositionY = null;
			this.newPawnPositionX = null;
			$('.turn-text').empty();
			$('.turn-text').text('It is Reds turn!')
			$('.square').removeClass('current-pawn-container');
			$('img').removeClass('current-pawn');
		}
		this.waitingForPawn = true;
	}
	selectCurrentCard(e) { console.log("selectCurentCard");
		//WORKS
		if (this.waitingForCard === true) {
			let itsRedCard = $(e.currentTarget).hasClass('red-cards');
			if (itsRedCard) {
				if (this.whoseTurn === "red") { console.log("red player tried to pick red card on reds turmn");
					this.cardClickedIndex = $(e.target).data('card');
					console.log(this.cardClickedIndex)
					this.cardClicked = this.redHand[this.cardClickedIndex];
					this.waitingForCard = false;
					this.waitingForSquare = true;
				}
			} else {
				if (this.whoseTurn === "blue") { console.log("blue player tried to pick blue card on blues turmn");
					this.cardClickedIndex = $(e.target).data('card');
					console.log(this.cardClickedIndex)
					this.cardClicked = this.blueHand[this.cardClickedIndex];
					this.waitingForCard = false;
					this.waitingForSquare = true;
				}
			}
		}
		console.log("Player selected card to play");
	}
	selectCurrentPawn(e) {
		//WORKS
		if (this.waitingForPawn === true) { console.log("we ran slect current pawn and got into first if (if waiting for pawn -=== true");
			let itsRedPawn = $(e.currentTarget).hasClass('red-pawn');
			if (itsRedPawn) {
				if (this.whoseTurn === "red") { console.log("red player tried to pick a red pawn to move reds turmn");
					this.clickedPawnX = $(e.target).parent().data('x'); //works
					this.clickedPawnY = $(e.target).parent().data('y'); //works
					this.currentPawn = $(e.target).parent().addClass('current-pawn-container').children('img').addClass('current-pawn');
					this.waitingForCard = true;
					this.waitingForPawn = false;
				}
			} else if ($(e.currentTarget).hasClass('blue-pawn')) { console.log("blue player tried to pick a blue pawn to move on  Blue's turn");
				if (this.whoseTurn === "blue") {
					this.clickedPawnX = $(e.target).parent().data('x');
					this.clickedPawnY = $(e.target).parent().data('y');
					this.currentPawn = $(e.target).parent().addClass('current-pawn-container').children('img').addClass('current-pawn');
					this.waitingForCard = true;
					this.waitingForPawn = false;
				}
			}
		}
		console.log("Player clicked Pawn on selectCurrentPawn method");
	}
	isLegalMove(e) {
		console.log(this.cardClicked, " this is this.card.Clicked in isLegalMove");
		console.log(this.cardClicked.moves, " this is this.card.Clicked.moves in isLegalMove");
		console.log(this.cardClicked.moves[0]);
		let tempNewPawnPositionY = null;
		let tempNewPawnPositionX = null;
		if (this.whoseTurn === "red") {

			for (let i = 0; i < this.cardClicked.moves.length; i++) {
				//	console.log(this.cardClicked.moves[0].y + " testing card clicked move 1 y number");
				//console.log(this.cardClicked.moves[i].y + " testing card clicked with i number");
				tempNewPawnPositionY = this.cardClicked.moves[i].y + this.clickedPawnY; // set test Y val
				tempNewPawnPositionX = this.cardClicked.moves[i].x + this.clickedPawnX; // set test X val
				if (tempNewPawnPositionX === $(e.target).data('x') && tempNewPawnPositionY === $(e.target).data('y') && this.checkIfPawnOfColorIsThere(e) === false) {
					console.log("move is valid--red turn");
					return true;
				}
			}
			console.log("move is not valid");
			return false;
		} else {
			for (let i = 0; i < this.cardClicked.moves.length; i++) {
				let bluePawnMovesY = this.cardClicked.moves[i].y;
				let bluePawnMovesX = this.cardClicked.moves[i].x;
				//is negative
				if (bluePawnMovesY < 0) {
					//makes positive
					bluePawnMovesY = Math.abs(this.cardClicked.moves[i].y);
				} //is positive
				if (bluePawnMovesY > -1) {
					//makes negative
					bluePawnMovesY = this.cardClicked.moves[i].y * -1;
				} //is negative
				if (bluePawnMovesX < 0) {
					//Makes positive
					bluePawnMovesX = Math.abs(this.cardClicked.moves[i].x);
				} //is positive	
				if (bluePawnMovesX > -1) {
					bluePawnMovesX = this.cardClicked.moves[i].x * -1;
				}
				tempNewPawnPositionY = Number(bluePawnMovesY + this.clickedPawnY);
				tempNewPawnPositionX = Number(bluePawnMovesX + this.clickedPawnX);
				if (tempNewPawnPositionX === $(e.target).data('x') && tempNewPawnPositionY === $(e.target).data('y') && this.checkIfPawnOfColorIsThere(e) === false) {
					console.log("You can click here");
					return true;
				} //if
			} //for
			console.log("move is not valid");
			return false;
		} //else
	} //finished
	movePawn(e) {
		if (this.whoseTurn === "red") {
			//console.log(e + " test for event");
			//console.log($(e.target).data('y') + "test for div y");
			//console.log(this.cardClicked.moves[0].y + " testing cardclicked position 0 and its y");
			// make sure this move legal according to the card
			if (this.isLegalMove(e) === true) {
				//console.log("move is legal according to the isLegalMove")
				// console.log();
				this.newPawnPositionY = $(e.target).data('y')
				this.newPawnPositionX = $(e.target).data('x')
				let currentPawnImage = this.currentPawn.detach();
				$(e.target).append(currentPawnImage);
				this.removeOpponentPawn(); 
			}
			this.waitingForSquare = false;
			this.victoryBlue();
			this.victoryRed()
			this.switchCards();
		} else {
			if (this.isLegalMove(e) === true) {
				this.newPawnPositionY = $(e.target).data('y')
				this.newPawnPositionX = $(e.target).data('x')
				let currentPawnImage = this.currentPawn.detach();
				$(e.target).append(currentPawnImage);
			this.removeOpponentPawn();
			}
			this.waitingForSquare = false;
			this.victoryBlue();
			this.victoryRed()
			this.switchCards();
		} //else
		this.switchToOtherPlayer();
	} //end of movePawn
} //end of methods
let game = new Game();
game.gameSetup();
/*****************Listeners************/
$('.pawn').on('click', (e) => {
	game.selectCurrentPawn(e);
});
$('.cards').on('click', (e) => {
	game.selectCurrentCard(e);
});
$('.square').on('click', (e) => {
	if (game.waitingForSquare === true) {
		game.movePawn(e);
	}
})
$('.pass').on('click', (e) => {
	game.switchToOtherPlayer();
})
$('.reset-card-choice').on('click', (e) => {
	game.waitingForCard = true;
})