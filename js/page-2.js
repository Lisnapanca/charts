// Highcharts.theme = {
//     colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
//              '#FF9655', '#FFF263', '#6AF9C4'],
//     chart: {
//         backgroundColor: {
//             linearGradient: [0, 0, 500, 500],
//             stops: [
//                 [0, 'rgb(255, 255, 255)'],
//                 [1, 'rgb(240, 240, 255)']
//             ]
//         },
//     },
//     title: {
//         style: {
//             color: '#000',
//             font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
//         }
//     },
//     subtitle: {
//         style: {
//             color: '#666666',
//             font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
//         }
//     },

//     legend: {
//         itemStyle: {
//             font: '9pt Trebuchet MS, Verdana, sans-serif',
//             color: 'black'
//         },
//         itemHoverStyle:{
//             color: 'gray'
//         }   
//     }
// };

// // Apply the theme
// Highcharts.setOptions(Highcharts.theme);
Highcharts.chart('content-1-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    credits: {
      enabled: false
  },
    
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ' '
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        data: [50, 90, 80, 40, 120, 100, 80, 140],
        colorByPoint: true
    }]
});
Highcharts.chart('content-2-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    credits: {
      enabled: false
  },
    
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ' '
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
        colorByPoint: true

    }]
});
Highcharts.chart('content-3-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    credits: {
      enabled: false
  },
    
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ' '
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
        colorByPoint: true

    }]
});
var chart = AmCharts.makeChart( "content2-chart3", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "New",
    "value": 4852
  }, {
    "title": "Returning",
    "value": 9899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );
var chart = AmCharts.makeChart( "content2-chart4", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "New",
    "value": 4852
  }, {
    "title": "Returning",
    "value": 9899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );