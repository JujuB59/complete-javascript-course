/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, partieEnCours, lastRollDice, scoreMax;


var init = function(){
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	partieEnCours = true;
	lastRollDice = 0;

	for(var i = 0 ; i < scores.length ; i++){
		document.querySelector('#dice-'+ (i +1)).style.display = 'none';
		document.getElementById('score-'+ i).textContent = '0';
		document.getElementById('current-'+ i).textContent = '0';
		document.querySelector('.player-'+ i +'-panel').classList.remove('winner');
		document.getElementById('name-' + i).textContent = 'Joueur ' + (i + 1);
	}

	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.final-score').value = "";
	scoreMax = 100;
}

init();

var changementDeJoueur = function(){
	roundScore = 0;
	document.querySelector('#current-' + activePlayer).textContent = roundScore;
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	lastRollDice = 0;
}
document.querySelector('.btn-roll').addEventListener("click", function(){
	if(partieEnCours){
		var des = Math.floor(Math.random() * 6 + 1);
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + des + '.png';
		if(des === 6 && lastRollDice === 6){
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			changementDeJoueur();
		} else if(des !== 1){
			roundScore += des;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else{
			changementDeJoueur();
		}

		lastRollDice = des;
	}
});

document.querySelector('.btn-hold').addEventListener("click", function(){
	if(partieEnCours){
		scores[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		if(scores[activePlayer] >= scoreMax){
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('#name-' + activePlayer).textContent = "Gagnant !";
			partieEnCours = false;
		} else{
			changementDeJoueur();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.final-score').addEventListener('keyup', function(){
	var finalScore = document.querySelector('.final-score');
	if(finalScore.value !== "" && !isNaN(finalScore.value)){
		scoreMax = finalScore.value;
	} else{
		scoreMax = 100;
	}
});
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
