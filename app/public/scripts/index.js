let techView = 0,
    contactView = 0;

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

// ---Used for Capstone Presentation---
//
// $(window).keydown((event) => {
//     if(event.which === 84){
//         techView++;
//
//         if(techView === 1){
//             $('#node').css('visibility', 'visible');
//         }else if(techView === 2){
//             $('#express').css('visibility', 'visible');
//         }else if(techView === 3){
//             $('#sass').css('visibility', 'visible');
//         }else if(techView === 4){
//             $('#three').css('visibility', 'visible');
//         }else if(techView === 5){
//             $('#webgl').css('visibility', 'visible');
//         }else if(techView === 6){
//             $('.tech-top > img').css('visibility', 'hidden');
//             $('.tech-bottom > img').css('visibility', 'hidden');
//             techView = 0;
//         }
//     }else if(event.which === 67){
//         contactView++;
//
//         if(contactView === 1){
//             $('#github').css('visibility', 'visible');
//         }else if(contactView === 2){
//             $('#linkedin').css('visibility', 'visible');
//         }else if(contactView === 3){
//             $('#email').css('visibility', 'visible');
//         }else if(contactView === 4){
//             $('#phone').css('visibility', 'visible');
//         }else if(contactView === 5){
//             $('.contact > div').css('visibility', 'hidden');
//             contactView = 0;
//         }
//     }
// })
