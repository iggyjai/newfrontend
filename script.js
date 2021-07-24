var muted = false;


$( document ).ready(function() {
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

  //mute functionality toggle
});
