var muted = true;

$( document ).ready(function() {
  var stickyTop = $('.sticky').offset().top;
  var stickyBottom = $(".parallax1").offset().top;
  var instructions = $("#np-container").find("#mute-instruc").html();

  $("#unmuted-icon").hide();
  $(".thumbnail-color").hide();

  $(".thumbnail-container").hover(function() {
    var track = $(this).children("audio");
    $(this).children(".thumbnail-color").delay(50).show();
    $(this).css("padding-right", "-300px");
    var domToObject = $(this);
    changeNowPlaying(domToObject);
    if(muted == false) {
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

  $(".volume-icon") .hover(function() {
    $(this).css("transform", "scale(1.2)");
  }, function() {
    $(this).css("transform", "scale(1)");
  });

  $(".volume-icon") .click(function() {
    toggleVolume();
  });

  function changeNowPlaying(data) {
    var artistTrackRoles = $(data).find(".hidden-info").html();
    console.log(artistTrackRoles);
    $("#np-container").empty();
    $("#np-container").append(instructions, artistTrackRoles);
    $("#np-container").find("p").show();
  }

  function toggleVolume() {
    muted = !muted;
    if(muted) {
      $("#unmuted-icon").hide();
      $("#muted-icon").show();
    } else {
      $("#unmuted-icon").show();
      $("#muted-icon").hide();
    }
  }

});