$(document).ready(function(){

//alert("alert");
$('#startpointid').keyup(function(){ 

var startval = $('#startpointid').val();

var varlen = startval.length;
if(varlen>3){
$.ajax({
    type: 'POST',  
    data: ({p : startval}),
    url:'http://malintha.knnect.com/php/select_vi.php',
    success: function(data) {
        var retstartp = data;
		//alert(retstartp);
		var n = retstartp.split("#");
		selecttown(n);

		}
 });

}
});

$('#destpointid').keyup(function(){ 
var destval = $('#destpointid').val();
var varlen = destval.length;
if(varlen>3){
$.ajax({
    type: 'POST',  
    data: ({p : destval}),
     url:'http://malintha.knnect.com/php/select_vi.php',
    success: function(data) {
        var retstartp = data;
		var n = retstartp.split("#");
		selecttown(n);
		}
 });
}
});
//common method for start and dest
function selecttown(n){
$('#citylist').html("");
$('#destlist').html("");
for(var i=0;i<5;i++){
$('#citylist').append("<li>"+n[i]+"</li>");
$('#destlist').append("<li>"+n[i]+"</li>");
$("#citylist").listview("refresh");
$("#destlist").listview("refresh");
}
}

//each method for put selected value in text fields

$('#citylist').on('click', 'li', function () {
    var start_index = $(this).index();
    var start_text = $(this).text();
    alert('Index is: ' + start_index + ' and text is ' + start_text);
	$('#startpointid').val(start_text);
});

$('#destlist').on('click', 'li', function () {
    var dest_index = $(this).index();
    var dest_text = $(this).text();
    alert('Index is: ' + dest_index + ' and text is ' + dest_text);
	$('#destpointid').val(dest_text);
});


$('#postingform #postsubmit').click(function(){ 
$postdetails = $('#postingform #post_journey').serialize();
$userid = $.cookie('id_cookie');
$post_details_id="user="+$userid+"&"+$postdetails;
alert($post_details_id);
$.ajax({
    type: 'POST',  
    data: ($post_details_id),
    url:'http://malintha.knnect.com/php/post_journey.php',
    success: function(data) {
        var resp_post = data;
		if(resp_post=="success"){
		alert("Journey posted successfully");
		}
		else {
		alert("Journey stopped accidently!");
		}
	}
 });

});

});