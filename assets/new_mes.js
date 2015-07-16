$(document).ready(function(){
	$('#send').click(function(){
		var name = $('#friend_name').val();
		var msg = $('#msg_body').val();
		$.ajax({
			url:'http://malintha.knnect.com/php/messages/sendmsg.php',
			data:"name="+ name +"&msg="+ msg ,
			dataType:'json',
			success: function(data){
				alert(data);	
				}
		});		//ajax end
	});		//click function end
});

