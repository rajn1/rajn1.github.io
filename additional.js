var main = function(){

$(".header2").mouseover(function(){

var src = "http://i.imgur.com/s0cuDlJ.jpg";

$("table").attr("background", src);
$("h1").text("");


});

$(".header2").mouseleave(function(){

var src = "http://goo.gl/4KL6tZ";

$("table").attr("background", src);
$("h1").text("Additional Information");

});


}




$(document).ready(main);
