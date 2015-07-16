$(document).ready(function(){if ($.cookie('id_cookie')) {
	alert("cookie: "+$.cookie('id_cookie')+$.cookie('disname_cookie'));
	$.mobile.changePage("home.html");
	}else{
$(document).ready(function(){
	$('#submitbtn').click(function(){
		$vari = $('#signinform #signin').serialize();
		$.mobile.loading("show");
		alert($vari);
		$.ajax({
			url: 'http://malintha.knnect.com/php/signin.php',
			data: $vari,
			dataType: 'json',
			success: function (data){
				$.mobile.loading("hide");
				
				$out=data;
				//alert(JSON.stringify(data));
				if(data=='wrong'){
					$('#result').html('Wrong username or password!');
				}else{
					//alert("correct");
					$.cookie('disname_cookie', data.disname, { expires: 7, path:'/' });
					$.cookie('id_cookie', data.user_id, { expires: 7, path:'/' });
					alert($.cookie('disname_cookie')+" "+$.cookie('id_cookie'));
					$.mobile.changePage("home.html");
					}
			  }
		});return false;
	});
});


$(document).ready(function(){
	$('#signupbtn').click(function(){
		$.mobile.loading( "show" );
		$.mobile.changePage("register.html");
		$.mobile.loading( "hide" );
	});
});
}
});