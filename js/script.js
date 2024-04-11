$('.space-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToScroll: 1,
    asNavFor: '.space-navs',
});

$('.space-navs').slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    swipeToSlide: true,
    slidesToScroll: 1,
    asNavFor: '.space-slider',
    focusOnSelect: true

});
$('.classes-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    swipeToSlide: true,
    variableWidth: true,
    slidesToScroll: 1
});
$('.reviews-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1
});

$('.dropdown-btn').on('click', function (e) {
    var dCont = $(this).next('.dropdown-content');
    var dParent = $(this).parents()[1];
    $(dParent).find('.dropdown-btn').not($(this)).removeClass('is_active');
    $(this).addClass('is_active');
    $(dParent).find('.dropdown-content').not($(dCont)).slideUp();
    $(this).next('.dropdown-content').slideDown();
})