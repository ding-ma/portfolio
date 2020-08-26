
window.onscroll = function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');

    scrollY <= this.lastScroll
        ? header.style.visibility = 'visible'
        : header.style.visibility = 'hidden';

    this.lastScroll = scrollY;
}

$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

//doesnt work to hide navbar with modal
// $(document).ready(function () {
//     $("button").click(function () {
//         console.log("123");
//         $('.navbar-collapse').collapse('hide');
//     });
// });
