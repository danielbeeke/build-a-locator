/*
 * Javascript chainer,
 * Works a lot like Drupal.behaviours
 **/

$.fn.behaviours = {};

$(document).ready(function() {

  var settings = [];

  $.each($.fn.behaviours, function() {
    this.attach(settings);
  });

});