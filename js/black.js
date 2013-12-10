	var p1_points = 0;
	var p2_points = 0;
	var x = 0;
	var y = 0;

$('#deal').click(function() {
	$('#s1show').css('background-color', "grey");
	$('#s2show').css('background-color', "grey");
	$('#deal').html("<h2>Flip</h2>");	
	
	var p1_value = Math.floor((Math.random()*13)+2);
	var p2_value = Math.floor((Math.random()*13)+2);

	
	if(p1_value > p2_value){
		p1_points = p1_points + 1;
		$('#p1score').html("Spades:" + "<br>" + p1_points);
	}
	
	if(p1_value < p2_value){
		p2_points = p2_points + 1;
		$('#p2score').html("Hearts:" + "<br>" + p2_points);
	}
	
	if(p1_value == 14){
		$('#s1show').html("<br>" + "A" + "&spades;");
	}
	else if(p1_value == 13){
		$('#s1show').html("<br>" + "K" + "&spades;");
	}
	else if(p1_value == 12){
		$('#s1show').html("<br>" + "Q" + "&spades;");
	}
	else if(p1_value == 11){
		$('#s1show').html("<br>" + "J" + "&spades;");
	}	
	else{
		$('#s1show').html("<br>" +p1_value + "&spades;");
	}
	
	if(p2_value == 14){
		$('#s2show').html("<br>" + "A" + "&hearts;");
	}
	else if(p2_value == 13){
		$('#s2show').html("<br>" + "K" + "&hearts;");
	}
	else if(p2_value == 12){
		$('#s2show').html("<br>" + "Q" + "&hearts;");
	}
	else if(p2_value == 11){
		$('#s2show').html("<br>" + "J" + "&hearts;");
	}	
	else{
		$('#s2show').html("<br>" +p2_value + "&hearts;");
	}	

	if(p2_points == 13){
		$('#gameName').html( "<h1>&spades; &clubs; Game Over HEARTS WIN Game Over &diams; &hearts;</h1><br>");
		$('#deal').html("Click to play again.");
		p1_points = 0;
		p2_points = 0;
		$('#p2score').html("Hearts:" + "<br>" + 0);
		$('#p1score').html("Spades:" + "<br>" + 0);
	}
	if(p1_points == 13){
		$('#deal').html("<b>SPADES WIN!</b><br> Click to play again.");
		p1_points = 0;
		p2_points = 0;
		$('#p2score').html("Hearts:" + "<br>" + 0);
		$('#p1score').html("Spades:" + "<br>" + 0);
		
	}
});

/*$('#deal').click(function() {
	if(var x == 0){
		$('gameName').html("hgjhgjhgjh");
	}
}*/