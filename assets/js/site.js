var audio = $('#audio');

$('.recording').on('click', 'li', function(){
  console.log('Clicked!', $(this).data('start'));
  audio[0].currentTime = $(this).data('start');
  audio[0].play();
});

audio.on('play', function() {
  console.log('The audio is playing', audio[0].paused);
});

function isBetween(start,end,current) {
  return start <= current && end >= current;
}

// Find the first or nearest start-time; add 'highlighted class'

// function highlighter(start) {
//   var current, next;
//   while() {
//     if(isBetween()) {
//       current = next;
//       next = // new thing
//     }
//   }
// }
// audio.on('play', highlighter(0));
// audio.on('play', highlighter($(this).data('start')));

//
// var current = $('#transcript li').first();
// current = $('#translation li[data-start="71.982"]').first()
// current.data('start'); // 71.982
// current.data('end'); // 77.282
// var next = current.next();
//

// Function to highlight transcripts/translations. Note that there are
// different start and end times on transcripts and translations, in part
// it seems because at least one translation (Sochami) does not translate
// the unintelliglbe portions of the recordings.
//
// What that means is we'll probably have to grab arrays of the start and
// possibly end markers for both the transcript and translation, and add
// a highlighting class when the currentTime falls within the window. Also
// will need to remove the old class.
//
// Alternatively...maybe capturing either the very first element when
// playback begins, and readying to remove its class and highlight the
// next class when the time is right.
//
// That really seems like the better way to go: grab the first <li> from
// both sides; when the current time is greater than the end, move onto
// the next.
//
// In other words, the computationally expensive thing is finding the
// starting time (which, if coupled with the recording click event,
// isn't even all that expensive). From there, it's just a matter of
// tracking the current line, and advancing once the end time is less
// than the current time.
