$(document).ready(function(){

 $userid=$.cookie('id_cookie');
 $data="user="+$userid;
 alert($data);
 alert('hello');
  $.ajax({
     type: 'POST',
	 data: ($data),
	 url: 'http://malintha.knnect.com/php/ba.php',
	 sucess: function(feed){
	    alert('hi');
	 }	
  });
});