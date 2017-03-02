$(document).ready(function(){

	var lockChar = false;
	var charChosen = false;

	$(document).on("click", ".imageBox", function() {
		
		if(!charChosen && !lockChar) {

			var character = $(this).detach();
			character.appendTo($('#userChar'));
			charChosen = true;
			lockChar = true;

			if ($(this).attr('id') !== 'yoda') {
				$('#yoda').css("background-color", "red");
				$('#yoda').css("border-color", "black");
				var enemy = $('#yoda').detach();
				enemy.appendTo($('#enemies'));
			}

			if ($(this).attr('id') !== 'obiwan') {
				$('#obiwan').css("background-color", "red");
				$('#obiwan').css("border-color", "black");
				var enemy = $('#obiwan').detach();
				enemy.appendTo($('#enemies'));
			}

			if ($(this).attr('id') !== 'darthvadar') {
				$('#darthvadar').css("background-color", "red");
				$('#darthvadar').css("border-color", "black");
				var enemy = $('#darthvadar').detach();
				enemy.appendTo($('#enemies'));
			}

			if ($(this).attr('id') !== 'darthmaul') {
				$('#darthmaul').css("background-color", "red");
				$('#darthmaul').css("border-color", "black");
				var enemy = $('#darthmaul').detach();
				enemy.appendTo($('#enemies'));
			}	

		}

		else if (charChosen === true) {
			$(this).css('background-color', 'black');
			$(this).css('border-color', 'green');
			$(this).css('color', 'white');
			var chosenEnemy = $(this).detach();
			chosenEnemy.appendTo($('#defender'));
			charChosen = false;
		}
	});

	$('.fight-button').on('click', function() {
		var yodaHP = '50';
		$('#yodaHP').html(yodaHP);
		console.log(yodaHP);
	});
});