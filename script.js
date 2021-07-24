

$( document ).ready(function() {
  var muted = false;
  var stickyTop = $('.sticky').offset().top;
  var stickyBottom = $(".parallax1").offset().top;

  $("#unmuted").hide();
  $("#muted").show();
  $(".thumbnail-color").hide();

  $(".thumbnail-container").hover(function() {
    var track = $(this).children("audio");
    $(this).children(".thumbnail-color").delay(50).show();
    $(this).css("padding-right", "-300px");
    if(muted == false) {
      //Change Now Playing Content
      track.get(0).load();
      track.get(0).play();
    } else {
      //Give user feedback that track is muted
    }
  }, function() {
    var track = $(this).children("audio");
    $(this).css("padding-right", "0px");
    $(this).children(".thumbnail-color").hide();
    track.get(0).pause();
  });


  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if(windowTop > stickyBottom) {
      $('.sticky').addClass("hidden-np");
    }
    else if (windowTop > stickyTop) {
      $(".sticky").removeClass("hidden-np");
      $('.sticky').addClass("fixed-np");
    } else {
      $('.sticky').removeClass("fixed-np");
    }
  });



  //mute functionality toggle
});
