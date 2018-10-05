
# PROJECT 1
---
https://amfueger.github.io/p1-v2/


Proposal and Description: Make a two player game known as Onitama. Onitama is a board game with pawns whose movements on a board are dictated by information contained on cards in the player's hand. Each player has five pawns, one on which the victory condition hinges, and at all times has a hand of two cards, played face up. In game play, there are five cards available to play drawn out of a 16 card deck, with a player's turn resulting in their discarding the used card after action and picking up the spare card off to the side (ie: the spare card is, after the first player's first turn, the discard of whoever played the previous turn. Each player has two cards, with two players, that's four cards total in play). One movement, based on card information, is allowed per turn before turn passes to the other player. There are two victory conditions; the special pawn moves to a specific location on the board, or, in the way of checkers/chess, the loss of your special pawn or loss of your opponents results in a victory condition. Board is 5 x 5 squares with pawns starting at opposite ends of the opponent in a line. 

Jquery and Javascript (html/csss) ONLY


/***********************LOAD GAME***********************************/
Link to website to play: 


/***************************PREREQUISETES**********************************/
Game is playable in browser only, preferably the latest version of Chrome. 
No installation is needed as libraries are linked in the index.html. 

/**************************WIREFRAME*************************/
Please see attached file of wireframe. 


/************************GAMEPLAY****************************/
Opening sequence of a pagoda and some fighting monks. Transition in the Onitama logo that says "click to start" and "how to play"

"How to play" ---> 
A page with the rules and a button to "click to start"

"click to start" --->
Takes you to the game page. Board will be in place. There will be a single button that requests the user pick their pawn color (blue, red). That button will disappear, then a new one instigating a random draw of five cards with their properties. 

PLEASE SEE WIRE FRAME FOR BOARD IN TEST IMAGES

At this point the game will be ready to start, and will inform the players via a random pick, who goes FIRST, and then prompting the user to click on a pawn/or pawn button to select which pawn will move, and then a card to select given the movement options they would like, and from there, which of those movement options their pawn will take. CARDS ARE PLAYED FACE UP FOR ALL USERS. 

Number Pawn ---> card ---> card's movement option ---> pawn moves. 

Note: Much as in chess or checkers, touching/selecting the pawn is not reversable. At that point your only option is to select the card that you wish to use. The same holds true once you select the card. You cannot de-select the card and must move in any of the capacities available on the card. 

Once pawn, card, card movement are selected, the pawn moves. Pawn cannot move to a square occupied by a fellow pawn. Pawn can, like checkers, move to a square occupied by an enemy, and as such, remove them. Unsure whether I will use .hide() or .remove(), though likely the latter.

VICTORY CONDITIONS:
The way of the Stone and the way of the Stream. 
Pawn #3 is your "king" or Sensei. His initial placement on the board is on a special pedestal. You may win by:
1. capturing/killing/removing the enemy Sensei from the board. 
2. moving your Sensei to the opposing player's special pedestal. Pawns 1,2,4,5 DO NOT activate the victory condition on pedestal!

Once game play is complete and the pawn is moved to a new square, the card that was used to move is discarded from the hand and switched with the fifth spare card on the side. Game play then switches to the other player. 

The second player runs through the same exact round, no differences.

When either victory condition happens, the game is over. A reset board button will pop up that will again call the random first player up. There is currently no "round" counter, but I would consider adding one. 

/************************GAMEPLAY****************************/
Example deck:
Cobra: from position, can move one left, up one and right one, OR down one and right one. 
Goose: from position, can move one left, one left and up, one right, OR one right and down. 
Frog: from position, can move one right and one down, one up and one right, OR two left(not one). 
Crab:from position, one up, two left, OR two right. 
Ox: from position, one up, one right, OR one down.

SEE WIREFRAMES FOR EXAMPLE CARDS IN TEST IMAGES

Board represented by:
[5,1] [5,2] [5,3] [5,4] [5,5] 
[4,1] [4,2] [4,3] [4,4] [4,5] 
[3,1] [3,2] [3,3] [3,4] [3,5] 
[2,1] [2,2] [2,3] [2,4] [2,5] 
[1,1] [1,2] [1,3] [1,4] [1,5] 

Starting cards:
Red: Frog, Crab
Blue: Cobra, Ox
Side card: Goose.

RED PLAYER TURN:

Red position:
1[1,1] 2[1,2] 3[1,3] 4[1,4] 5[1,5] 

Blue position:
1[5,5] 2[5,4] 3[5,3] 4[5,2] 5[5,1]

Example movements:
Red Pawn 1, at [1,1] using Cobra. Cobra allows for one left, but that is off board. It allows for up one and right one, which is [2,2]. It allows for down one and right one, but that is off board. Red Pawn 1 of [1,1], moves to [2,2], changing its position. Card Cobra is discarded and Goose is picked up. 

Current cards:
Red: Frog, Crab
Blue: Goose, Ox
Side card: Cobra.

Red position:
1[2,2] 2[1,2] 3[1,3] 4[1,4] 5[1,5] 

Blue position:
1[5,5] 2[5,4] 3[5,3] 4[5,2] 5[5,1]

BLUE PLAYER TURN:

Blue Pawn 1 at [5,5] using Frog. Frog allows for one right and one down, but that is off board. It allows for one up and one right, which is [4,4]. Or it allows for two left, but there is no available spot (different from off board). It moves to [4,4]. Card Frog is discarded and Cobra is picked up. 

Current cards:
Red: Cobra, Crab
Blue: Goose, Ox
Side card: Frog

Red position:
1[2,2] 2[1,2] 3[1,3] 4[1,4] 5[1,5] 

Blue position:
1[4,4] 2[5,4] 3[5,3] 4[5,2] 5[5,1]

RED PLAYER TURN:

Red Pawn 1 at [4,4] using Crab. Crab allows for one up which is [3,2], two right which is [2,4], or two left which is off board. User picks two right at [2,4].

Current cards:
Red: Cobra, Frog
Blue: Goose, Ox
Side card: Crab

Red position:
1[2,4] 2[1,2] 3[1,3] 4[1,4] 5[1,5] 

Blue position:
1[4,4] 2[5,4] 3[5,3] 4[5,2] 5[5,1]

NOTE: Pawns can JUMP other pawns, and the movement does not mean they take the pawn. Only if the pawn lands on a square where an enemy is can they take the pawn!
Keep in mind: 
Cards may have optional movements, but there's a limit to space on the board itself. Restrict where the pawn can go. 

/*************************LATER FEATURES**************************/
Log rounds, and from the round, determine that the loser gets to go first in the next 

After pawn select, highlight the squares available for movement. Use different colors for each card. 

If in gameplay user clicks card before pawn, it will offer five temp select pawn buttons to make the board reflect which movements are possible based on pawn position. (it changes as you mouseover each pawn) (This does not select the pawns for gameplay! By clicking away from the card, it will resume play. )

Add animation for when a pawn takes an enemy square.

Add the option to go back to the rules page, but still be able to go back to the current game. 

Add random hints and strategy before each turn. 

round. 

Rotate board

/*************************AUTHOR**************************/
Ashley Fueger



/*************************Inspiration**************************/
The game Onitama!


