$(document).ready(function() {
    $(".card-header")
        .mouseenter(function () {
            target = $(this).attr( "data-target" );
            $(target).collapse('show');
        });
    $(".collapse")
        .mouseleave(function () {
            $(this).collapse('hide');
        });
});
