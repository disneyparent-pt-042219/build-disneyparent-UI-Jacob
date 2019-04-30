$(function () {
    $('.item img').each(function () {
        $(this).data('original', this.src);
    }).mouseenter(function () {
        $(this).fadeOut(500, function(){
            $(this).attr('src', $(this).data('hover'));
            $(this).fadeIn(500);
        });
    }).mouseleave(function () {
        $(this).fadeOut(500, function(){
            $(this).attr('src', $(this).data('original'));
            $(this).fadeIn(500);
        });
    });
});