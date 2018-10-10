<?php
require __DIR__ . "/php/model.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Product loading template</title>

    <meta name="description" content="Product loading">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <!-- Website CSS style -->
    <link rel="stylesheet" href="assets/css/styles.css">

    <!-- Website Font style -->
    <link rel="stylesheet" href="assets/css/all.min.css">

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">

</head>
<body>
<div class="container main-wrap">
    <header>
        <div class="row">
            <h2 class="text-header col-12 text-center margins">Product loading template</h2>
        </div>
    </header>
    <main>
        <div class="row">
            <ul class="products-wrapper col-12">
                <div class="row">
                    <?php foreach (getItems(1, 4) as $item): ?>
                        <li class="product-item-wrap text-center col-3 mb-4">
                            <div class="product-item col-12">
                                <div class="product-img-wrap">
                                    <img class="product-img" src="<?php echo $item['img']; ?>" alt="
                    <?php echo $item['title']; ?>">
                                </div>
                                <h3 class="product-title"><?php echo $item['title']; ?></h3>
                                <p class="description"><?php echo $item['description']; ?></p>
                                <?php if ($item['discountCost']): ?>
                                    <div class="price-wrapper">
                                        <span class="special-price">$<?php echo $item['discountCost']; ?></span>
                                        <span class="price old-price">$<?php echo $item['cost']; ?></span>
                                    </div>
                                <?php else: ?>
                                    <div class="price-wrapper">
                                        <span class="price">$<?php echo $item['cost']; ?></span>
                                    </div>
                                <?php endif; ?>

                                <?php if ($item['discountCost'] !== null): ?>
                                    <span class="sales-icon">Sale</span>
                                <?php endif; ?>
                                <?php if ($item['new']): ?>
                                    <span class="new-icon">New</span>
                                <?php endif; ?>
                                <button class="btn addtocart">Add to cart</button>
                                <button class="btn view">View</button>
                            </div>
                        </li>
                    <?php endforeach; ?>
                </div>
            </ul>
        </div>

        <button class="btn load-more margins">Load more</button>

    </main>
    <footer>
        <div class="row">
            <div class="footer-wrapper col-12">
                <div class="row">
                    <div class="footer-item-wrap col-lg-4 col-md-6 col-12 mb-3">
                        <div class="footer-item col-12">
                            <h3 class="footer-title">hot offers</h3>
                            <p class="footer-description">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus.
                                Donec
                                quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </p>
                            <ul class="footer-links">
                                <li><a href="#">Vestibulum ante ipsum primis in faucibus orci luctus Nam elit m </a>
                                </li>
                                <li><a href="#">Curabitur ullamcorper ultricies nisi. Nam eget dui.</a></li>
                                <li><a href="#">Fusce vulputate eleifend sapien.</a></li>
                                <li><a href="#">Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                        imperdiet,
                                        leo.</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-item-wrap col-lg-4 col-md-6 col-12 mb-3">
                        <div class="footer-item col-12">
                            <h3 class="footer-title">hot offers</h3>
                            <p class="footer-description">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus.
                                Donec
                                quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            </p>
                            <ul class="footer-links">
                                <li><a href="#">Vestibulum ante ipsum primis in faucibus orci luctus Nam elit m </a>
                                </li>
                                <li><a href="#">Curabitur ullamcorper ultricies nisi. Nam eget dui.</a></li>
                                <li><a href="#">Fusce vulputate eleifend sapien.</a></li>
                                <li><a href="#">Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                                        imperdiet,
                                        leo.</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-item-wrap col-lg-4 col-md-9 col-12 mb-3">
                        <div class="footer-item col-12">
                            <h3 class="footer-title">store information</h3>
                            <ul class="store-information">
                                <li><i class="fas fa-map-marker-alt"></i> <span>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</span>
                                </li>
                                <li><i class="fas fa-phone fa-rotate-90"></i><span>Call us now toll free: (800) 2345-6789</span>
                                </li>
                                <li><i class="far fa-envelope"></i>
                                    <div class="customer-data">
                                        <span>Customer support: support@example.com</span>
                                        <br/>
                                        <span>Press: pressroom@example.</span>
                                    </div>
                                </li>
                                <li><i class="fab fa-skype"></i><span>Skype: sample-username</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="loader"></div>
</div>
<script src="assets/js/jquery-3.3.1.min.js"></script>
<script src="assets/js/scripts.js"></script>

</body>
</html>