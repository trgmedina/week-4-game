$(document).ready(function(){

	var lockChar = false;
	var charChosen = false;
	var enemyChosen = false;
	var userCharID = '';
	var enemyID = '';
	var enemyName = '';
	var enemyHP;
	var userHP;
	var enemyCt = 3;
	var characters = {
		attackPts: {
			obiwan: 10,
			yoda: 20,
			darthmaul: 15,
			darthvadar: 25
		},
		healthPts: {
			obiwan: 120,
			yoda: 180,
			darthmaul: 140,
			darthvadar: 200
		}
	};
	var playerAtkPts = 0;
	var enemyAtkPts = 0;

	$('#obiwanHP').text(characters.healthPts.obiwan);
	$('#yodaHP').text(characters.healthPts.yoda);
	$('#darthmaulHP').text(characters.healthPts.darthmaul);
	$('#darthvadarHP').text(characters.healthPts.darthvadar);

	$(document).on("click", ".imageBox", function() {
		
		if(!charChosen && !lockChar) {

			userCharID = $(this).attr('id');
			console.log(userCharID);

			//sets up player's attack 
			if (userCharID === 'yoda') {
				playerAtkPts = characters.attackPts.yoda;
				userHP = characters.healthPts.yoda;
			}
			else if (userCharID === 'obiwan') {
				playerAtkPts = characters.attackPts.obiwan;
				userHP = characters.healthPts.obiwan;
			}
			else if (userCharID === 'darthvadar') {
				playerAtkPts = characters.attackPts.darthvadar;
				userHP = characters.healthPts.darthvadar;
			}
			else {
				playerAtkPts = characters.attackPts.darthmaul;
				userHP = characters.healthPts.darthmaul;
			}

			console.log(playerAtkPts);

			//Moves player's chosen character under "Your Character"
			var character = $(this).detach();
			character.appendTo($('#userChar'));
			charChosen = true;
			lockChar = true;

			//Chnages non-selected characters to enemies to choose from
			if (userCharID !== 'yoda') {
				$('#yoda').css("background-color", "red");
				$('#yoda').css("border-color", "black");
				var enemy = $('#yoda').detach();
				enemy.appendTo($('#enemies'));
			}

			if (userCharID !== 'obiwan') {
				$('#obiwan').css("background-color", "red");
				$('#obiwan').css("border-color", "black");
				var enemy = $('#obiwan').detach();
				enemy.appendTo($('#enemies'));
			}

			if (userCharID !== 'darthvadar') {
				$('#darthvadar').css("background-color", "red");
				$('#darthvadar').css("border-color", "black");
				var enemy = $('#darthvadar').detach();
				enemy.appendTo($('#enemies'));
			}

			if (userCharID !== 'darthmaul') {
				$('#darthmaul').css("background-color", "red");
				$('#darthmaul').css("border-color", "black");
				var enemy = $('#darthmaul').detach();
				enemy.appendTo($('#enemies'));
			}	
		}

		//Sets up chosen eneny
		else if (charChosen === true && $(this).attr('id') !== userCharID) {
			
			var enemy = $(this);
			enemyID = $(this).attr('id');

			function setUpEnemy() {
				enemy.css('background-color', 'black');
				enemy.css('border-color', 'green');
				enemy.css('color', 'white');
				var chosenEnemy = enemy.detach();
				chosenEnemy.appendTo($('#defender'));
				charChosen = false;
				enemyChosen = true;

				//sets up enemy's attack
				if (enemyID === 'yoda') {
					enemyAtkPts = characters.attackPts.yoda;
					enemyName = 'Yoda';
					enemyHP = characters.healthPts.yoda;
				}
				else if (enemyID === 'obiwan') {
					enemyAtkPts = characters.attackPts.obiwan;
					enemyName = 'Obi Wan Kenobi';
					enemyHP = characters.healthPts.obiwan;
				}
				else if (enemyID === 'darthvadar') {
					enemyAtkPts = characters.attackPts.darthvadar;
					enemyName = 'Darth Vadar';
					enemyHP = characters.healthPts.darthvadar;
				}
				else {
					enemyAtkPts = characters.attackPts.darthmaul;
					enemyName = 'Darth Maul';
					enemyHP = characters.healthPts.darthmaul;
				}	

				//console.log(enemy, enemyAtkPts, enemyHP);
			}

			setUpEnemy();
		}
	});

	function newEnemy() {
		charChosen = true;
	}

	$('.fight-button').on('click', function() {
		if (enemyChosen) {

			if (enemyHP > 0 && userHP > 0) {
				
				enemyHP = enemyHP - playerAtkPts;
				if (enemyHP > 0) {
					$('#' + enemyID + 'HP').text(enemyHP);
					$('#userAtk-summary').text('You attacked ' + enemyName + ' for ' + playerAtkPts + ' damage.');
					$('#enemyAtk-summary').text(enemyName + ' attacked you back for ' + enemyAtkPts + ' damage.');
				}
				else {
					$('#' + enemyID).remove();	

					if (enemyCt > 1) {
						$('#userAtk-summary').text('You have defeated ' + enemyName + '!');
						$('#enemyAtk-summary').text('You can choose to fight another enemy.');
						enemyCt--;
					}	
					else {
						$('#userAtk-summary').text('You have defeated ' + enemyName + '!');
						$('#enemyAtk-summary').text('You won! Game Over!');
						$('.restart-button').css('visibility', 'visible');
					}

					newEnemy();			
				}

				userHP = userHP - enemyAtkPts;
				if (userHP > 0) {
					$('#' + userCharID + 'HP').text(userHP);
				}
				else {
					$('#' + userCharID + 'HP').text('0');
					$('#userAtk-summary').text('You have been defeated.');
					$('#enemyAtk-summary').text('Game over!');
					$('.restart-button').css('visibility', 'visible');
				}

				playerAtkPts = Math.floor(playerAtkPts + (playerAtkPts/2));
			}
		}
	});

	$('.restart-button').on('click', function() {
		location.reload();
	});
});