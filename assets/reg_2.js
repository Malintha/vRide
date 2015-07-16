      
    var deviceReady = false;

    /**
     * Take picture with camera
     */
    function takePicture() {
    	//alert ("take pic");
        navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('profile_img');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
            },
            function(e) {
                console.log("Error getting picture: " + e);
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI});
    };

    /**
     * Select picture from library
     */
    function selectPicture() {
        navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('profile_img');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
            },
            function(e) {
                console.log("Error getting picture: " + e);
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
    };
    
    /**
     * Upload current picture
     */
    function uploadProfilePicture() {
    	
    	// Get URI of picture to upload
        var img = document.getElementById('profile_img');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
            return;
        }
        
        // Verify server has been entered
        server = "http://malintha.knnect.com/php/register.php";
        if (server) {
        	
            // Specify transfer options
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName="temp.jpg";
            options.mimeType="image/jpeg";
            options.chunkedMode = false;
				
				var params = {};
				params.unamen=$('#uname1').val();
				params.pwn = $('#pw1').val();
				params.fullname = $('#fullname').val();
				params.radio_gend =$('input:radio[name=radio-gend]:checked').val();
				params.positio = $('#pos').val();
				params.company = $('#company').val();
				params.phone = $('#phonenu').val();
				params.bday = $('#bday').val();
				alert(JSON.stringify(params));
				options.params = params;

            // Transfer picture to server
            var ft = new FileTransfer();
            ft.upload(imageURI, server, function(data) {  
            	alert(data);
            	alert(JSON.stringify(data));
            	$.mobile.loading("hide");
					if(data.responseCobe=200){
						$.mobile.changePage("login_cookie.html");  						
					}else{
						alert("Try again error.");
					}
   
					    	
            }, function(error) {           	
            }, options);
        }
    }

    /**
     * Function called when page has finished loading.
     */
    function init() {
        document.addEventListener("deviceready", function() {deviceReady = true;}, false);
        window.setTimeout(function() {
            if (!deviceReady) {
                alert("Error: PhoneGap did not initialize.  Demo will not run correctly.");
            }
        },2000);
    }


function registerNewUser(){
		var unameval = $('#uname1').val();
		var pwval = $('#pw1').val();
		var fullnameval = $('#fullname').val();
		var gendval = $('input:radio[name=radio-gend]:checked').val();
		
			if((unameval=="")||(pwval=="")||(fullnameval=="")||(gendval==""))  {
				alert("enter required fields");
			}else{
				$.mobile.loading( "show" );
				uploadProfilePicture();
			}
}


function checkUserName() {
		inputString=$('#uname1').val();
		$.post("http://malintha.knnect.com/php/register/checkUsername.php", {queryString: ""+inputString+""}, function(data){
			if(data.length >0) {
				$('#errorU').html(data);
			}
		});
}


function deleteError(){
	$('#errorU').html('');
}
