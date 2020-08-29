
window.onscroll = function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');

    if (scrollY <= this.lastScroll) {
        header.style.visibility = 'visible'
    } else {
        header.style.visibility = 'hidden'
        header.style.display = ""
    }
    this.lastScroll = scrollY;
}

$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

$(document).ready(function () {
    $("#contact").click(function () {
        // document.querySelector('nav').style.visibility = 'hidden';
        $("nav").hide();
    });
});
