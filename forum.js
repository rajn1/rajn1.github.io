var main = function(){
  
  $('.btn').click(function(){
  
  var post = $('.status-box').val();
  $('<li>').text(post).prependTo('.posts');
  $('.status-box').val('');
  $('.counter').text(2000);
  $('.btn').addClass('disabled');
  });
  $('.btn').addClass('disabled');
  
  $('.status-box').keyup(function(event){
  var postLength = $(this).val().length;
  var charactersLeft = 2000 - postLength;
  $('.counter').text(charactersLeft);
  
  if(charactersLeft < 0){
    $('.btn').addClass('disabled');  
  }
  else if(charactersLeft === 2000){
    $('.btn').addClass('disabled');
  }
  else{
      $('.btn').removeClass('disabled');
  };
  
  });  
  }
 




$(document).ready(main);


