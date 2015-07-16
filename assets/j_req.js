$(document).ready(function(){
alert('loaded');
//alert($.cookie('id_cookie'));
var j_req_u_id = $.cookie('id_cookie');

$.ajax({
    type: 'POST',  
    data: j_req_u_id ,
    url: 'http://malintha.knnect.com/php/req.php',
    success: function(j_req_feed) {
	
	json_req_feed = jQuery.parseJSON(j_req_feed);
	alert(json_req_feed.length);
	alert('malin');
	
	post(json_req_feed);
	}
	
	});
	
	function post(json_req_feed){
	alert(json_req_feed[0].sender_name);
	for(var i=0; i<json_req_feed.length; i++) {
	$('#detail_list').append("<li><h3>"+json_req_feed[i].sender_name+ " wants to Join your journey</h3><p>Journey : <strong> From "+json_req_feed[i].startingpoint+" to "+json_req_feed[i].destination+"</strong></p>");
	$('#detail_list').append("<table><tr><td><input type='button' value='Accept' data-mini='true'></td><td><input type='button' value='Ignore' data-mini='true'></td><td><input type='button' value='View profile' data-mini='true' data-theme='a'></td></tr></table>");");
	//$('#detail_list').append("<input type='button' value='test' data-theme='a'></li>");
	
				}
				$("#detail_list").listview("refresh");
	}
});