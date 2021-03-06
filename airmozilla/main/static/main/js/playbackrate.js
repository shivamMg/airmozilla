$(function() {

    function highlightCurrentPlaybackrate() {
        var current = document.querySelector('video').playbackRate;
        $('.playbackrate .options a').each(function() {
            if ($(this).data('rate') === current) {
                $(this).addClass('current');

            } else {
                $(this).removeClass('current');
            }
        });
        $('.playbackrate a.open')
        .attr('title', 'Current playback rate: ' + current + '×');
        if (current === 1) {
            $('.playbackrate a.open').addClass('inactive');
        } else {
            $('.playbackrate a.open').removeClass('inactive');
        }
    }

    $('.playbackrate').on('click', 'a.open', function(event) {
        event.preventDefault();
        $('.playbackrate .options').toggle();
        highlightCurrentPlaybackrate();
    });

    $('.playbackrate .options').on('click', 'a', function(event) {
        event.preventDefault();
        document.querySelector('video').playbackRate = $(this).data('rate');
        highlightCurrentPlaybackrate();
    });

    // It doesn't really matter which of tearout.js or this file that does
    // this as long as one of them do.
    setTimeout(function() {
        $('.play-options:hidden').fadeIn(400);
    }, 1000);
});
