$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay:true,
        adaptiveHeight: true,
        vertical:       true,
        verticalSwiping: true,
        dotsClass:"vertical-dots",
        responsive: [ 
          {
            breakpoint: 400,
            settings: {
              autoplay: false,
              vertical: false,
              dotsClass:'slick-dots',
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:true
            }
          }
  
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  
  $('.news-slider').slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    
            responsive: [ 
          {
            breakpoint: 400,
            settings: {
              autoplay: false,
        
            
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:true
            }
          }
  
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
  });





    var mapContainer = $('#map-box')[0];
    var mapCenter = {lat: 40.676332, lng: -73.941496};
    var mapOptions = { 
        center: mapCenter, zoom: 10,
        disableDefaultUI:true
    };

    var map = new google.maps.Map(mapContainer, mapOptions);

    var marker = new google.maps.Marker({ 
        position: mapCenter, 
        map: map,
        icon: "../images/marker.svg"
    
    });
  });

