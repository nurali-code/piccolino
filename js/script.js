
$('.btn__menu').on('click', function () { $('.header-nav, .btn__menu, body').toggleClass('is_active'); })
$('.header__link').on('click', function () { $('.header-nav, .btn__menu, body').removeClass('is_active'); })

function hideModals() {
    $('.modal').fadeOut();
    $('body').removeClass('active');
};

$(function () {
    function showModal(id) {
        $('body').addClass('active');
        $(id).addClass('active').fadeIn(300);
    }
    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal__close').on('click', () => { hideModals(); });
    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.btn_1').length) ||
            ($(e.target).parents('.btn').length) ||
            ($(e.target).hasClass('btn_1')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) { hideModals(); }
    });
});

$('.space-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToScroll: 1,
    asNavFor: '.space-navs',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                centerPadding: '0px',
            }
        }
    ]
});

$('.space-navs').slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    swipeToSlide: true,
    slidesToScroll: 1,
    asNavFor: '.space-slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 4,
                centerPadding: '0px',
            }
        }
    ]
});

$('.classes-slider').slick({
    infinite: false,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 3,
    swipeToSlide: true,
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
                variableWidth: false,
            }
        }
    ]
});

$('.why-slider').slick({
    infinite: false,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 700,
            settings: "unslick",

        }
    ]
});

// $('.reviews-slider').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 700,
//             settings: {
//                 slidesToShow: 1,
//                 centerPadding: '0px',
//                 variableWidth: false,
//             }
//         }
//     ]
// });

$('.dropdown-btn').on('click', function (e) {
    var dCont = $(this).next('.dropdown-content');
    var dParent = $(this).parents()[1];
    $(dParent).find('.dropdown-btn').not($(this)).removeClass('is_active');
    $(this).addClass('is_active');
    $(dParent).find('.dropdown-content').not($(dCont)).slideUp();
    $(this).next('.dropdown-content').slideDown();
})

