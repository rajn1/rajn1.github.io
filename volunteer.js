var main = function(){


$(".header1").hover(function(){

$(".KC").slideDown(500);

}, function(){

$(".KC").slideUp(500);

});


$(".header2").hover(function(){

$(".DT").slideDown(500);

}, function(){

$(".DT").slideUp(500);

});

$(".header3").hover(function(){

$(".BOG").slideDown(500);

}, function(){

$(".BOG").slideUp(500);

});

$(".header4").hover(function(){

$(".DPL").slideDown(500);
// alert("Still under development");

}, function(){

$(".DPL").slideUp(500);

});


};



$(document).ready(main);