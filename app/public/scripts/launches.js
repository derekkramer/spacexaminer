const launches = [
    {
        id: 0,
        date: '6/25/2017',
        customer: 'IRIDIUM (FLIGHT 2)',
        site: 'VANDENBERG',
        rocket: 'FALCON 9 ',
        origin: 'vandenberg',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 1,
        date: '6/23/2017',
        customer: 'BULGARIASAT-1',
        site: 'FLORIDA LAUNCH SITE',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'leo'
    }, {
        id: 2,
        date: '6/3/2017',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 11)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 3,
        date: '5/15/2017',
        customer: 'INMARSAT',
        site: 'FLORIDA LAUNCH SITE',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 4,
        date: '5/1/2017',
        customer: 'NATIONAL RECONNAISSANCE OFFICE',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'heo'
    }, {
        id: 5,
        date: '3/30/2017',
        customer: 'SES (SES-10)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'heo'
    }, {
        id: 6,
        date: '3/16/2017',
        customer: 'ECHOSTAR CORPORATION',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 7,
        date: '2/19/2017',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 10)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 8,
        date: '1/14/2017',
        customer: 'IRIDIUM (FLIGHT 1)',
        site: 'VANDENBERG',
        rocket: 'FALCON 9 ',
        origin: 'vandenberg',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 9,
        date: '8/14/2016',
        customer: 'SKY PERFECT JSAT CORPORATION (JAPAN)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 10,
        date: '7/18/2016',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 9)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'meo'
    }, {
        id: 11,
        date: '6/15/2016',
        customer: 'EUTELSAT AND ABS',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'heo'
    }, {
        id: 12,
        date: '5/27/2016',
        customer: 'THAICOM 8',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 13,
        date: '5/6/2016',
        customer: 'SKY PERFECT JSAT CORPORATION (JAPAN)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 14,
        date: '4/8/2016',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 8)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'leo'
    }, {
        id: 15,
        date: '3/4/2016',
        customer: 'SES (SES-9)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 16,
        date: '1/17/2016',
        customer: 'NASA (JASON-3)',
        site: 'VANDENBERG',
        rocket: 'FALCON 9 ',
        origin: 'vandenberg',
        trajectory: 0,
        orbit: 'heo'
    }, {
        id: 17,
        date: '12/22/2015',
        customer: 'ORBCOMM',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'meo'
    }, {
        id: 18,
        date: '4/27/2015',
        customer: 'THALES ALENIA SPACE',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'leo'
    }, {
        id: 19,
        date: '4/14/2015',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 6)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'meo'
    }, {
        id: 20,
        date: '3/2/2015',
        customer: 'ASIA BROADCAST SATELLITE/EUTELSAT',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'leo'
    }, {
        id: 21,
        date: '2/11/2015',
        customer: 'U.S. AIR FORCE (DSCOVR)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 22,
        date: '1/10/2015',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 5)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'heo'
    }, {
        id: 23,
        date: '9/21/2014',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 4)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'leo'
    }, {
        id: 24,
        date: '9/7/2014',
        customer: 'ASIASAT-6',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 25,
        date: '8/5/2014',
        customer: 'ASIASAT-8',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 26,
        date: '7/14/2014',
        customer: 'ORBCOMM',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'heo'
    }, {
        id: 27,
        date: '4/18/2014',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 3)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 28,
        date: '1/6/2014',
        customer: 'THAICOM (THAILAND)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 29,
        date: '12/3/2013',
        customer: 'SES (SES-8)',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'leo'
    }, {
        id: 30,
        date: '9/29/2013',
        customer: 'MDA CORP. (CANADA)',
        site: 'VANDENBERG',
        rocket: 'FALCON 9 ',
        origin: 'vandenberg',
        trajectory: 0,
        orbit: 'leo'
    }, {
        id: 31,
        date: '3/1/2013',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 2)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'meo'
    }, {
        id: 32,
        date: '10/8/2012',
        customer: 'NASA RESUPPLY TO ISS (FLIGHT 1)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'heo'
    }, {
        id: 33,
        date: '5/22/2012',
        customer: 'NASA COTS (DEMO 2/3)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'heo'
    }, {
        id: 34,
        date: '12/8/2010',
        customer: 'NASA COTS (DEMO 1)',
        site: 'CAPE CANAVERAL',
        rocket: 'DRAGON & FALCON 9 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 35,
        date: '6/4/2010',
        customer: 'FALCON 9 INAUGURAL TEST FLIGHT',
        site: 'CAPE CANAVERAL',
        rocket: 'FALCON 9 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 36,
        date: '7/13/2009',
        customer: 'ATSB (MALAYSIA)',
        site: 'KWAJALEIN',
        rocket: 'FALCON 1 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'leo'
    }, {
        id: 37,
        date: '9/28/2008',
        customer: 'FALCON 1 FLIGHT 4',
        site: 'KWAJALEIN',
        rocket: 'FALCON 1 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'leo'
    }, {
        id: 38,
        date: '8/2/2008',
        customer: 'U.S. GOVERNMENT, ATSB AND NASA',
        site: 'KWAJALEIN',
        rocket: 'FALCON 1 ',
        origin: 'florida',
        trajectory: 0,
        orbit: 'meo'
    }, {
        id: 39,
        date: '3/20/2007',
        customer: 'DEMO FLIGHT 2',
        site: 'KWAJALEIN',
        rocket: 'FALCON 1 ',
        origin: 'florida',
        trajectory: 1,
        orbit: 'meo'
    }, {
        id: 40,
        date: '3/24/2006',
        customer: 'DEMO FLIGHT 1',
        site: 'KWAJALEIN',
        rocket: 'FALCON 1 ',
        origin: 'florida',
        trajectory: 2,
        orbit: 'heo'
    }
];
