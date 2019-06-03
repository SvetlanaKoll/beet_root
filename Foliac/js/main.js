$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
 });
 
 $('.portfolio-buttons__btn').click(function () {
    $('.portfolio-buttons__btn').removeClass('active');
    $(this).addClass('active');
 
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
       filter: selector
    });
    return false;
 });
 
@media (max-width: 400px) {
    $('.portfolio-item').isotope({
        itemSelector: '.item',
        layoutMode: 'vertical'
     });
     
     $('.portfolio-buttons__btn').click(function () {
        $('.portfolio-buttons__btn').removeClass('active');
        $(this).addClass('active');
     
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
           filter: selector
        });
        return false;
     });
 }