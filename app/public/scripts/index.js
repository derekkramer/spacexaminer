$('.viewer').click(() => {
    $('.content').removeClass('show');
});

$('.dropdown-button').click(() => {
    $('.content').toggleClass('show');
});

$('.content').click((event) => {
    let id = event.target.id;

    selection = {
        'origin': launches[id].origin,
        'trajectory': +launches[id].trajectory,
        'orbit': launches[id].orbit,
        'new': true
    };

    $('.content').removeClass('show');
});

$(window).on('load', () => {
    launches.forEach((launch) => {
        $('.content').append(`<button id="${launch.id}">
                <span id="${launch.id}">${launch.customer}</span>
                <span id="${launch.id}">${launch.site}</span>
            </button>`);
    });
});

$('.manifest').click(() => {
    window.location = '/manifest';
});
