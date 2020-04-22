$(document).ready(function () {
    $('#switch-player-btn').on('click', function(){
//        $('#switch-player').html() == "1" ? $('#switch-player').html('2') : $('#switch-player').html('1');
	if ($('#switch-player').html() == "1") {
			$('#switch-player').html('2');
			$('#switch-player-btn').css("background-color", "#000000");
		}
		else {
			$('#switch-player-btn').css("background-color", "#ebe8ec");
			$('#switch-player').html('1');
		}
	});
});