$(document).ready(function(){
//$userid = $.cookie('id_cookie');
$userid= 11;
alert($userid);

  $('#postingform #postsubmit').click(function(){
    $info="user="+$userid;
    alert($info);
    $.ajax({
     type: 'POST',
	 data:  ($info),
     url: 'http://malintha.knnect.com/php/Badges/newbie_dri.php',
	 success: function(feed){
		      alert(feed);
			  	
	 }
    });	 
  
  });

});   
