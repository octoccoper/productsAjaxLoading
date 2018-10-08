(function ($) {
    $(document).ready(function () {
        $(".load-more").on("click", loadProducts);

        function loadProducts() {
            $.ajax(
                {
                    url: "/php/list.php",
                    type: "get",
                    data: {},
                    dataType: "json",
                    success: function (data) {
                        $(".products-wrapper")
                        return console.log("ajax works!", data.entities);
                    },
                    error: function (result) {
                       console.log("Error: ",result);
                    }
                });

        }
    });
})(jQuery);
