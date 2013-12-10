$('#deal').click(function() {
	$('#s1show').css('background-color', "grey");
	$('#s2show').css('background-color', "grey");
	
	var p1_value = Math.floor((Math.random()*13)+2);
	var p2_value = Math.floor((Math.random()*13)+2);
	
	if(p1_value == 14){
		$('#s1show').html("<br>" + "A");
	}
	else if(p1_value == 13){
		$('#s1show').html("<br>" + "K");
	}
	else if(p1_value == 12){
		$('#s1show').html("<br>" + "Q");
	}
	else if(p1_value == 11){
		$('#s1show').html("<br>" + "J");
	}	
	else{
		$('#s1show').html("<br>" +p1_value);
	}
	
	if(p2_value == 14){
		$('#s2show').html("<br>" + "A");
	}
	else if(p2_value == 13){
		$('#s2show').html("<br>" + "K");
	}
	else if(p2_value == 12){
		$('#s2show').html("<br>" + "Q");
	}
	else if(p2_value == 11){
		$('#s2show').html("<br>" + "J");
	}	
	else{
		$('#s2show').html("<br>" +p2_value);
	}	
	
	


		$('#canvas').css('background-color', chosen_color);
	
	$('.textures').css('background-color', chosen_color);

});