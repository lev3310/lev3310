$(document).ready(function () {
    $('#switch-player-btn').on('click', function(){
//        $('#switch-player').html() == "1" ? $('#switch-player').html('2') : $('#switch-player').html('1');
	if ($('#switch-player').html() == "1") {
			$('#switch-player').html('2');
			$('#switch-player-btn').css("background-color", "#ff0000");
		}
		else {
			$('#switch-player-btn').css("background-color", "#0014ff");
			$('#switch-player').html('1');
		}
	});
});