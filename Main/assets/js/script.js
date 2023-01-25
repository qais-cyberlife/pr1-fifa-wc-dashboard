// Google Maps Platform API Key AIzaSyAD9Rn3XzuMwHX5UJg2XHhobvxnQj1yiVQ



  function initMap() {
    var qatar = {lat: 25.3548, lng: 51.1839};
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: qatar
    });
  }

  initMap();