$(function() {
  $('#win').hide();
  $('#endScreen').hide('fast');
	var counter = 0;
	var seconds = 0;
	$('#endScreen').hide('fast');
	$('#startGame').on("mouseover",function() {
		 $(this).hide();
  		 $('#start').hide();
  var randWidth = random = Math.ceil(Math.random() * 350);
  var randHeight = random = Math.ceil(Math.random() * 350);
  
  $('#win').show('fast');
  $('#win').css('top', randHeight);
  $('#win').css('left', randWidth);
  
   window.setInterval(function(){
      seconds = seconds + 1;
      $('#timer span').html(seconds);
    }, 1000); 
	});

$('#win').on( "mouseover", function() {

  counter = counter + 1;
  $('#counter span').html(counter);
  
  if(counter == 10){
  $('#endScreen').show('medium');
    $('#endCount').html(counter);
    $('#endSeconds').html(seconds);
  }
  
  $('#win').hide('fast');
  $('#start').show('fast');
  
});

$('#start').on( "mouseover", function() {

  $('#win').hide();
  var randWidth = random = Math.ceil(Math.random() * 350);
  var randHeight = random = Math.ceil(Math.random() * 350);
  
  $('#win').show('fast');
  $('#win').css('top', randHeight);
  $('#win').css('left', randWidth);
  $(this).hide('fast');
});

});