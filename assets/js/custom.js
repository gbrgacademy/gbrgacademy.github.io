// Your custom JavaScripts

$(function(){
  $('.counter').countUp();

  $("#slider").responsiveSlides({
    auto: true,
    pager: true,
    speed: 1000,
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

  // onchange of navbar-collapse button
  $('.navbar-toggler').on('click', function(){
    var navClasses = $('#navbarSupportedContent').attr("class").split(' ');
    
    if (navClasses.indexOf("show") == -1) {
      $('#page-body').addClass('mt-20em');
    } else {
      $('#page-body').removeClass('mt-20em');
    }
  });

  $('.loader').delay(1000).fadeOut("slow");
});

$(window).load(function () {
});
