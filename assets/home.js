$(document).ready(function(){

$.mobile.loading( "show" );
//var jsonarray;
//get cookies
//$.cookie('id_cookie','3');

$userid = $.cookie('id_cookie');
$username= $.cookie('disname_cookie');
$('#content').append("You are logged in as "+$username+" ("+$userid+")");

$.ajax({
    type: 'POST',  
    data: $userid,
    url: 'http://malintha.knnect.com/php/home.php',
    success: function(feed) {
    	$.mobile.loading("hide");
        jsonarray = jQuery.parseJSON(feed);
		//alert(jsonarray);
		fillfeed(jsonarray);
		}
 });
noti();

function noti(){
$.ajax({
    type: 'POST',  
    data: {u_id: $userid},
    url: 'http://malintha.knnect.com/php/count_noti.php',
    success: function(count_noti) {
    	//$.mobile.loading("hide");
       
		$.cookie('noti_count',count_noti);
		
		if($.cookie('noti_count')!=0){
		$("#noti").html("<font style='color:red;'>"+$.cookie('noti_count')+"</font>");
				
		}
		
		}
 });
}
//loop posts
function fillfeed(jsonarray){
for(var i=0;i<jsonarray.length;i++){
//var path_st_h = jsonarray[i].startingpoint.split(",");
//var path_ds_h = jsonarray[i].destination.split(",");
//alert(jsonarray[i].startingpoint);
$('#ullist').append("<li><a><p><span class='ui-li-count'>"+jsonarray[i].no_of_seats+"</span></p><h3>"+jsonarray[i].startingpoint+" To <br>"+jsonarray[i].destination+ "<br> On "+jsonarray[i].leaving_time+ "</h3><p>Posted By <strong>"+ jsonarray[i].displayname+ "</strong></p><p>Women Only : "+jsonarray[i].women+" |  Smoke : "+jsonarray[i].smoking+"</p><p>Per Head "+jsonarray[i].per_head+"</p><br><p><strong>Posted on </strong>"+jsonarray[i].post_time+"</p></a></li>");
$("#ullist").listview("refresh");

}

}
$('#ullist').on('click', 'li', function () {
var index_feed = $(this).index();

$.cookie('j_id',jsonarray[index_feed].j_id);

alert($.cookie('j_id'));
$.mobile.loading( "show" );
window.location.href = "journey_details.html";
$.mobile.loading( "hide" );


});



//move pages
$('#nav_profile').click(function(jsonarray){
alert("clicked");
$.mobile.changePage( "profile.html", { transition: "slide" }); 
});

$(document).delegate('#opendialog', 'click', function() {
  //function alert_details(){
  $('<div>').simpledialog2({
    mode: 'button',
    headerText: 'Click One...',
    headerClose: true,
    buttonPrompt: 'Enroll with the Journey?',
    buttons : {
      'Yes': {
        click: function () { 
          $('#buttonoutput').text('OK');

        }
      },
	  'No': {
        click: function () { 
          $('#buttonoutput').text('Cancel');
        },
        icon: "delete",
        theme: "c"
      },
      'More Details': {
        click: function () { 
          $('#buttonoutput').text('Cancel');
        },
        icon: "grid",
        theme: "c"
      }
    }
  });
  //}
});
});