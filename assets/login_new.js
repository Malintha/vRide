$(document).ready(function(){
   
    $('#submitbtn').click(function(){
		$vari = $('#signinform #signin').serialize();
		$.mobile.loading("show");
		alert($vari);
     
	 $.ajax({
	    type: 'POST',
		data: ($vari),
		url: 'http://malintha.knnect.com/php/new_badges.php',
		
		success: function(data) {
		  $.mobile.loading("hide");
		  alert(data);
		}
		
	 });
  });
});











