$(document).ready(function(){
$('#dloading').click(function(){
alert('post');
$.mobile.loading( "show" );
$('#content').load('http://stackoverflow.com/');

$.mobile.loading( "hide" );
});

});