// Google Maps Platform API Key AIzaSyAD9Rn3XzuMwHX5UJg2XHhobvxnQj1yiVQ



  function initMap() {
    var qatar = {lat: 25.3089, lng: 51.5283389031074};
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: qatar
    });
  }

  initMap();