$('.img').on('click', function (e) {
    $('#img-cover').fadeIn();
    var img = $(this);
    $('#img-container').html(img.clone())
        .css({
          'margin-top': '-' + img.height() / 2 + 'px',
          'margin-left': '-' + img.width() / 2 + 'px'
    }).fadeIn();
});

$('#img-cover').on('click', function () {
    $('#img-cover').fadeOut();
    $('#img-container').fadeOut();
});
