;(function($){

    "use strict";
    
    $(window).on('load', function(){ 
        var CITIES_DATA = {
            poltava:  {lat: 49.592552, lng: 34.547128},
            kyiv: {lat: 50.449511, lng: 30.532976},
            odessa: {lat: 46.482124, lng: 30.718081}
        }
        
        var mapContainer = $('#map')[0];
        var mapCenter = {lat: 49.592552, lng: 34.547128};
        var mapOptions = { 
            center: mapCenter, zoom: 10,
            disableDefaultUI:true
        };

        var map = new google.maps.Map(mapContainer, mapOptions);

        var marker = new google.maps.Marker({ 
            position: mapCenter, 
            map: map,
            // icon: "img/beetroot.svg"
        
            });

        $( "#citySelector" ).change(function() {
            var selectedCity = this.value;
            var currentMapCenter = CITIES_DATA[selectedCity];
            var currentLocation = new google.maps.LatLng(currentMapCenter.lat,currentMapCenter.lng);
            map.setCenter(currentLocation);
            marker.setPosition(currentLocation);
        });

        
        
        
        
        });
    
})(jQuery);