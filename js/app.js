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
	img: 'card-images/Cobra.jpg'
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
	img: 'card-images/Goose.jpg'
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
			let pieceOnBlueHomeSquare = $("#3>img");
			if (pieceOnBlueHomeSquare[0] && pieceOnBlueHomeSquare[0].id === "red-pawn-3") {
				console.log("RED WINS!!!!!");
				return true;
			}
			if (!$("#blue-pawn-3").length) {
				console.log("RED WINS!!!!!");
				return true;
			}
			console.log("Red hasn't won yet, victory checked");
			return false;
		}
	}
	victoryBlue() {
		if (this.whoseTurn === "blue") {
			let pieceOnRedHomeSquare = $("#23>img");
			if (pieceOnRedHomeSquare[0] && pieceOnRedHomeSquare[0].id === "blue-pawn-3") {
				console.log("BLUE WINS!!!!!");
				return true;
			}
			if (!$("#red-pawn-3").length) {
				console.log("BLUE WINS!!!!!");
				return true;
			}
			console.log("Red hasn't won yet, victory checked");
			return false;
		}
	}
	gameOver() {
		if (this.victoryBlue() === true) {
			console.log("Blue has won!!!");
			return true;
		}
		if (this.victoryRed() === true) {
			console.log("Red has won!!!");
			return true;
		}
		return false;
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
			for (let i = 0; i <= 25; i++) {
				if ($('#' + i).children().hasClass('current-pawn') && $('#' + i).children().hasClass('blue-pawn') === true) {
					$('#' + i).children('blue-pawn').remove()
				};
			}
		}
		if (this.whoseTurn === "blue") {
			for (let i = 0; i <= 25; i++) {
				if ($('#' + i).children().hasClass('current-pawn') && $('#' + i).children().hasClass('red-pawn') === true) {
					$('#' + i).children('red-pawn').remove()
				};
			}
		}

				$('img').removeClass('current-pawn');
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
			// this.cardClicked = "";
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
			// this.cardClicked = "";
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
		this.waitingForSquare = false;
		this.waitingForCard = false;
	}
	selectCurrentCard(e) {
		console.log("selectCurentCard");
		//WORKS
		if (this.waitingForCard === true) {
			let itsRedCard = $(e.currentTarget).hasClass('red-cards');
			let itsBlueCard = $(e.currentTarget).hasClass('blue-cards');
			if (itsRedCard) {
				if (this.whoseTurn === "red") {
					console.log("red player tried to pick red card on reds turmn");
					this.cardClickedIndex = $(e.target).data('card');
					this.cardClicked = this.redHand[this.cardClickedIndex];
					this.waitingForCard = false;
					this.waitingForSquare = true;
				}
			} if (itsBlueCard){
				if (this.whoseTurn === "blue") {
					console.log("blue player tried to pick blue card on blues turmn");
					this.cardClickedIndex = $(e.target).data('card');
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
		if (this.waitingForPawn === true) {
			let itsRedPawn = $(e.currentTarget).hasClass('red-pawn');
			if (itsRedPawn) {
				if (this.whoseTurn === "red") {
					this.clickedPawnX = $(e.target).parent().data('x'); //works
					this.clickedPawnY = $(e.target).parent().data('y'); //works
					this.currentPawn = $(e.target).parent().addClass('current-pawn-container').children('img').addClass('current-pawn');
					this.waitingForCard = true;
					this.waitingForPawn = false;
				}
			} else if ($(e.currentTarget).hasClass('blue-pawn')) {
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
		let tempNewPawnPositionY = null;
		let tempNewPawnPositionX = null;
		if (this.whoseTurn === "red") {
			for (let i = 0; i < this.cardClicked.moves.length; i++) {
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
					console.log("move is valid- blue turn");
					return true;
				} //if
			} //for
			console.log("move is not valid");
			return false;
		} //else
	} //finished
movePawn(e) {
		console.log("this.waitingforSquare beginning move pawn");
		console.log("this.waitingforCard beginning move pawn");
		console.log("this.waitingforPawn beginning move pawn");
		console.log(this.waitingForSquare);
		console.log(this.waitingForCard);
		console.log(this.waitingForPawn);
		if (this.whoseTurn === "red") {
			console.log(e + " test for event");
			console.log($(e.target).data('y') + "test for div y");
			console.log(this.cardClicked.moves[0].y + " testing cardclicked position 0 and its y");
			// make sure this move legal according to the card




			if (this.isLegalMove(e) === true) {
				console.log("move is legal according to the isLegalMove")
				// console.log();
				this.newPawnPositionY = $(e.target).data('y')
				this.newPawnPositionX = $(e.target).data('x')
				let currentPawnImage = this.currentPawn.detach();
				$(e.target).append(currentPawnImage);
				
			}
		console.log(" RED this.waitingforSquare end move pawn, before victory, switch card/play");
		console.log(" RED this.waitingforCard end move pawn, before victory, switch card/play");
		console.log(" RED this.waitingforPawn end move pawn, before victory, switch card/play");
		console.log(this.waitingForSquare);
		console.log(this.waitingForCard);
		console.log(this.waitingForPawn);
			this.victoryBlue();
			this.victoryRed()
			this.switchCards();
		} else {
			
			if (this.isLegalMove(e) === true) {
				let currentPawnImage = this.currentPawn.detach();
				$(e.target).append(currentPawnImage);
			
			}
		console.log(" BLUE this.waitingforSquare end move pawn, before victory, switch card/play");
		console.log(" BLUE this.waitingforCard end move pawn, before victory, switch card/play");
		console.log(" BLUE this.waitingforPawn end move pawn, before victory, switch card/play");
		console.log(this.waitingForSquare);
		console.log(this.waitingForCard);
		console.log(this.waitingForPawn);
			this.victoryBlue();
			this.victoryRed()
			this.switchCards();
		console.log("this.waitingforSquare end move pawn, before switch play");
		console.log("this.waitingforCard end move pawn, before switch play");
		console.log("this.waitingforPawn end move pawn, before switch play");
		console.log(this.waitingForSquare);
		console.log(this.waitingForCard);
		console.log(this.waitingForPawn);
		} //else
		this.switchToOtherPlayer();
		console.log("this.waitingforSquare end move pawn, after switch");
		console.log("this.waitingforCard end move pawn, after switch");
		console.log("this.waitingforPawn end move pawn, after switch");
		console.log(this.waitingForSquare);
		console.log(this.waitingForCard);
		console.log(this.waitingForPawn);
	} //end of movePawn
} //end of methods
let game = new Game();
game.gameSetup();
/*****************Listeners************/
$('.pawn').on('click', (e) => {
	if (game.waitingForSquare === true) {
		e.target = e.target.parentElement;
		game.movePawn(e);
	} else {
		game.selectCurrentPawn(e);
	}
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