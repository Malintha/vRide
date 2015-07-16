$(document).ready(function(){
alert ('started');

    var map = $('#map');
    var boxpolys = null;
    var directions = null;
    var routeBoxer = null;
    var distance = null; // km
    
    function initialize() {
      // Default the map view to the continental U.S.
      var mapOptions = {
        center: new google.maps.LatLng(6.9344, 79.8333),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 4
      };
      
      map = new google.maps.Map(document.getElementById("map"), mapOptions);      
      directionService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer({ map: map });      
    }


});