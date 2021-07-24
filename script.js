$( document ).ready(function() {
  $("#unmuted").hide();
  $("#muted").show();
  $(".thumbnail-color").hide();

  $(".thumbnail-container").hover(function() {
    $(this).children(".thumbnail-color").fadeIn(300);
    $(this).css("padding-right", "-400px");
    //Play song if unmuted
    //Else animate mute button
  }, function() {
    $(this).children(".thumbnail-color").fadeOut(300);
    $(this).css("padding-right", "0px");
    //Stop Song
  });

  //mute functionality toggle
});
