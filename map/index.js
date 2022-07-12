const lak = document.querySelector("#lakers");

const data = [
    ['Alabama', ''],
    ['Arizona', ''],
    ['Arkansas', ''],
    ['California', 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg', ],
    ['Colorado', ''],
    ['Connecticut', ''],
    ['Delaware', ''],
    ['Florida', ''],
    ['Georgia', 'https://www.kindpng.com/picc/m/272-2720099_philadelphia-76ers-logo-transparent-hd-png-download.png'],
    ['Idaho', ''],
    ['Illinois', ''],
    ['Indiana', ''],
    ['Iowa', ''],
    ['Kansas', ''],
    ['Kentucky', ''],
    ['Louisiana', ''],
    ['Maine', ''],
    ['Maryland', ''],
    ['Massachusetts', ''],
    ['Michigan', ''],
    ['Minnesota', ''],
    ['Mississippi', ''],
    ['Missouri', ''],
    ['Montana', 'https://www.pngitem.com/pimgs/m/205-2058328_los-angeles-clippers-logo-hd-png-download.png'],
    ['Nebraska', 'https://www.kindpng.com/picc/m/9-91375_dallas-mavericks-logo-dallas-mavericks-logo-png-transparent.png'],
    ['Nevada', ''],
    ['New Hampshire', ''],
    ['New Jersey', ''],
    ['New Mexico', ''],
    ['New York', 'https://www.clipartkey.com/mpngs/m/253-2536604_brooklyn-nets-nba-team-brooklyn-nets-logo-png.png'],
    ['North Carolina', ''],
    ['North Dakota', ''],
    ['Ohio', ''],
    ['Oklahoma', ''],
    ['Oregon', ''],
    ['Pennsylvania', ''],
    ['Rhode Island', ''],
    ['South Carolina', ''],
    ['South Dakota', ''],
    ['Tennessee', ''],
    ['Texas', 'https://logodownload.org/wp-content/uploads/2019/06/houston-rockets-logo.png'],
    ['Utah', 'https://img.favpng.com/20/12/13/golden-state-warriors-nba-logo-cleveland-cavaliers-oakland-png-favpng-bt5GT4Vh6ZpdXa8SRxYYvQZJU.jpg'],
    ['Vermont', ''],
    ['Virginia', ''],
    ['Washington', ''],
    ['West Virginia', ''],
    ['Wisconsin', 'https://img.favpng.com/5/15/8/milwaukee-bucks-logo-nba-basketball-png-favpng-W49Vyx8rf7xzbnh3ZzJdELqFk.jpg'],
    ['Wyoming', '']
];


Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/us-all',
        backgroundColor: "#fffde4"
    },


    title: {
        text: 'Located teams for best 10 players'
    },
    subtitle: {
        text: 'Source: <a href="https://www.nba.com/">Nba</a>'
    },


    series: [{
        name: 'State',
        keys: [
            'name', 'color.pattern.image', 'borderWidth', 'borderColor'
        ],
        joinBy: 'name',
        data: data,
        borderColor: 'black',
        borderWidth: 1.5,

        color: {
            pattern: {
                color: "red"
            },
        },
        states: {
            hover: {
                borderColor: 'yellow',
                borderWidth: 8
            }
        },  
    },

    {
    type: 'mappoint',
        name: 'City',
        data: [{
            name: 'Los angeles Lakers',
            lat: 36.778259,
            lon: -119.417931
        },
        {
            name: 'Milwaukee Bucks',
            lat: 44.500000,
            lon: -89.500000
        },
        {
            name: 'Golden state Warriors',
            lat: 40.717674,
            lon: -111.888840
        },
        {
            name: 'Los angeles Clippers',
            lat: 46.965260,
            lon: -109.533691
        },
        {
            name: 'Housten Rockets',
            lat: 31.000000,
            lon: -100.000000
        },
        {
            name: 'Philadelphia 76ers',
            lat: 33.247875,
            lon: -83.441162
        },
        {
            name:'brooklyn-nets',
            lat: 40.730610,
            lon: -73.935242
        },
        {
            name: 'Dallas mavericks',
            lat: 41.500000,
            lon: -100.000000
        }]
    },
],
});