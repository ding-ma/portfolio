//todo only on bigger screen
window.onscroll = function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');

    scrollY <= this.lastScroll
        ? header.style.visibility = 'visible'
        : header.style.visibility = 'hidden';

    this.lastScroll = scrollY;
}

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//doesnt work to hide navbar with modal
$(document).ready(function () {
    $("button").click(function () {
        console.log("123");
        $('.navbar-collapse').collapse('hide');
    });
});
