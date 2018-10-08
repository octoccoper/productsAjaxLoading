(function ($) {
    $(document).ready(function() {
        $(".load-more").on("click", loadProducts);
        var entities;
        var total;
        function loadProducts() {
            console.log("You clicked load more btn!");
            $.get("/php/list.php", {entities: entities, total: total});
        }
    });
})(jQuery);
