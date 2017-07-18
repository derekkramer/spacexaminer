// $('.content').focusout(() => {
//     $('.content').removeClass('show');
// });

$('.viewer').click(() => {
    $('.content').removeClass('show');
});

$('.dropdown-button').click(() => {
    $('.content').toggleClass('show');
});

$('.content').click((event) => {
    // console.log(event.target.id);
    selection = {
        'origin': 'florida',
        'trajectory': 0,
        'orbit': 'meo',
        'new': true
    }
    $('.content').removeClass('show');
});
