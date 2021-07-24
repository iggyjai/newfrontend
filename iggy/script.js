$( document ).ready(function() {
  $("#unmuted").hide();
  $("#muted").show();
  $(".thumbnail-color").hide();

  $(".thumbnail-container").hover(function() {
    $(this).children(".thumbnail-color").fadeIn(150);
    $(this).css("padding-right", "-400px");
    //Stop Song

    //Play song if unmuted
  }, function() {
    $(this).children(".thumbnail-color").fadeOut(150);
    $(this).css("padding-right", "0px");
    //Stop Song
  });
});
