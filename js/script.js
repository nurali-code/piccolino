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