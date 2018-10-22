Highcharts.chart('content3', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    credits: {
          enabled: false
      },
    defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 1
            }]
        },

        gradient1: {
            tagName: 'linearGradient',
            id: 'gradient-1',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 1
            }]
        }
    },

    series: [{
        data: [5,5,5,5,5,5],
        step: 'right',
        name: 'Lain-lain'
    }, {
        data: [6,6,6,6,6,6],
        step: 'center',
        name: 'Ujaran Kebencian'
    },{
        data: [1,1,1,1,1,1],
        step: 'center',
        name: 'Hoax'
    },{
        data: [4,4,4,4,4,4],
        step: 'center',
        name: 'Politik Uang'
    },{
        data: [2,2,2,2,2,2],
        step: 'center',
        name: 'Perusakan Atribut'
    }, {
        data: [3,3,3,3,3,3],
        step: 'left',
        name: 'Black Campaign'
    }]
});
Highcharts.chart('content4', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ' '
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(255,133,51, .2)'
        }]
    },
    yAxis: {
        title: {
            text: ' '
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'candidate-1',
        color: 'rgba(255,133,51,0.2)',
        data: [3, 4, 3, 5, 4, 10]
    }, {
        name: 'candidate-2',
        color: 'rgba(255,204,0,0.2)',
        data: [1, 3, 4, 3, 3, 5]
    }]
});
Highcharts.chart('job-chart3-4', {
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
            'Black Campaign',
            'Perusak Atribut',
            'Ujaran Kebencian',
            'Hoax',
            'Politik Uang',
            'Lain Lain',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Score'
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
        data: [50, 90, 80, 40, 120],
        colorByPoint: true
    }]
});
Highcharts.chart('job-chart3-3', {
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
            'Entertaiment',
            'Kerja Bakti',
            'Kajian Publik',
            'Pengajian',
            'Kompetisi',
            'Olahraga',
            'Lain-lain'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Score'
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
        data: [50, 90, 80, 40, 120,30,70],
        colorByPoint: true
    }]
});
Highcharts.chart('job-chart3-2', {
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
            'Entertaiment',
            'Kerja Bakti',
            'Kajian Publik',
            'Pengajian',
            'Kompetisi',
            'Olahraga',
            'Lain-lain'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Score'
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
        data: [50, 90, 80, 40, 120,30,70],
        colorByPoint: true
    }]
});
AOS.init();
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}