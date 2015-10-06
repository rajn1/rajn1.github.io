var start_time = new Date();
var now_time = new Date();
var sec_passed = 0;
var money_earned = 0;

$(document).ready(function() {

var hourly = prompt("What do you make per hour?");
var minutely = (hourly / 60);
var secondly = (minutely / 60);


$("#hour").text("Hourly Salary: $" + hourly);
$("#minute").text("Wage per minute: $" + minutely.toFixed(2));
$("#second").text("Wage per Second: $" + secondly.toFixed(5));

function update_time() {

now_time = new Date();
sec_passed = (now_time - start_time) / 1000;
money_earned = (sec_passed * secondly);
$('#date').text("You've made $" + money_earned.toFixed(5) + " since logging on");

t = setTimeout(function () {
        update_time()
    }, 100);


};


update_time();


$("#fast").click(function(){

update_time().clearTimeout();

});

$("#two").click(function(){

u$("#second").text("Wage per Second: $" + secondly.toFixed(2));


});

});




