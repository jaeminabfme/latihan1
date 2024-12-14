$(document).ready(function() {
    // Fade-in effect for images
    $('.gallery img').each(function(index) {
        $(this).delay(index * 200).fadeIn(1000);
    });

    // Show modal on image click
    $('.gallery img').on('click', function() {
        const src = $(this).attr('src');
        $('.modal img').attr('src', src);
        $('.modal').fadeIn();
    });

    // Close modal on close button or outside click
    $('.modal .close, .modal').on('click', function(event) {
        if (event.target !== this) return;
        $('.modal').fadeOut();
    });
});
