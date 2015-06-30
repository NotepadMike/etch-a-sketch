var row = 16;
var sideLength = 960/row;

function newGrid(rowAcross, klass, squareSide) {
		for (var i = 0; i < rowAcross*rowAcross; i++) {
			$(klass).append('<div class="grid" id="div'+ i +'" />');	
		};
		$(".grid").css("width", (squareSide - 2));
		$(".grid").css("height", (squareSide - 2));
		$(".grid").css({"border": "1px solid black", "float": "left"});
		$('.grid').mouseenter(function() {
			$(this).css({"background-color": "green"});
		});
};

$(document).ready(function() {
	$('body').prepend('<input id="newGame" type="button" value="New Game" />');
	var $container = $("<div class='container' />");
	$("body").append($container);
	$($container).width("960px");
	$($container).height("960px")
	var $klass = $('.container');
	newGrid(row, $klass, sideLength);
	$('#newGame').on('click', function () {
		$($klass).empty();
		var size = prompt("What size would you like the grid?");
		sideLength = 960/size;
		newGrid(size, $klass, sideLength);
	});
});
	
