$( document ).ready(function() {
  $("#unmuted").hide();
  $("#muted").show();
  $(".thumbnail-color").hide();

  $(".thumbnail-container").hover(function() {
    $(this).children(".thumbnail-color").delay(50).show();
    $(this).css("padding-right", "-300px");
    //Play song if unmuted
    //Else animate mute button
  }, function() {
    $(this).css("padding-right", "0px");
    $(this).children(".thumbnail-color").hide();
    //Stop Song
  });

  //mute functionality toggle
});
