$(window).on('load', () => {
    launches.forEach((launch) => {
        $('#date').append(`<article id="${launch.id}">${launch.date}</article>`);
        $('#customer').append(`<article id="${launch.id}">${launch.customer}</article>`);
        $('#site').append(`<article id="${launch.id}">${launch.site}</article>`);
        $('#rocket').append(`<article id="${launch.id}">${launch.rocket}</article>`);
    });
});

$('.viewer').click(() => {
    window.location = '/';
});
