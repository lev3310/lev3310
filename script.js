//$(document).ready(function () {
//    $('#switch-player-btn').on('click', function(){
///        $('#switch-player').html() == "1" ? $('#switch-player').html('2') : $('#switch-player').html('1');
//	if ($('#switch-player').html() == "1") {
//			$('#switch-player').html('2');
//			$('#switch-player-btn').css("background-color", "#000000");
//		}
//		else {
//		$('#switch-player-btn').css("background-color", "#ebe8ec");
//			$('#switch-player').html('1');
//		}
//	});
// });

$(document).ready(function () {
	var player = 1;
	var state = "state_1_js";
$('#switch-player-btn').on('click',function(){
	$("chest-input").each(function(i,element){
		$(element).attr('disabled', 'disabled');
	});
	var switchPlayer = $('switch-player');
	if (switchPlayer.html() == "1") {
		$(switchPlayer).html('2');
		$(this).toggleClass("state_1_js").toggleClass(state_2_js);
		player = 2;
		state = "state_1_js";
	}
	$(".chest-input").not(":checked").not("state_1_js").not("state_2_js").slice(0.4).removeAttr("disabled");
});

$('.chest-input').change(function() {
	if (this.checked) {
		$(this).addClass(state);
	}
	else {
		$(this).removeClass(state);
	};
});
});