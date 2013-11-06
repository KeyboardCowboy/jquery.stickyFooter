/**
* Keep the footer stuck to the bottom of the page if the content is too short.
*
* Modified from Chris Coyer's post
* http://css-tricks.com/snippets/jquery/jquery-sticky-footer
*/
(function ($) {
  function StickyFooter(){};

  StickyFooter.prototype = {
    // Height of the footer element
    fh: 0,
    stuck: {
      'position': 'fixed',
      'bottom': 0,
      'width': '100%'
    },
    unstuck: {
      'position': 'relative',
    },

    // Initialize the sticky footer.
    stickyFooter: function() {},

    // Stick the element to the bottom of the viewport
    stick: function() {
      this.css(this.stuck);
    },

    // Unstick the element and let it position naturally
    unstick: function() {
      this.css(this.unstuck);
    }
  }

  /**
   * Extend the function to elements.
   */
  $.fn.stickyFooter = function() {
    var e = $(this);

    $.extend(true, e, new StickyFooter);
    e.stickyFooter();

    $(window).bind("load", function() {
      e.fh = e.outerHeight(true);

      // Instantiate
      checkPos();

      // Persist
      $(window).scroll(checkPos).resize(checkPos);

      // Check the position
      function checkPos() {
        if (($(document.body).height() + e.fh) < $(window).height()) {
          e.stick();
        }
        else {
          e.unstick();
        }
      }
    });
  }
})(jQuery);
