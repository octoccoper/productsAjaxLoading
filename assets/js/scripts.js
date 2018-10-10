(function ($) {

    var loadMoreBtn = $(".load-more");
    var title, description, cost, discountCost, newCost, img, page, perPage, total; //variables for ajax query with product items
    var numberClicks = 0; // number of clicks at load more button
    var request_in_process = false; //status of ajax request, true = in progress, false = inactive

    $(window).on('load', function () {
        loadProducts();
    });

    $(document).ready(function () {
        loadMoreBtn.on("click", clickLoadMoreBtn);
    });

    function loadProducts() {
        if (!request_in_process) {
            request_in_process = true;
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
                        total = parseInt(object.total);
                        perPage = parseInt(object.perPage);
                        page = parseInt(object.page);

                        $.each(resultObject, function (key, value) {
                            $('.products-wrapper .row').append("<li class='product-item-wrap text-center col-3 mb-4 hide fadein'>" +
                                "<div class='product-item col-12'>" +
                                "<div class='product-img-wrap'>" +
                                "<img class='product-img' src=" + value.img + " alt=" + value.title + ">" +
                                " </div>" +
                                "<h3 class='product-title'>" + value.title + "</h3>" +
                                "<p class='description'>" + value.description + "</p>" +
                                // "<div class='price-wrapper'>" +
                                // "<span class='price'>$ " + value.cost + "</span>" +
                                (value.discountCost !== undefined && value.discountCost !== null ? "<div class='price-wrapper'>" +
                                    " <span class='special-price'>$" + value.discountCost + "</span>"+
                                    "<span class='price old-price'>$ " + value.cost + "</span>" : "<div class='price-wrapper'>" +
                                    " <span class='price'>$" + value.cost + "</span>") + "</div>" +
                                (value.discountCost !== null ? "<span class='sales-icon'>Sale</span>" : '') +
                                    (value.new !== false && value.new !== null ? "<span class='new-icon'>New</span>" : '') +
                                    "<button class='btn addtocart'>Add to cart</button> " +
                                    "<button class='btn view'>View</button>" +
                                    "</div></li>");
                        });

                        if ((page - 1) > (total / perPage)) {
                            showProducts();
                            loadMoreBtn.hide();
                        }

                        page++;
                        request_in_process = false;
                        $(".loader").css("display", "none");
                    },
                    error: function (result) {
                        request_in_process = false;
                        console.log("Ajax request gave an error: ", result);
                        return request_in_process;
                    }

                });
        }
    }

    function clickLoadMoreBtn() {
        numberClicks += 1;

        if (parseInt(numberClicks) === 1) {
            showProducts();
            loadProducts();
        } else if (numberClicks > 1) {
            showProducts();
            functionLoader();
            loadProducts();
        }
    }

    function showProducts() {
        $(".product-item-wrap.fadein").removeClass("hide").removeClass("fadein").hide().fadeIn("slow");
    }

    function functionLoader() {
        if (request_in_process === true) {
            $(".loader").css("display", "block");
        } else {
            $(".loader").css("display", "none");
        }
    }


})(jQuery);


