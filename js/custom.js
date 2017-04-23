/* Counter Up Section Start */
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 1000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 1000,
    fadeIn: true,
    margin:10,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
