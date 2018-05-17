var audio = $('#audio');

$('.recording').on('click', 'li', function(){
  console.log('Clicked!', $(this).data('start'));
  audio[0].currentTime = $(this).data('start');
  audio[0].play();
});

// TODO: Throttle this to 15fps or so
// TODO: Handle a starting point when navigating from text, or seeking
audio.on('play', function() {
  var tl = $('#translation li').first();
  var ts = $('#transcript li').first();

  audio.on('timeupdate', function() {
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
