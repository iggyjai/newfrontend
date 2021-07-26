var muted = true;

$( document ).ready(function() {
  var stickyTop = $('.sticky').offset().top;
  var stickyBottom = $(".parallax1").offset().top;
  var instructions = $("#np-container").find("#mute-instruc").html();

  $("#unmuted-icon").hide();
  $(".thumbnail-color").hide();

  if( /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
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


    $(".thumbnail-container").click(function() {
      //alert("hello");
      var domToObject = $(this);
      var track = $(this).children(audio).attr("src");
      alert(track);
      $(".thumbnail-color").hide();
      $(".thumbnail-grey").show();
      togglePlaying(domToObject);
      changeNowPlaying(domToObject);

      if(muted == false) {
        audio.src = track;
        audio.get(0).load();
        audio.get(0).play();
      } else {
        //Give user feedback that track is muted
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
        //Give user feedback that track is muted
      }
    }, function() {
      var domToObject = $(this);
      var track = $(this).children("audio");
      toggleNotPlaying(domToObject);
      track.get(0).pause();
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

  function changeNowPlaying(data) {
    var artistTrackRoles = $(data).find(".hidden-info").html();
    //console.log(artistTrackRoles);
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