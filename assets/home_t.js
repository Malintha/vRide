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

//loop posts
function fillfeed(jsonarray){
//alert(jsonarray.length);
for(var i=0;i<5;i++){

$('#ullist').append("<li><a><p><span class='ui-li-count'>"+jsonarray[i].no_of_seats+"</span></p><h3>"+jsonarray[i].startingpoint+" to "+jsonarray[i].destination+ "<br> On "+jsonarray[i].leaving_time+ "</h3><p>Posted By <strong>"+ jsonarray[i].displayname+ "</strong></p><p>Women Only : "+jsonarray[i].women+" |  Smoke : "+jsonarray[i].smoking+"</p><p>Per Head "+jsonarray[i].per_head+"</p><br><p><strong>Posted on </strong>"+jsonarray[i].post_time+"</p></a></li>");
$("#ullist").listview("refresh");

}

}
$('#ullist').on('click', 'li', function () {
var index_feed = $(this).index();

$.cookie('j_id',jsonarray[index_feed].j_id);

alert($.cookie('j_id'));
$.mobile.loading( "show" );
$.mobile.changePage("journey_details.html");
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