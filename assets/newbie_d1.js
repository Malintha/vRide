$(document).ready(function(){
//$userid = $.cookie('id_cookie');
$userid= 15;
alert($userid);

  $('#postingform #postsubmit').click(function(){
    $info="user="+$userid;
	$.mobile.loading("show");
    alert($info);
	
    $.ajax({
     type: 'POST',
	 data:  ($info),
     url: 'http://malintha.knnect.com/php/p_new.php',
	 success: function(feed){
	          $.mobile.loading("hide");
		      alert(feed);
			  	
	 }
    });	 
  
  });

});   
