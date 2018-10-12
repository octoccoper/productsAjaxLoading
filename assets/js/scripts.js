(function ($) {

    var loadMoreBtn = $(".load-more"); // variable for load more button
    var title, description, cost, discountCost, newCost, img, page, perPage, total; //variables for ajax query with product items
    var numberClicks = 0; // number of clicks at load more button
    var request_in_process = false; //status of ajax request, true = in progress, false = inactive

    $(document).ready(function () {
        loadProducts();
        loadMoreBtn.on("click", clickLoadMoreBtn)
                   .on("dblclick", (function (e) {
                       /**
                       * Prevent double-click in case of fast animation or sloppy browser.
                       */
                       e.stopPropagation();
                       e.preventDefault();
                       return false;
                    }))
    });

    function loadProducts() {

        var ajaxRequestVariable;

        ajaxRequestVariable = $.ajax(
            {
                url: "./php/list.php",
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
                beforeSend: function () {
                    request_in_process = true;
                    if (numberClicks > 0) {
                        loadMoreBtn.attr("disabled", true);
                    }
                },
                success: function (data) {
                    var object = JSON.parse(data);
                    var resultObject = object['entities'];
                    total = parseInt(object.total);
                    perPage = parseInt(object.perPage);
                    page = parseInt(object.page);

                    if ((page - 1) > (total / perPage)) {
                        loadMoreBtn.hide();
                        showProducts();
                    }

                    $.each(resultObject, function (key, value) {
                        $('.products-wrapper .row').append("<li class='product-item-wrap text-center col-3 mb-4 hide'>" +
                            "<div class='product-item col-12'>" +
                            "<div class='product-img-wrap'>" +
                            "<img class='product-img' src=" + value.img + " alt=" + value.title + ">" +
                            " </div>" +
                            "<h3 class='product-title'>" + value.title + "</h3>" +
                            "<p class='description'>" + value.description + "</p>" +
                            (value.discountCost !== undefined && value.discountCost !== null ? "<div class='price-wrapper'>" +
                                " <span class='special-price'>$" + value.discountCost + "</span>" +
                                "<span class='price old-price'>$ " + value.cost + "</span>" : "<div class='price-wrapper'>" +
                                " <span class='price'>$" + value.cost + "</span>") + "</div>" +
                            (value.discountCost !== null ? "<span class='sales-icon'>Sale</span>" : '') +
                            (value.new !== false && value.new !== null ? "<span class='new-icon'>New</span>" : '') +
                            "<button class='btn addtocart'>Add to cart</button> " +
                            "<button class='btn view'>View</button>" +
                            "</div></li>");
                    });

                    $(".loader-wrapper").css("display", "none");
                    page++;
                },
                complete: function () {
                    request_in_process = false;
                    loadMoreBtn.attr("disabled", false);
                    numberClicks = 0;
                },
                error: function (result) {
                    request_in_process = false;
                    console.log("Ajax request gave an error: ", result);
                    return request_in_process;
                }

            });

        if (ajaxRequestVariable.readyState > 0 && ajaxRequestVariable.readyState < 4) {
            if (numberClicks === 1) {
                functionLoader();
            }
        }
        else {
            showProducts();
        }

    }

    function clickLoadMoreBtn() {
        numberClicks += 1;

        if (numberClicks !== null && numberClicks !== undefined) {
            if (numberClicks === 1) {
                loadMoreBtn.attr("disabled", true);
                loadProducts();
                showProducts();
                loadMoreBtn.attr("disabled", false);
            }

            if (numberClicks > 1) {
                loadMoreBtn.attr("disabled", true);
                showProducts();
                loadMoreBtn.attr("disabled", false);
            }
        }
    }

    function showProducts() {
        var addedProducts = $(".product-item-wrap.hide");
        if (addedProducts.length > 0) {
            addedProducts.removeClass("hide");
            addedProducts.hide().fadeIn(1500);
        } else {
            setTimeout(function () {
                addedProducts.removeClass("hide");
                addedProducts.hide().fadeIn(1500);
            }, 2000);
        }
    }

    function functionLoader() {
        if (request_in_process === true) {
            $(".loader-wrapper").css("display", "block");
        } else {
            $(".loader-wrapper").css("display", "none");
            showProducts();
        }
    }

})(jQuery);


