(function ($) {

  $.fn.behaviours.viewToggle = {
    attach: function (context, settings) {

      // Click handlers
      $("#toggle-left", context).once().click(function() {
        $('body').toggleClass('show-left').removeClass('show-right');
        $('#toggle-left').toggleClass('active');
        $('#toggle-right').removeClass('active');
        return false;
      });

      $("#toggle-right", context).once().click(function() {
        $('body').toggleClass('show-right').removeClass('show-left');
        $('#toggle-right').toggleClass('active');
        $('#toggle-left').removeClass('active');
        return false;
      });

      // Touch gestures
      $$('body').swipeLeft(function() {
        if ($('body').hasClass('show-left')) {
          $('body').removeClass('show-left');
          $('#toggle-left').removeClass('active');
        }
        else {
          $('body').addClass('show-right');
          $('#toggle-right').addClass('active');
        }
      });

      $$('body').swipeRight(function() {
        if ($('body').hasClass('show-right')) {
          $('body').removeClass('show-right');
          $('#toggle-right').removeClass('active');
        }
        else {
          $('body').addClass('show-left');
          $('#toggle-left').addClass('active');
        }
      });

    }
  };

})(jQuery);