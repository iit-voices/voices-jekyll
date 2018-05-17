var audio = $('#audio');

$('.recording').on('click', 'li', function(){
  console.log('Clicked!', $(this).data('start'));
  audio[0].currentTime = $(this).data('start');
  audio[0].play();
});

// TODO: Throttle this to 15fps or so
audio.on('play', function() {
  var trans = $('#transcript li');
  var current = trans.first();
  audio.on('timeupdate', function() {
    current.find('p').addClass('highlight');
    if (current.data('end') < audio[0].currentTime) {
      current.find('p').removeClass('highlight');
      current = current.next();
      current.find('p').addClass('highlight');
    }
  });
});
