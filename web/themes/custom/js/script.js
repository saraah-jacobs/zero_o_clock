/**
 * @file
 * Global utilities.
 *
 */
 (function ($, Drupal) {

    'use strict';

    $(document).on("scroll", function(){

        if ($(document).scrollTop() > 80){
            $("#top-nav").addClass("shrink");
        } else {
            $("#top-nav").removeClass("shrink");
        }

  });

})(jQuery, Drupal);