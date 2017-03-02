$(document).ready(function(){

	var lockChar = false;
	var character;

	$(document).on("click", ".imageBox", function() {
		
		if(!lockChar) {

			character = $(this).detach();
			character.appendTo($('#userChar'));
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

		



	});

});