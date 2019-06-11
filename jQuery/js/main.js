$('.tab_blocks__block').click(function () {
    var clickedBtnID = $(this).attr('id');
    $('.tab_blocks__block').removeClass('tab_blocks__block--active');
    $(this).addClass('tab_blocks__block--active');
    console.log(clickedBtnID);
    $('.content_block--active').fadeOut('slow',function(){
        $(this).removeClass('content_block--active');

        $(`#content${clickedBtnID}`).addClass('content_block--active').fadeIn('slow');
    })
 });