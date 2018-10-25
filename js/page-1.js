Highcharts.chart('content2-chart1', {
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
Highcharts.chart('content2-chart2', {
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
Highcharts.chart('content2-chart3', {
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
Highcharts.chart('content5-chart1', {
  title: {
        text: ' '
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
Highcharts.chart('content5-chart2', {
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
Highcharts.chart('content5-chart3', {
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
Highcharts.chart('content3-chart', {
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
Highcharts.chart('content5-chart', {
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
            '07:00 AM',
            '08:00 AM',
            '09:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 AM',
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
$( document ).ready(function() {
  setTimeout(function(){
    $(".highcharts-plot-bands-0").attr('id', 'chart-content3');
  })
});
$( document ).ready(function() {
  setTimeout(function(){
    $(".highcharts-color-0").attr('id', 'chart-content2');
  })
});
$( document ).ready(function() {
  setTimeout(function(){
    $(".highcharts-yaxis-grid").attr('id', 'line-chart');
  })
});
$( document ).ready(function() {
  setTimeout(function(){
    $(".highcharts-yaxis-labels").attr('id', 'labels');
  })
});
$( document ).ready(function() {
  setTimeout(function(){
    $(".highcharts-xaxis-labels").attr('id', 'label');
  })
});
AOS.init();
document.getElementById("mySidenav").style.width = "0"

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}