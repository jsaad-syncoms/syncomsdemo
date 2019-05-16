$(function () {
  $(document).scroll(function () {
    $('#topbar').toggleClass('scrolled', $(this).scrollTop() > $('#topbar').height());
    $('.burgerline').toggleClass('scrolled-black', $(this).scrollTop() > $('#topbar').height());
    $('.colour-logo').toggleClass('fullOpacity', $(this).scrollTop() > $('#topbar').height());
    $('.white-logo').toggleClass('noOpacity', $(this).scrollTop() > $('#topbar').height());
  });
});

function setFooterHeights() {
    var addressInfoHeight = $('#address-info').height();
    var logoHeight = $('#footer-logo').height();
    
    if($(window).width() > 942) {
        $('#follow-us').height(addressInfoHeight);
        $('#request-demo').height(addressInfoHeight);
        $('#follow-us-header').height(logoHeight);
        $('#request-demo-header').height(logoHeight);
    } else {
        $('#follow-us').height('inherit');
        $('#request-demo').height('inherit');
        $('#follow-us-header').height('inherit');
        $('#request-demo-header').height('inherit');
    }
}

setFooterHeights();
$(window).resize(function() {setFooterHeights();});