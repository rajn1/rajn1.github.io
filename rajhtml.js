	
	
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
	
	$("h1").text("Student, Computer Programmer, and Philanthropist");
	
	}, 
	
	function(){
	
	$("h1").text("Raj Narayan");
	
	});

	$("h3").hover(function(){
	
	
	$("h3").text("Class of 2018");
	
	},
	
	function(){
	
	$("h3").text("Student of computer Science and Business Administration at Northeastern University ");
	});
	
	// Work Experience -->
	
	$(".officeMenu").hover(function(){

	$(".volunteerMenu").fadeTo(500, 0);
	$(".additionalMenu").fadeTo(500, 0);	
	$(".officeMenu").fadeTo(100, 0.4);


	$("h3").text("A look at all the (1) jobs I've done so far");

	},
	
	function(){
	
	$(".volunteerMenu").fadeTo(500, 1);
	$(".additionalMenu").fadeTo(500, 1);	
	$(".officeMenu").fadeTo(100, 1);


	$("h3").text("Student of computer Science and Business Administration at Northeastern University ");

	});
	
	// Volunteer Experience -->
	
	$(".volunteerMenu").mouseover(function(){

	$(".officeMenu").hide(500);
	$(".additionalMenu").hide(500);
	$(".volunteerMenu").fadeTo(100, 0.4);

	$("h3").text("Leadership throughout the community!");

	});
	
	$(".volunteerMenu").mouseleave(function(){

	$(".officeMenu").show(500);
	$(".additionalMenu").show(500);
	$(".volunteerMenu").fadeTo(100, 1);

	$("h3").text("Student of computer Science and Business Administration at Northeastern University ");

	});


	//  Additional Experience -->
	$(".additionalMenu").hover(function(){

	$(".volunteerMenu").fadeTo(500,0);
	$(".officeMenu").fadeTo(500,0);
	$(".additionalMenu").fadeTo(100, 0.4);
	$("h3").text("Everything else you need to know");

	},
	
	function(){
	
	$(".volunteerMenu").fadeTo(500,1);
	$(".officeMenu").fadeTo(500,1);
	$(".additionalMenu").fadeTo(100, 1);

	$("h3").text("Student of computer Science and Business Administration at Northeastern University ");

	});
	

}


$(document).ready(main);