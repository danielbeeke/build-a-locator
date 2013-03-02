(function ($) {

  $.fn.behaviours.map = {
    attach: function (context, settings) {

        if (context == document) {
            // create a map in the "map" div, set the view to a given place and zoom
            var map = L.map('map', {
                attributionControl: false,
                zoomControl: false
            }).setView([51.505, -0.09], 13);

            // add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png').addTo(map);
        }
    }
  };

})(jQuery);