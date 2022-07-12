const chart = Highcharts.chart('container', {
    chart: {
        
        style: {
            fontFamily: 'san-serif',
            
        },

        backgroundColor: '#013A40',
        shadow: true,
        type: 'bar',
        Stacked: true,
        options3d: {
            enabled: true,
            alpha: 3,
            beta: 3,
            viewDistance: 40,
            depth: 40,  
        }
    },
    
    title: {
        text: 'Nba top 10 Players statistic the last 5 years',
        style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '25px'
        }
    },
    xAxis: {
        categories: ['2015', '2016', '2017', '2018', '2019'],
        labels: {
            style: {
                color: 'white'
            }
        }
    },
    yAxis: {
        
        title: {
            text: 'Total statistic',
        }
    },
    legend: {
        reversed: true,
        backgroundColor: 'white',
        borderColor: '#036868',
        borderWidth: 3,
        borderRadius: 3,
        padding: 15,
        itemWidth: 120,
        shadow: true,
        style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '25px'
        }
        
    },
    
    plotOptions: {
        series: {
            stacking: 'normal',
            opacity: 0.9,
            animation: {
               duration: 2500
            },
        }
    },
    series: [{
        name: 'Points',
        dataLabels: {
            enabled: true,
            borderRadius: 12,
            backgroundColor: 'rgba(92,176,202,0.5)',
            borderWidth: 0,
            borderColor: '#AAA'
        },
        data: [0, 0, 0, 0, 0],
        color: '#0367A6'

    },{
        name: 'Asissts',
        dataLabels: {
            enabled: true,
            borderRadius: 12,
            backgroundColor: 'rgba(1,1,1,0.5)',
            color:'black',
            borderWidth: 0,
            borderColor: '#AAA'
        },
        data: [0, 0, 0, 0, 0],
        color: '#F2F2F2'
        
    }, {
        name: 'Steals',
        dataLabels: {
            enabled: true,
            borderRadius: 12,
            backgroundColor: 'rgba(92,176,202,0.5)',
            borderWidth: 0,
            borderColor: '#AAA'
        },
        data: [0, 0, 0, 0, 0],
        color: '#97992B'
    },{
        name: 'Rebounds',
        dataLabels: {
            enabled: true,
            borderRadius: 12,
            backgroundColor: 'rgba(92,176,202,0.5)',
            borderWidth: 0,
            borderColor: '#AAA'
        },
        data: [0, 0, 0, 0, 0],
        color: '#D96690'
    }]
});

////////////////////////////////////////////////////////////////


const Lbj = document.querySelector("#lebron");
const gian = document.querySelector("#giannis");
const luk = document.querySelector("#luka");
const hard = document.querySelector("#harden");
const leo = document.querySelector("#leonard");
const dav = document.querySelector("#davis");
const dur = document.querySelector("#durant");
const curr = document.querySelector("#curry");
const gorg = document.querySelector("#george");
const emb = document.querySelector("#embiid");
const btn1 = document.querySelector("#btn");


Lbj.onclick = () => {

    chart.update({
          title:{text: "Lebron james"}
    });

    chart.series[0].update({
        data: [1800, 1830, 1900, 2330, 2121],
        
    });
    chart.series[1].update({
        data: [920, 860, 605, 811, 719],
        
    });
    chart.series[2].update({
        data: [195, 260, 260, 250, 266]
    });
    chart.series[3].update({
        data: [871, 810, 700, 911, 790]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });
    btn1.onclick = () => {
        chart.series.update({visible: false});
        }
};

/////////////////////////////////////////////////////////////////

