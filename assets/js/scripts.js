(function ($) {
    $(document).ready(function () {
        $(".load-more").on("click", loadProducts);

        var title, description, cost, discountCost, newCost, img;

        function loadProducts() {
            $.ajax(
                {
                    url: "/php/list.php",
                    type: "get",
                    data: {
                        'title': title,
                        'description': description,
                        'cost': cost,
                        'discountCost': discountCost,
                        'new': newCost,
                        'img': img
                    },
                    success: function (data) {
                        var object = JSON.parse(data);
                        var resultObject = object['entities'];

                        $.each(resultObject, function (key, value) {
                            $('.products-wrapper .row').append("<li class='product-item-wrap text-center col-3 mb-4'>" +
                                "<div class='product-item col-12'>" +
                                "<div class='product-img-wrap'>" +
                                "<img class='product-img' src=" + value.img + " alt=" + value.title + ">" +
                                " </div>" +
                                "<h3 class='product-title'>" + value.title + "</h3>" +
                                "<p class='description'>" + value.description +
                                "<div class='price-wrapper'><span class='price'>$ " + value.cost + "</span>"
                                + (value.discountCost !== undefined && value.discountCost !== null ?  "<span class='special-price'>"+
                                    value.discountCost : '' )+
                                "</div>" +
                                "<button class='btn addtocart'>Add to cart</button>" +
                                "<button class='btn view'>View</button>"
                                +"</div></li>");

                        });

                        return console.log("ajax works!", resultObject);
                    },
                    error: function (result) {
                        console.log("Error: ", result);
                    }
                });

        }
    });
})(jQuery);
