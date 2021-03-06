var data = [
    ['id-3700', 0],
    ['id-ac', 1],
    ['id-ki', 2],
    ['id-jt', 3],
    ['id-be', 4],
    ['id-bt', 5],
    ['id-kb', 6],
    ['id-bb', 7],
    ['id-ba', 8],
    ['id-ji', 9],
    ['id-ks', 10],
    ['id-nt', 11],
    ['id-se', 12],
    ['id-kr', 13],
    ['id-ib', 14],
    ['id-su', 15],
    ['id-ri', 16],
    ['id-sw', 17],
    ['id-la', 18],
    ['id-sb', 19],
    ['id-ma', 20],
    ['id-nb', 21],
    ['id-sg', 22],
    ['id-st', 23],
    ['id-pa', 24],
    ['id-jr', 25],
    ['id-1024', 26],
    ['id-jk', 27],
    ['id-go', 28],
    ['id-yo', 29],
    ['id-kt', 30],
    ['id-sl', 31],
    ['id-sr', 32],
    ['id-ja', 33]
];

// Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: 'countries/id/id-all'
        },

        title: {
            text: 'Relawan Distribution Arean'
        },

        subtitle: {
            text: 'Source map: <a href="js/id-all.js">Indonesia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },
        credits: {
          enabled: false
      },
        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
