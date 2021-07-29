var muted = true;

$( document ).ready(function() {
  var stickyTop = $('.sticky').offset().top;
  var stickyBottom = $(".parallax1").offset().top;
  var instructions = $("#np-container").find("#mute-instruc").html();
  var unmuteBtn = '<button class="unmute-text-btn">' + $(".unmute-text-btn").html() + '</button>';
  console.log(unmuteBtn);

  $("#unmuted-icon").hide();
  $(".thumbnail-color").hide();

  if( /webOS|iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ) {
    var audio = new Audio();
    var setAudio = true;
    $(".parallax-backdrop").addClass("ios-backdrop");
    if (setAudio) {
      $("#muted-icon") .click(function() {
        toggleVolume();
        soundEffect.play();
        setAudio = false;
      });
    }
    $(".volume-icon").click(function() {
      audio.pause();
      audio.load();
    });
    $(".thumbnail-container").click(function() {
      var domToObject = $(this);
      var track = $(this).find(".audio-source").attr("src");
      $(".thumbnail-color").hide();
      $(".thumbnail-grey").show();
      togglePlaying(domToObject);
      changeNowPlaying(domToObject);

      if(muted == false) {
        audio.src = track;
        audio.play();
      } else {
        $(".unmute-text-btn").hide();
        $(this).find(".unmute-text-btn").show();
      }


    });
  }
  else {
    $(".thumbnail-container").hover(function() {
      var domToObject = $(this);
      var track = $(this).children("audio");
      togglePlaying(domToObject);
      changeNowPlaying(domToObject);
      if(muted == false) {
        track.get(0).load();
        track.get(0).play();
      } else {
        $(this).find(".unmute-text-btn").show();
      }
    }, function() {
      var domToObject = $(this);
      var track = $(this).children("audio");
      toggleNotPlaying(domToObject);
      track.get(0).pause();
      $(this).find(".unmute-text-btn").hide();
    });
  }


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

  $(".unmute-text-btn").click(function() {
    toggleVolume();
    $(this).hide();
  });

  function changeNowPlaying(data) {
    var artistTrackRoles = $(data).find(".hidden-info").html();
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
  function togglePlaying(elem) {
    $(elem).children(".thumbnail-grey").delay(50).hide();
    $(elem).children(".thumbnail-color").delay(50).show();
  }

  function toggleNotPlaying(elem) {
    $(elem).children(".thumbnail-color").hide();
    $(elem).children(".thumbnail-grey").show();
  }

});