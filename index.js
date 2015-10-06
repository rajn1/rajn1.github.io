function h1_fadeIn(t) {

$("h1").fadeOut(2000).delay(500).fadeIn(2000);
setInterval("h1_fadeIn()", t);


};


$(document).ready(function(){

window.onfocus =  h1_fadeIn(4500);

});

