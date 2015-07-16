var path_st;
var path_ds;
alert('loaded');
var j_id
//var jsonarray;
//get cookies
//var u_array = [{"j_id":"3","post_time":"Monday  2:8 AM","startingpoint":"kollupitiya","destination":"dematagoda","no_of_seats":"4","vehicle":"bicycle","smoking":"0","leaving_time":"22 September  6:30 PM","per_head_cost":"0","preffered":"","displayname":"malintha","fullname":"malintha franando","possition":"","mobile":"018287223","gender":"","imagename":"u3.jpg"}];
function start(){
j_id = $.cookie('j_id');
alert(j_id);
$.ajax({
    type: 'POST',  
    data: ({detailspage_j_id : j_id}),
    url: 'http://malintha.knnect.com/php/j_details.php',
    success: function(user_detail_feed) {
    	$.mobile.loading("hide");
		
        user_detail_array = jQuery.parseJSON(user_detail_feed);
		$.cookie('j_user_id',user_detail_array[0].u_id);
		alert("owner= cookie set "+$.cookie('j_user_id'));
		fill_j_u_feed(user_detail_array);
		}
 });
}

//loop posts
function fill_j_u_feed(user_detail_array){
 path_st = user_detail_array[0].startingpoint.split(",");
 path_ds = user_detail_array[0].destination.split(",");
//alert(path_st[0]+","+path_st[1]);
//alert(path_ds[0]+","+path_ds[1]);
$('#detail_list').append("<li><a><h2>"+path_st[0]+","+path_st[1]+" To </h2><h2>"+path_ds[0]+","+path_ds[1]+"</h2><h3><small>Posted By </small>"+user_detail_array[0].displayname+"<small> <br>"+user_detail_array[0].possition+" at Virtusa</small></p></h3><p><strong>Departs on "+user_detail_array[0].leaving_time+"</strong></p><br><p><strong>"+user_detail_array[0].no_of_seats+" Seats Available</strong></p><p><strong>Vehicle : "+user_detail_array[0].vehicle+"</strong></p><p><strong>Regestration No : "+user_detail_array[0].reg_no+"</strong></p><br><p><strong>Charges "+user_detail_array[0].per_head_cost+" per one person</strong></p><p><strong>preferences : "+pref(user_detail_array)+"</strong></p></a></li>");

$("#detail_list").listview("refresh");

}

function pref(user_detail_array){
var smoking ="";
var women="";
var seperator ="";
if (user_detail_array[0].smoking == '0') {
smoking = "Smoking";
}
if (user_detail_array[0].preffered == "on") {
women = "Women Only";
}
if (women!=""){
seperator =",";
}
var preff = smoking+seperator+women;
return (preff);
}

$(document).ready(function(){

$("#enroll").click(function(){ 
alert("clicked"); 
var s_user_id = $.cookie('j_user_id');
var j_req_id = $.cookie('id_cookie');
//alert(s_user_id);
alert(j_req_id);
if(($.cookie('id_cookie')) != ($.cookie('j_user_id'))) {
//alert("in if")
$ser_data = "u_id="+s_user_id+"&j_id="+j_id+"&sender_id="+j_req_id;
alert($ser_data); 
$.mobile.loading("show");
$.ajax({
    type: 'POST',  
    data: ($ser_data),
    url: 'http://malintha.knnect.com/php/j_request.php',
    success: function(output1) {
         			$.mobile.loading("hide");
                  	$out=output1;
					alert($out);
					if($out == 'success')
         		  	alert('Request sent to join');
         		  	
                  	}
});
}
else {
alert('Journey is posted by your self');
}
});
$('#view_prof').click(function(jsonarray){
window.location.href = "user profile.html";
//$.mobile.changePage( "profile.html", { transition: "slide" }); 
});


});
$('#map_btn').click(function(jsonarray){
alert("clicked mp btn");
initialize();
route(path_st,path_ds);
//$.mobile.changePage( "profile.html", { transition: "slide" }); 
});

//move pages



