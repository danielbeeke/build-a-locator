(function ($) {

  $.fn.behaviours.body = {
    attach: function (settings) {

      $(window).resize(function() {
        if ($(window).width() > 975) {
            $('body').removeClass('window-size-small').removeClass('window-size-medium').addClass('window-size-big');
        } else if ($(window).width() <= 975 && $(window).width() > 655) {
            $('body').removeClass('window-size-small').addClass('window-size-medium').removeClass('window-size-big');
        } else if ($(window).width() <= 655) {
            $('body').addClass('window-size-small').removeClass('window-size-medium').removeClass('window-size-big');
        }
      });

      $(window).resize();

    }
  };

})(jQuery);