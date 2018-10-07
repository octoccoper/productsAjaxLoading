(function ($) {
    $(document).ready(function() {
        $(".load-more").on("click", loadProducts);

        function loadProducts() {
            console.log("You clicked load more btn!");
        }
    });
})(jQuery);
