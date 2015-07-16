var isPhoneGapReady = false;
// Default all phone types to false
// Store the device's uuid

function init() {
// Add an event listener for deviceready
document.addEventListener("deviceready",
onDeviceReady, false);
}
function onDeviceReady() {
// set to true
isPhoneGapReady = true;

}

function Devicedetails(){
//alert("Your Device is "+device.platform);
document.writeln("<h2>Device details</h2>");
document.writeln("device UUID = "+device.uuid+"<br>Device Name = "+device.name+"<br>Device Version = "+device.version);
}
function fade()
{
	var contid=document.getElementById("layer1");
	//var visibilty=contid.style.getvisibility;
	contid.style.visibility="visible";
	//alert("fading");

	
  }


window.onload = init;