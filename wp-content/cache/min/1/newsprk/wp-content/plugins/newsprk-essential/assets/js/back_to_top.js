(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        jQuery(window).on('scroll', function(event) {
            if (jQuery(this).scrollTop() > 500) {
                jQuery('.newsprk-er-back-to-top').fadeIn(200)
            } else {
                jQuery('.newsprk-er-back-to-top').fadeOut(200)
            }
        });
        $(document).on("click", ".newsprk-er-back-to-top", function(e) {
            e.preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return !1
        })
    })
})(jQuery)