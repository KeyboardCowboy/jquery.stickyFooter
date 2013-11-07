/**
 * Keep the footer stuck to the bottom of the page if the content is too short.
 */
(function ($) {
  $(document).ready(function() {
    var footer  = $('footer#site-footer');
    var wrapper = $('#page');
    var spacer  = $('<div></div>');

    spacer.height(footer.height());
    footer.height(footer.height());
    wrapper.append(spacer);
    wrapper.css({'margin-bottom': '-' + footer.height() + 'px'});
  });
})(jQuery);
