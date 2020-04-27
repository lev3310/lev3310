$(document).ready(function () {
	var player = 1;
	var state = "state_1_js";
$('#switch-player-btn').on('click',function(){
	$(".chest-input").each(function(i,element){
		$(element).attr('disabled', 'disabled');
	});
	var switchPlayer = $('#switch-player');
	console.log(switchPlayer.html());
	if (switchPlayer.html() == "1") {
		$(switchPlayer).html('2');
		$(this).toggleClass("state_1_js").toggleClass("state_2_js");
		player = 2;
		state = "state_2_js";
	} else {
            $(switchPlayer).html('1');
            $(this).toggleClass("state_1_js").toggleClass("state_2_js");
            player = 1;
            state = "state_1_js";
        }$(".chest-input").not(":checked").slice(0,4).removeAttr("disabled");
});

$('.chest-input').change(function() {
	if (this.checked) {
		$(this).addClass(state);
	}
	else {
		$(this).removeClass(state);
	};
	});
	$('#last-element').change(function() {
	alert("sorry but, ты проиграл");
	});
});