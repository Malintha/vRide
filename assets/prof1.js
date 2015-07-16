$(document).ready(function(){


alert('loaded');
alert($.cookie('id_cookie'));
$userid = $.cookie('id_cookie');
alert($userid);
document.getElementById('smallImage').setAttribute('src', "http://malintha.knnect.com/prof_pics/"+$userid+".jpg");

$('#logout').click(function(){
alert('clicked');
$.removeCookie("id_cookie");
$.removeCookie("disname_cookie");
$.mobile.changePage("login_cookie.html");
});

});