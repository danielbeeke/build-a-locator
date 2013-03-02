/*
 * Javascript chainer,
 * Works a lot like Drupal.behaviours
 **/

(function ($) {

  $.fn.behaviours = {};

  $(document).ready(function() {

    $.fn.attachBehaviours = function (context) {
      var settings = [];

      $.each($.fn.behaviours, function() {
        this.attach(context, settings);
      });
    }

    $.fn.attachBehaviours(document);
  });

})(jQuery);