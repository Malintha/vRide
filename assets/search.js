$(document).ready(function(){
$('#startpointid').keyup(function(){ 

var startval = $('#startpointid').val();

var varlen = startval.length;
if(varlen>3){
$.ajax({
    type: 'POST',  
    data: ({p : startval}),
    url: 'http://malintha.knnect.com/php/select_vi.php',
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
    url: 'http://malintha.knnect.com/php/select_vi.php',
    success: function(data) {
        var retstartp = data;
		var n = retstartp.split("#");
		selecttown(n);
		}
 });
}
});


$('#viaid').keyup(function(){ 
var destval = $('#viaid').val();
var varlen = destval.length;
if(varlen>3){
$.ajax({
    type: 'POST',  
    data: ({p : destval}),
    url: 'http://malintha.knnect.com/php/select_vi.php',
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
$('#vialist').html("");
for(var i=0;i<5;i++){
$('#citylist').append("<li>"+n[i]+"</li>");
$('#destlist').append("<li>"+n[i]+"</li>");
$('#vialist').append("<li>"+n[i]+"</li>");
$("#citylist").listview("refresh");
$("#destlist").listview("refresh");
$("#vialist").listview("refresh");
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

$('#vialist').on('click', 'li', function () {
    var via_index = $(this).index();
    var via_text = $(this).text();
    alert('Index is: ' + via_index + ' and text is ' + via_text);
	$('#viaid').val(via_text);
});




});