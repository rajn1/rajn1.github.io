	var main = function(){
	
	var color_num = Math.floor(Math.random() * 10);
	
	if(color_num > 8) {
	
	$("h3").css({"color":"yellow"});
	
	}
	else if(color_num > 5) {
	
	$("h3").css({"color":"green"});
	
	}
	
	else if(color_num > 2) {
	
	$("h3").css({"color":"aqua"});
	
	};
	
	$(document).keypress(function(event){
 
		if(event.which === 117) {
				$("h1").toggleClass("underline");					
			}
		});	
	
	$('.expand').click(function() {
	
		 $("li").toggleClass("expanded");
		 
		 if( $("li").hasClass("expanded")){
		 
         $('.nav').animate({ height: "400px"},300)
         $('.expand').html() = "Detract";
    }
    	else{
    	$('.nav').animate({ height: "50px"},300);
		};
});


	$('.fx').click(function(){
	
	$.fx.off = true;
	
	});

	$("h1").hover(
	
	function(){
	
	$("h1").text("Dad of the Year");
	
	}, 
	
	function(){
	
	$("h1").text("Laks Narayan");
	
	});

	$("h3").hover(function(){
	
	
	$("h3").text("(Promoted in 2002)");
	
	},
	
	function(){
	
	$("h3").text("Father: 1996 - Present");
	});
	
	// Aggressiveness
	
	$("#pic1").hover(function(){
	
	capt(this, 1);
	
	});
	
	// Motorcycle
	
	$("#pic2").hover(function(){
	
	capt(this, 2);
	
	});
	
	// Ashwin
	
	$("#pic3").hover(function(){
	
	capt(this, 3);
	
	});
	
	// Nita
	
	$("#pic4").hover(function(){
	
	capt(this, 4);
	
	});

	// Tie
	
	$("#pic5").hover(function(){
	
	capt(this, 5);
	
	});
	
	// Restaurant
	
	$("#pic6").hover(function(){
	
	capt(this, 6);
	
	});
	
		// Food
	
	$("#pic7").hover(function(){
	
	capt(this, 7);
	
	});
	
	   // Movie
	
	$("#pic8").hover(function(){
	
	capt(this, 8);
	
	});

		// Barney
	
	$("#pic9").hover(function(){
	
	$(".c9").css({"display": "block"});
	$("#pic9").css({"background":"url('http://i.imgur.com/XF0QIIE.jpg')"});
	
	},
	
	function(){
	
	$(".c9").css({"display": "none"});
	$("#pic9").css({"background":"url('http://i.imgur.com/FnFV6IF.jpg')"});

	
	});
	
	   // Staples
	
	$("#pic10").hover(function(){
	
		capt(this, 10);
	
	});

		// Then
	
	$("#pic11").hover(function(){
	
	capt(this, 11);
	
	});
	
	   // Now
	
	$("#pic12").hover(function(){
	
	capt(this, 12);
	
	});

}


function capt(pic, num) {

	var caption = ".c" + num;

	$(pic).hover(function(){
	
	$(caption).css({"display": "block"});
	
	},
	
	function(){
	
	$(caption).css({"display": "none"});
	
	});



};

$(document).ready(main);