$(document).ready(function(){
	
	//sticky menu
	
	$(".js--service").waypoint(function(direction){
		if (direction = = down){
			$("nav").addClass("sticky")
		}else{
			$("nav").removeClass("")
		}
	});
	
	//MIXITUP (PORTFOLIO SRCTION)
	var mixer = mixitup('.juwel');
});