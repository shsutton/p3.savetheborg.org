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
		$('#p1score').html("<h3>Spades:" + "<br>" + p1_points + "</h3>");
	}
	
	if(p1_value < p2_value){
		p2_points = p2_points + 1;
		$('#p2score').html("<h3>Hearts:" + "<br>" + p2_points+"</h3>");
	}
	
	if(p1_value == 14){
		$('#s1show').html("<h1><br>" + "A" + "&spades; </h1>");
	}
	else if(p1_value == 13){
		$('#s1show').html("<h1><br>" + "K" + "&spades; </h1>");
	}
	else if(p1_value == 12){
		$('#s1show').html("<h1><br>" + "Q" + "&spades; </h1>");
	}
	else if(p1_value == 11){
		$('#s1show').html("<h1><br>" + "J" + "&spades; </h1>");
	}	
	else{
		$('#s1show').html("<h1><br>" +p1_value + "&spades; </h1>");
	}
	
	if(p2_value == 14){
		$('#s2show').html("<h1><br>" + "A" + "&hearts; </h1>");
	}
	else if(p2_value == 13){
		$('#s2show').html("<h1><br>" + "K" + "&hearts; </h1>");
	}
	else if(p2_value == 12){
		$('#s2show').html("<h1><br>" + "Q" + "&hearts; </h1>");
	}
	else if(p2_value == 11){
		$('#s2show').html("<h1><br>" + "J" + "&hearts; </h1>");
	}	
	else{
		$('#s2show').html("<h1><br>" +p2_value + "&hearts; </h1>");
	}	

	if(p2_points == 13){
		$('#deal').html("<b>Hearts WIN!</b><br> Click to play again.");		
		p1_points = 0;
		p2_points = 0;
		$('#p2score').html("<h3>Hearts:" + "<br>" + 0 +"</h3>");
		$('#p1score').html("<h3>Spades:" + "<br>" + 0 +"</h3>");
	}
	if(p1_points == 13){
		$('#deal').html("<b>SPADES WIN!</b><br> Click to play again.");
		p1_points = 0;
		p2_points = 0;
		$('#p2score').html("<h3>Hearts:" + "<br>" + 0 +"</h3>");
		$('#p1score').html("<h3>Spades:" + "<br>" + 0+"</h3>");
		
	}
});

/*$('#deal').click(function() {
	if(var x == 0){
		$('gameName').html("hgjhgjhgjh");
	}
}*/