var msgJson="";

function sendNewMsg(){
	$('#new_msg').html('<div data-role="content" id="content">\
<div id="profile"> \
</div>\
<input type="text" placeholder="Friend\'s name" id="friend_name" onkeyup="lookup(this.value);" onblur="fill();">\
<table>\
<tr><td><input type="button" value="Search" data-icon="search" id="friend_search" data-mini="true"></td></tr>\
</table>\
<input type="text" height="40%" id="msg_body" placeholder="Enter message">\
<table>\
<tr><td><input type="button" value="Send" data-icon="grid" id="send" onClick="sendMsg()"></td></tr>\
</table>\
<div id="suggestions" align="left" style=" border-radius: 10px; list-style-type: none; position: absolute; height:auto; width:auto; z-index: 1; right:17px; left: 17px; top: 280px; border:1px solid #CCCCCC;">\
	</div>').trigger("create");

	$('#suggestions').hide();
}


function mainInbox(){
	$("#noti").html($.cookie('noti_count'));
	$.mobile.changePage("inbox.html");	
	$('#new_msg').html(' ').trigger("create");
	$('#newMsgBtn').html('<input type="button" onclick="sendNewMsg()" value="New message" data-icon="edit">').trigger("create");
		convercations();
}

function convercations(){
		$('#newMsgBtn').html('<input type="button" onclick="sendNewMsg()" value="New message" data-icon="edit">').trigger("create");
		$.mobile.loading("show");
		$data={u_id:$.cookie('id_cookie')};
		//alert($data);
		$.ajax({
			type: 'POST',
			url: "http://malintha.knnect.com/php/messages/newmsg.php",
			data: $data,		
			//dataType: 'json',
			success: function (data){
				$.mobile.loading("hide");
				msgJson=jQuery.parseJSON(data);
				//alert(data);
				alert (msgJson.length);
				feedConvertion();
			  }
		});return false;		
}

function feedConvertion(){
			//alert(msgJson.length);
			senders = new Array();
			feedHtml='<ul data-role="listview" data-theme="c" data-inset="true">';			
			
			for(var i=0; i<msgJson.length; i++){
					if(msgJson[i].reciver==$.cookie('id_cookie')&&msgJson[i].msgstate=='u'){
					try{
							if(senders.indexOf(msgJson[i].sender)==-1){
									feedHtml=feedHtml+'<li  data-icon="star"><a href="#" id='+msgJson[i].sender+' onClick="expandConversion(this.id)"><img src="http://malintha.knnect.com/prof_pics/'+msgJson[i].sender+'.jpg"/>From : <b>'+ msgJson[i].sender_name +'</b><br /><br /><p><font size="3">'+msgJson[i].body+'</font></p><br/><p align="right">'+msgJson[i].sendtime+'</p></a></li>';
									var j=	senders.length;							
									senders[j]=	msgJson[i].sender;
							}
				}catch(err){
					}
				}
			}

						for(var i=0; i<msgJson.length; i++){
					if(msgJson[i].reciver==$.cookie('id_cookie')&&msgJson[i].msgstate=='r'){
					try{
							if(senders.indexOf(msgJson[i].sender)==-1){
									feedHtml=feedHtml+'<li><a href="#" id='+msgJson[i].sender+' onClick="expandConversion(this.id)"><img src="http://malintha.knnect.com/prof_pics/'+msgJson[i].sender+'.jpg" />From : <b>'+ msgJson[i].sender_name +'</b><br /><br /><p><font size="3">'+msgJson[i].body+'</font></p><br/><p align="right">'+msgJson[i].sendtime+'</p></a></li>';
									var j=	senders.length;							
									senders[j]=	msgJson[i].sender;
							}
				}catch(err){
					}
				}
			}
			feedHtml=feedHtml+'</ul>';
			$('#new_msg').html(feedHtml).trigger("create");
}

function expandConversion(id){
	alert(id);
	changeMsgState(id);
			feedHtml='<ul data-role="listview" data-theme="c" data-inset="true">';			
			
			for(var i=(msgJson.length-1); i>=0; i--){
					if(msgJson[i].reciver==id||msgJson[i].sender==id){
					try{
					if(msgJson[i].sender_name=='Me'){
							feedHtml=feedHtml+'<li data-icon="false"><a href="#"><b>'+ msgJson[i].sender_name +'</b><br /><br /><p><font size="3">'+msgJson[i].body+'</font></p><br/><p align="right">'+msgJson[i].sendtime+'</p></a></li>';
					}else{
							feedHtml=feedHtml+'<li data-icon="false"><a href="#" style="background-color:#F5FDFF"><b>'+ msgJson[i].sender_name +'</b><br /><br /><p><font size="3">'+msgJson[i].body+'</font></p><br/><p align="right">'+msgJson[i].sendtime+'</p></a></li>';
					}
				}catch(err){
					}
				}
			}
			feedHtml=feedHtml+'<li data-icon="false"><a href="#" id="textMsg">Reply</br><textarea rows="4" cols="50" id="msgTxt"></textarea><div class="ui-grid-b"><div class="ui-block-a"></div><div class="ui-block-b"></div><div class="ui-block-c"><button id='+id+' value="send" onClick="sendReply(this.id)"></button></div></div></a></li>';
			feedHtml=feedHtml+'</ul>';
			$('#new_msg').html(feedHtml).trigger("create");	
}

function sendReply(reciver){
	alert(reciver);
	if($('#msgTxt').val()==''){
		alert("Please enter a message.");
		}else{
		//$.mobile.loading("show");
		$data={reci_id: reciver,msg: $('#msgTxt').val(),u_id:$.cookie('id_cookie')};
		//alert(JSON.stringify($data));
		$.ajax({
			type: 'POST',
			url: "http://malintha.knnect.com/php/messages/sendmsg.php",
			data: $data,		
			success: function (data){
				//$.mobile.loading("hide");
				//$.mobile.changePage("inbox.html");
				alert(data);
			  }
		});return false;
	}
}

function changeMsgState(senderId){
	alert("senderId : "+senderId);
		$data={senderId: senderId ,reciverId:$.cookie('id_cookie')};
		//alert(JSON.stringify($data));
		$.ajax({
			type: 'POST',
			url: "http://malintha.knnect.com/php/messages/changeMsgstate.php",
			data: $data,		
			success: function (data){
				alert(data);
			  }
		});return false;
}

