(function ($) {

  $.fn.behaviours.map = {
    attach: function (settings) {

        // create a map in the "map" div, set the view to a given place and zoom
        var map = L.map('map', {
            attributionControl: false,
            zoomControl: false
        });

        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png').addTo(map);

        map.locate({setView: true, maxZoom: 16});

        function onLocationFound(e) {
            var radius = e.accuracy / 2;

            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius).addTo(map);
        }

        map.on('locationfound', onLocationFound);

        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);

    }
  };

})(jQuery);