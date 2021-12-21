// menu toggle
$(function () {
    $(".menu-toggle").on("click", function () {
        var $toggle = $(this);

        $toggle.toggleClass("active").siblings(".menu-sub").slideToggle();

        $toggle.siblings(".menu-mega").children(".menu-sub").slideToggle();

        $toggle.parent().siblings(".menu-item-group").children(".menu-sub").slideUp();

        $toggle.parent().siblings(".menu-item-group").children(".menu-mega").children(".menu-sub").slideUp();

        $toggle.parent().siblings(".menu-item-group").children(".menu-toggle").removeClass("active");
    });

    $(".menu-item-group > .menu-link, .menu-item-mega > .menu-link").on("click", function (e) {
        if ($(window).width() < 1200 || !mobileAndTabletCheck()) return;

        e.preventDefault();
    });
});

// navbar mobile toggle
$(function () {
    var $body = $("html, body");
    var $navbar = $(".js-navbar");
    var $navbarToggle = $(".js-navbar-toggle");

    $navbarToggle.on("click", function () {
        $navbarToggle.toggleClass("active");
        $navbar.toggleClass("is-show");
        $body.toggleClass("overflow-hidden");
    });
});

$(function () {
    var $moveTop = $(".btn-movetop");
    var $window = $(window);
    var $body = $("html");

    if (!$moveTop.length) return;

    $window.on("scroll", function () {
        if ($window.scrollTop() > 150) {
            $moveTop.addClass("show");

            return;
        }

        $moveTop.removeClass("show");
    });

    $moveTop.on("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});

// swiper template
function addSwiper(selector, options = {}) {
    return Array.from(document.querySelectorAll(selector), function (item) {
        var $sliderContainer = $(item),
            $sliderEl = $sliderContainer.find(selector + "__container");

        if (options.navigation) {
            $sliderContainer.addClass("has-nav");
            options.navigation = {
                prevEl: $sliderContainer.find(selector + "__prev"),
                nextEl: $sliderContainer.find(selector + "__next")
            };
        }

        if (options.pagination) {
            $sliderContainer.addClass("has-pagination");
            options.pagination = {
                el: $sliderContainer.find(selector + "__pagination"),
                clickable: true
            };
        }

        return new Swiper($sliderEl, options);
    });
}

$(function () {

    $(".js-toggle-tab").on("click", function (e) {

        e.preventDefault();

        const $el = $(this);

        const imageText = $el.data("imageText");

        const videoText = $el.data("videoText");

        const $activeTab = $(".js-popup-tab.active");

        $activeTab.removeClass("show active");

        $activeTab.siblings(".tab-pane").addClass("show active");

        $el.toggleClass("is-video");

        if ($el.hasClass("is-video")) {

            $el.html(imageText);

            const $iframe = $activeTab.siblings(".tab-pane").find("iframe");

            if ($iframe.length) {

                $iframe.attr("src", $iframe.data("src") + "?autoplay=1");
            }

            return;
        }

        $el.html(videoText);

        const $iframe = $activeTab.find("iframe");

        if ($iframe.length) {

            $iframe.attr("src", "");
        }
    });

    $(".popup__toggle").on("click", function (e) {

        e.preventDefault();

        $(this).toggleClass("active");

        $(".popup__3d").toggleClass("show");
    });

    $(".js-doc-open").on("click", function (e) {

        e.preventDefault();

        const target = $(this).data("target");

        $(target).addClass("show");
    });

    $(".doc__close").on("click", function () {

        $(this).closest(".doc").removeClass("show");
    });
});