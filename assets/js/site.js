var audio = $('#audio');

$('.recording').on('click', 'li', function(){
  audio[0].pause();
  console.log('Clicked!', $(this).data('start'));
  audio[0].currentTime = $(this).data('start');
  audio[0].play();
});

audio.on('pause', function() {
  $('.recording p').removeClass('highlight');
})

// TODO: Throttle this to 15fps or so
// BUG: Transcript highlighting does not work as expected when audio is already playing
audio.on('play', function() {
  var startTime = audio[0].currentTime;
  var firstTimestamp = Number($('.recording li').first().data('start'));
  // Treat the first timestamp as the start if it's greater than the curretTime,
  // which is almost always the case when the audio starts at 0:00
  if (firstTimestamp > startTime) {
    startTime = firstTimestamp;
  }

  var tl = startingLine(startTime, '#translation');
  var ts = startingLine(startTime, '#transcript');

  audio.on('timeupdate', function() {
    // TODO: DRY this up, big time; but mind the outer variable scope
    tl.find('p').addClass('highlight');
    ts.find('p').addClass('highlight');
    if (tl.data('end') < audio[0].currentTime) {
      tl.find('p').removeClass('highlight');
      tl = tl.next();
      tl.find('p').addClass('highlight');
    }
    if (ts.data('end') < audio[0].currentTime) {
      ts.find('p').removeClass('highlight');
      ts = ts.next();
      ts.find('p').addClass('highlight');
    }
  });

});

function startingLine(time,selector) {
  var line;
  time = Number(time);
  $(selector + " li").each(function() {
    if (Number(($(this).data('start')) <= time) && (Number($(this).data('end')) > time)) {
      console.log("Found one!", $(this).data('start'));
      line = $(this);
      return false;
    }
  });
  return line;
}
