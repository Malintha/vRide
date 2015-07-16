$(document).ready(function(){
$userid = $.cookie('id_cookie');
//$userid= 1;
alert($userid);

  $('#postingform #postsubmit').click(function(){
    $details=$('#postingform #post_journey').serialize();
    $info="user="+$userid+"&"+$details;
	//$info="user="+$userid+"&"+"timeval=20";
	$.mobile.loading("show");
    alert($info);
	
    $.ajax({
     type: 'POST',
	 data:  ($info),
     url: 'http://malintha.knnect.com/php/p_new1.php',
	 success: function(feed){
	          $.mobile.loading("hide");
		      alert(feed);
			  	
	 }
    });	 
  
  });

});   
