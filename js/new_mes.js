function sendMsg(){
		$.mobile.loading("show");
		//var name = $('#friend_name').val();
		//var msg = $('#msg_body').val();
		//alert($.cookie('id_cookie'));
		$data={name: $('#friend_name').val(),msg: $('#msg_body').val(),u_id:$.cookie('id_cookie')};
		alert($data);
		$.ajax({
			type: 'POST',
			url: "http://malintha.knnect.com/php/messages/sendmsg.php",
			data: $data,		
			//dataType: 'json',
			success: function (data){
				$.mobile.loading("hide");
				$.mobile.changePage("home.html");
				alert(data);
			  }
		});return false;		
}


function lookup(inputString) {
	if(inputString.length == 0) {
		// Hide the suggestion box.
		$('#suggestions').hide();
		$.mobile.loading("hide");
	} else {
		$.mobile.loading("show");
		$.post("http://malintha.knnect.com/php/messages/namesearch.php", {queryString: ""+inputString+""}, function(data){
			if(data.length >0) {
				$('#suggestions').show();
				$('#suggestions').html(data);
				$.mobile.loading("hide");

			}
		});
	}
} // lookup
	
function fill(thisValue) {
	$('#friend_name').val(thisValue);
	setTimeout("$('#suggestions').hide();", 200);
}
