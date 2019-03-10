// Your custom JavaScripts

$(function(){
  $('.counter').countUp();

  $("#slider3").responsiveSlides({
    auto: true,
    pager: true,
    nav: false,
    speed: 500,
    namespace: "callbacks"
  });

  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  $().UItoTop({
    easingType: 'easeOutQuart'
  });
});

$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "slide",
    start: function (slider) {
      $('body').removeClass('loading');
    }
  });
});
