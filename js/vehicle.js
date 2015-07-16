function vehicleImage(){
		if($('#vcolor').val()!=''&&$('#type').val()!=''&&$('#vregi').val()!=''&&$('#vseats').val()!=''&&$('#vname').val()!=''){
			uploadPicture();
		}else{
			alert("fill fields");
		}
}

    function takePicture() {
        navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('vehicle_image');
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
                var img = document.getElementById('vehicle_image');
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
    function uploadPicture() {
    	$.mobile.loading("show");
    	// Get URI of picture to upload
        var img = document.getElementById('vehicle_image');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
            return;
        }
        
        // Verify server has been entered
        server = "http://malintha.knnect.com/php/image/vehicle_pic.php";
        if (server) {
        	
            // Specify transfer options
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName="temp.jpg";
            options.mimeType="image/jpeg";
            options.chunkedMode = false;
			var params = {};
			params.user_id="2";
			params.vname = $('#vname').val();
			params.type = $('#type').val();
			params.vseats = $('#vseats').val();
			params.vcolor = $('#vcolor').val();
			params.vregi = $('#vregi').val();

			options.params = params;


            // Transfer picture to server
            var ft = new FileTransfer();
            ft.upload(imageURI, server, function(r) { 
				$.mobile.loading("hide");
				$.mobile.changePage("home.html");       	
            }, function(error) {      
				alert("Check the data connection. Upload fail.");  
				$.mobile.changePage("home.html");      	
            }, options);
        }
    }
