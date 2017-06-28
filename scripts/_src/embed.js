$(document).ready(function() {
// START Fast & Agile YouTube Embed by Schoberg.net
  $(".AgileEmbed").each(function() {
    // Set the BG image from the youtube ID
    //$(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
    // Set the custom background image
    $(this).css('background-image', 'url(../assets/images/home-youtube-embed.jpg)');
    // Click the video div
    $(document).delegate('#' + this.id, 'click', function() {
      // Build embed URL
      var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      // Grab extra parameters set on div
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
      // Build iframe tag
      var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).append(iframe);
    });// /click
  }); // /each video
// END Fast & Agile YouTube Embed by Schoberg.net
}); // /document ready