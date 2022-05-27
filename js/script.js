$(document).ready(function () {
    $("#navbar").sticky({
        topSpacing: 0
    });
    let menu = $('.menu');
    $('.btn').on("click", function(){
        menu.toggleClass('menu-active');
    });
});