Highcharts.chart('job-chart3-1', {
  title: {
        text: ''
    },

  chart: {
    type: 'variwide'
  },


  xAxis: {
    type: 'category',

  },
  credits: {
      enabled: false
  },
  legend: {
    enabled: false
  },

  series: [{
    data: [
      ['1', 20, 300000],
      ['2', 30, 300000],
      ['3', 20, 300000],
      ['4', 30, 300000],
      ['5', 40, 300000],
      ['6', 20, 300000],
      ['7', 25, 300000],
      ['8', 30, 300000],
      ['9', 25, 300000],
      ['10', 10, 300000],
      ['11', 20, 300000],
      ['12', 30, 300000],
      ['13', 20, 300000],


    ],

  }]
});
Highcharts.chart('job-chart3-2', {
  title: {
        text: ''
    },

  chart: {
    type: 'variwide'
  },


  xAxis: {
    type: 'category',

  },
  credits: {
      enabled: false
  },
  legend: {
    enabled: false
  },

  series: [{
    data: [
      ['1', 20, 300000],
      ['2', 30, 300000],
      ['3', 20, 300000],
      ['4', 30, 300000],
      ['5', 40, 300000],
      ['6', 20, 300000],
      ['7', 25, 300000],
      ['8', 30, 300000],
      ['9', 25, 300000],
      ['10', 10, 300000],
      ['11', 20, 300000],
      ['12', 30, 300000],
      ['13', 20, 300000],


    ],

  }]
});
Highcharts.chart('job-chart3-3', {
  title: {
        text: ''
    },

  chart: {
    type: 'variwide'
  },


  xAxis: {
    type: 'category',

  },
  credits: {
      enabled: false
  },
  legend: {
    enabled: false
  },

  series: [{
    data: [
      ['1', 20, 300000],
      ['2', 30, 300000],
      ['3', 20, 300000],
      ['4', 30, 300000],
      ['5', 40, 300000],
      ['6', 20, 300000],
      ['7', 25, 300000],
      ['8', 30, 300000],
      ['9', 25, 300000],
      ['10', 10, 300000],
      ['11', 20, 300000],
      ['12', 30, 300000],
      ['13', 20, 300000],


    ],

  }]
});
Highcharts.chart('job-chart3-4', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [
            'Wirausaha',
            'PNS',
            'Karyawan Swasta',
            'Staff Ahli',
            'Lain lain',

        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
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
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6]

    }]
});
Highcharts.chart('content3', {
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
Highcharts.chart('content5', {
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
var chart = AmCharts.makeChart( 'content2-chart1', {
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
var chart = AmCharts.makeChart( 'content2-chart2', {
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
AOS.init();