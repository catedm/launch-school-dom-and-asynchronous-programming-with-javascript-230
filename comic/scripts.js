$(function() {

  var $blinds = $("[id^=blind]");
      delay = 1500,
      speed = 250;

  function startAnmiation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      $blind.delay(1500 * i + speed).animate({
        top: "+=" + $blind.height(),
        height: 0
      }, speed);
    });
  }

  startAnmiation();

  $('a').click(function(e) {
    e.preventDefault();

    $blinds.removeAttr("style");
    startAnmiation();
  });
});
