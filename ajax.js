$(document).ready(function(){

var FREQ = 10000;

function showFreq(){

$("#freq").html("Page Refreshes every " + FREQ/1000 + " second(s).");


};

function getTimeAjax(){

$('#updatedTime').load("time.php");

}


// Code to ensure AJAX calls repeat

function callAJAX() {

setTimeout(function(){

getAJAXData();
callAJAX();
}, FREQ);

}

getAJAXData();
callAJAX();
getTimeAjax();


function getAJAXData() {
$.ajax({

url: "finishers.xml",
cache: false,
dataType: "xml",
success: function(xml){

$("#list").empty();

$(xml).find("runner").each(function(){

var runner = '<li>' + $(this).find("fname").text() + ' ' +
$(this).find("lname").text() + ': ' + $(this).find("time").text(); + '</li>';

$("#list").append(runner);


}); } }); }

// Code transcribing new runner data into JSON file0
	$("#addRunner").submit(function(){
		return false;
	});
	
	$('#btnSave').click(function() {

		var data = $("#addRunner :input").serializeArray();

		$.post($("#addRunner").attr('action'), data, function(json){
			
			if (json.status == "fail") {
				alert(json.message);
			}
			if (json.status == "success") {
				alert(json.message);
				clearInputs();
			}
		}, "json");

	});	

	function clearInputs(){
		$("#txtFirstName").val('');
		$("#txtLastName").val('');
		$("#ddlGender").val('');
		$("#txtMinutes").val('');
		$("#txtSeconds").val('');
	}

});