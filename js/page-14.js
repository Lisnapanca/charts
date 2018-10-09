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
Highcharts.chart('content3', {

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
        type: 'area',
        keys: ['y', 'selected'],
        data: [
            [29.9, false],
            [71.5, false],
            [55.4, false],
            [129.2, false],
            [54.0, false],
            [17.0, false],
        ]
    }]
});