$(document).ready(function(){
alert('loaded');
//$.cookie('id_cookie', '3', { expires: 7, path:'/' });
//alert($.cookie('id_cookie'));
$userid = $.cookie('id_cookie');
document.getElementById('smallImage').setAttribute('src', "http://malintha.knnect.com/prof_pics/"+$userid+".jpg");

$('#logout').click(function(){
alert('clicked');
$.removeCookie("id_cookie");
$.removeCookie("disname_cookie");
$.mobile.changePage("login_cookie.html");
});

$details="user="+$userid;
alert($details);

$.ajax({
    type: 'POST',  
    data: ($details),
    url: 'http://malintha.knnect.com/php/prof.php',
    success: function(feed) {
	    alert(feed);
        var jsonarray = jQuery.parseJSON(feed);
		 if(feed){
		   $('#name').html(jsonarray["name"]);
		   $('#position').html(jsonarray["position"]);
		   $('#company').html(jsonarray["company"])
		 }
		
		}	
});

});