gian.onclick = () => {

    chart.update({
          title:{text: "Giannis antetokounmpo"}
    });

    chart.series[0].update({
        data: [1180, 1480, 1780, 1700, 2101]
    });
    chart.series[1].update({
        data: [390, 540, 410, 640, 600]
    });
    chart.series[2].update({
        data: [220, 210, 190, 189, 212]
    });
    chart.series[3].update({
        data: [899, 809, 901, 980, 1030]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

///////////////////////////////////////////////////////////////////

luk.onclick = () => {

    chart.update({
          title:{text: "Luka doncic"}
    });

    chart.series[0].update({
        data: [0, 0, 0, 1529, 1700]
    });
    chart.series[1].update({
        data: [0, 0, 0, 540, 690]
    });
    chart.series[2].update({
        data: [0, 0, 0, 190, 236]
    });
    chart.series[3].update({
        data: [0, 0, 0, 790, 830]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

///////////////////////////////////////////////////////////////////

hard.onclick = () => {

    chart.update({
          title:{text: "James harden"}
    });

    chart.series[0].update({
        data: [1820, 1677, 2200, 2401, 2011]
    });
    chart.series[1].update({
        data: [450, 960, 1022, 840, 810]
    });
    chart.series[2].update({
        data: [253, 222, 244, 210, 226]
    });
    chart.series[3].update({
        data: [506, 706, 890, 760, 530]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

/////////////////////////////////////////////////////////////////////

leo.onclick = () => {

    chart.update({
          title:{text: "Kawhi leonard"}
    });

    chart.series[0].update({
        data: [1677, 1955, 1811, 1529, 2100]
    });
    chart.series[1].update({
        data: [455, 751, 521, 640, 590]
    });
    chart.series[2].update({
        data: [215, 198, 250, 243, 236]
    });
    chart.series[3].update({
        data: [744, 756, 676, 890, 790]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

/////////////////////////////////////////////////////////////////////

dav.onclick = () => {

    chart.update({
          title:{text: "Anthony davis"}
    });

    chart.series[0].update({
        data: [1377, 1555, 1411, 1929, 2300]
    });
    chart.series[1].update({
        data: [455, 751, 521, 640, 590]
    });
    chart.series[2].update({
        data: [190, 178, 171, 183, 186]
    });
    chart.series[3].update({
        data: [884, 811, 976, 890, 1190]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

//////////////////////////////////////////////////////////////////

dur.onclick = () => {

    chart.update({
          title:{text: "Kevin durant"}
    });

    chart.series[0].update({
        data: [1887, 1925, 2111, 2229, 2420]
    });
    chart.series[1].update({
        data: [653, 351, 431, 510, 590]
    });
    chart.series[2].update({
        data: [235, 248, 250, 213, 226]
    });
    chart.series[3].update({
        data: [674, 656, 876, 890, 790]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

///////////////////////////////////////////////////////////////////////

curr.onclick = () => {

    chart.update({
          title:{text: "Steven curry"}
    });

    chart.series[0].update({
        data: [1877, 1755, 1511, 2129, 2010]
    });
    chart.series[1].update({
        data: [665, 711, 611, 840, 750]
    });
    chart.series[2].update({
        data: [275, 268, 290, 213, 230]
    });
    chart.series[3].update({
        data: [344, 456, 676, 590, 510]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

////////////////////////////////////////////////////////////////////////

gorg.onclick = () => {

    chart.update({
          title:{text: "Paul george"}
    });

    chart.series[0].update({
        data: [1877, 1915, 2011, 1929, 2200]
    });
    chart.series[1].update({
        data: [555, 651, 521, 610, 710]
    });
    chart.series[2].update({
        data: [265, 218, 235, 243, 256]
    });
    chart.series[3].update({
        data: [644, 556, 776, 560, 690]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
        chart.series.update({visible: false});
    }
};

////////////////////////////////////////////////////////////////////

emb.onclick = () => {

    chart.update({
          title:{text: "Joel embiid"}
    });

    chart.series[0].update({
        data: [1377, 1555, 1711, 1729, 2000]
    });
    chart.series[1].update({
        data: [425, 351, 523, 420, 510]
    });
    chart.series[2].update({
        data: [160, 178, 190, 173, 186]
    });
    chart.series[3].update({
        data: [844, 956, 1076, 1190, 1290]
    });

    chart.update({
        plotOptions: { series: {animation: {duration:3000} }}
    });

    btn1.onclick = () => {
    chart.series.update({visible: false});
    }
};

/////////////////////////////////////////////////////////////////////


btn1.onclick = () => {

    Lbj.onclick = () => {return;};
    gian.onclick = () => {return;};
    luk.onclick = () => {return;};
    dav.onclick = () => {return;};
    hard.onclick = () => {return;};
    curr.onclick = () => {return;};
    leo.onclick = () => {return;};
    gorg.onclick = () => {return;};
    dur.onclick = () => {return;};
    emb.onclick = () => {return;};


    
    chart.update({
    chart: {
        type: 'column',
        options3d: {
            enabled: false
        },
    },

    legend:{
        enabled:false
    },
    
    title: {
        text: 'Players Championships'
    },
   
    xAxis: {
         categories: ['Lebron', 'Anthony', 'Kawhi', 'Harden', 'Curry', 'Durant', 'George', 'Giannis', 'Ambiid', 'Luka'],
    },
    
    yAxis: {
        title: {
            text: 'Numbers of championships every player has',
            min: 0,
            max: 3
        }
    },
 
    series: [
        
        {
            name: "Championships",
            data: [
                {
                    name: "Joel ambiid",
                    y: 0,
                },
                {
                    name: "Anthony davis",
                    y: 0,
                },
                {
                    name: "Kawih leonard",
                    y: 0,
                },
                {
                    name: "James harden",
                    y: 0,
                },
                {
                    name: "Steven curry",
                    y: 0,
                },
                {
                    name: "Kevin durant",
                    y: 2,
                },
                {
                    name: "Paul george",
                    y: 1,
                },
                {
                    name: "Kawih leonard",
                    y: 0,
                },
                {
                    name: "Lebron james",
                    y: 0,
                },
                {
                    name: "Luka doncic",
                    y: 1,
                }
            ]
        }
    ],
   
});

}