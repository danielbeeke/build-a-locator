(function ($) {

  $.fn.behaviours.menu = {
    attach: function (context, settings) {

      if (context == document) {
        var template = twig({
            id: "menu",
            href: "templates/menu.twig",
            // for this example we'll block until the template is loaded
            async: false,
        });

        // Draw the menu via twig.
        $.fn.behaviours.menu.render = function (search) {
          $.getJSON('index.php', {q: search}, function(menuData) {
            $('#menu').html(twig({ ref: "menu" }).render(menuData));
            $.fn.attachBehaviours($('#menu'));
          });
        }

        // Init.
        $.fn.behaviours.menu.render(null);
      }

      $('#search').once().on('keydown', function(event){
        // Redraw the menu.
        $.fn.behaviours.menu.render($(this).val());
      });

    }
  };

})(jQuery);