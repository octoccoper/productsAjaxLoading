(function ($) {
    $(document).ready(function () {
        var loadMoreBtn = $(".load-more");
        loadMoreBtn.on("click", loadProducts);

        var title, description, cost, discountCost, newCost, img, page, perPage, total;
        page = 2;

        function loadProducts() {

            $.ajax(
                {
                    url: "/product_loading/php/list.php",
                    type: "get",
                    data: {
                        'title': title,
                        'description': description,
                        'cost': cost,
                        'discountCost': discountCost,
                        'new': newCost,
                        'img': img,
                        'page': page,
                        'perPage': perPage,
                        'total': total
                    },
                    success: function (data) {
                        var object = JSON.parse(data);
                        var resultObject = object['entities'];
                        total = object.total;
                        perPage = object.perPage;

                        $.each(resultObject, function (key, value) {
                            $('.products-wrapper .row').append("<li class='product-item-wrap text-center col-3 mb-4'>" +
                                "<div class='product-item col-12'>" +
                                "<div class='product-img-wrap'>" +
                                "<img class='product-img' src=" + value.img + " alt=" + value.title + ">" +
                                " </div>" +
                                "<h3 class='product-title'>" + value.title + "</h3>" +
                                "<p class='description'>" + value.description +
                                "<div class='price-wrapper'><span class='price'>$ " + value.cost + "</span>"
                                + (value.discountCost !== undefined && value.discountCost !== null ? "<span class='special-price'>" +
                                    value.discountCost : '' ) +
                                "</div>" +
                                "<button class='btn addtocart'>Add to cart</button>" +
                                "<button class='btn view'>View</button>"
                                + "</div></li>");

                        });

                        console.log("page = ", page, "  perpage ", perPage);
                        if (parseInt(page) > parseInt(total) / perPage) {
                            loadMoreBtn.hide();
                        }
                        ++page;
                        return console.log("ajax works!", resultObject);
                    },
                    error: function (result) {
                        console.log("Error: ", result);
                    }
                });

        }
    });
})(jQuery);
