var num_sort = function(x,y) {
 return y - x;
 }




$(document).ready(function(){

var final_num = 0;
var hard = false;
var countdown = 100;
var name = prompt("What's your name?");

var array1 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
var scores = new Array();



$("#hard").click(function(){

array1 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40);
var hard = true;

});

$("#hit").click(function() {

var rando = Math.floor(Math.random() * (array1.length - 1));
var add = array1[rando];
final_num = final_num + add;
countdown = 100 - final_num;
$("h1").text("Current Score: " + final_num);

if(countdown < 0) {

$("#countdown").text("Sorry, you lost... Reset!");
countdown = 100;
final_num = 0;


}
else if(countdown == 0){

$("#countdown").text("Perfect Score! You're a winner!");


}
else{

$("#countdown").text("You're " + countdown + " points away from a win!");
};

});

$("#done").click(function(){

$("#countdown").text("Your final score is: " + countdown);
if(countdown < 100 && final_num != 0){
scores.push(final_num);
}
scores.sort(num_sort);
countdown = 100;
final_num = 0;

if(hard){
$("#first").text(name + ": " + scores[0] + "[HARD");
}
else{
$("#first").text(name + ": " + scores[0]);
}

if(scores.length == 2){
$("#second").text(name + ": " + scores[1]);
}
else if(scores.length > 1){
$("#second").text(name + ": " + scores[1]);
$("#third").text(name + ": " + scores[2]);
};
	

});

$("#reset").click(function(){

array1 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
countdown = 0;
final_num = 0;
$("#countdown").text("");
name = prompt("What's your name?");



});

$(".btn").hover(function(){

$(this).css({"color" : "green"})

}, function(){

$(this).css({"color" : "#00FFFF"})

});

});
