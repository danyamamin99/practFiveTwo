$(document).ready(function(){

  //Первое задание - delete
  $('.pane .delete').click(function(e) {
    $(this).parent().animate({
      opacity: 0,
    }, 3000);
  });

  // Второе задание - run
  function box() {
    $('.box').animate({
      marginLeft: "300px",
      opacity: "0.1"
    }, 5000);
  }
  box();

  // Третье задание - accordion
  $('.arrow').click(function() {
    $('.accordion-item').removeClass('active');
    $(this).parent().addClass('active');
  });

  // Четвертое задание - hover
  $(".menu a").hover(function() {
        $(this).next("em").animate({opacity: 1, top: "-75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: 0, top: "-85"}, "fast");
    });

    // Пятое задание - галлерея
    $('.thumbs img').click(function() {
      let src = $(this).attr('src');
      let alt = $(this).attr('alt');
      
      $('.gallery .largeImg').attr({
        src: src,
        alt: alt
      });

      $('.gallery h2').text(alt);
    });
    
});
