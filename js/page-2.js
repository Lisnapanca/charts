function bar_chart(selected_id){
    Highcharts.chart(selected_id, {
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
            'Nasionalis',
            'Integritas',
            'Bersih',
            'Cerdas',
            'Bijak',
            'Jiwa Negarawan',
            'Religius',
            'Tegas',
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
        data: [50, 90, 80, 40, 120, 100, 80, 140],
        colorByPoint: true
    }]
});
};
bar_chart('content-1-chart')
bar_chart('content-2-chart')
bar_chart('content-3-chart')
var chart = AmCharts.makeChart( "content2-chart3", {
  "type": "pie",
  "credits": {
    "enabled": false
  },
  "theme": "light",
  "dataProvider": [ 
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },  
  {
    "title": "Returning",
    "value": 9899
  } 

  ],
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
  "credits": {
    "enabled": false
  },
  "theme": "light",
  "dataProvider": [ 
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },
  {
    "title": "New",
    "value": 4852
  },  
  {
    "title": "Returning",
    "value": 9899
  } 

  ],
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
document.getElementById("mySidenav").style.width = "0"
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}