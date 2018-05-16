var audio = $('#audio');

$('.recording').on('click', 'li', function(){
  console.log('Clicked!', $(this).data('start'));
  audio[0].currentTime = $(this).data('start');
  audio[0].play();
);
