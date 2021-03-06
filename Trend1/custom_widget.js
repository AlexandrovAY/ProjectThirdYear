﻿// Subscribes to receive property changes
//cwidget.on("PropertyName", function() {

// Gets property value
//console.log(cwidget.PropertyName);

// Sets property value
//   cwidget.PropertyName = "value"

// Triggers an event
//   cwidget.dispatchEvent("EventName");

//});

//Below is the chart ma men, what is above is what is autogenerated by the widget when created.
//it's for the properties and other features that you configure in the program.

  

function myFetch(){

	fetch("http://localhost:5000/")
       .then((response) => {
          return response.json();
        })
       .then((data) => {
           //console.log(data);
           //const finalPoints = [];
           //data.forEach((a) => {
              //finalPoints.push({ x: new Date(a.x), y: a.y });
           //});
           console.log(data);
       new Vue({
	   el: '#app',
        components: {
          apexchart: VueApexCharts,
        },
        data: {
          
          series: [{
            data: data
          }],
          chartOptions: {
            chart: {
              id: 'area-datetime',
              type: 'area',
              height: 350,
              zoom: {
                autoScaleYaxis: true
              }
            },
            annotations: {
              yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                  show: true,
                  text: 'Support',
                  style: {
                    color: "#fff",
                    background: '#00E396'
                  }
                }
              }],
              xaxis: [{
                x: new Date('05 Oct 2019').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                  show: true,
                  text: 'Rally',
                  style: {
                    color: "#fff",
                    background: '#775DD0'
                  }
                }
              }]
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
              style: 'hollow',
            },
            xaxis: {
              type: 'datetime',
              min: new Date('01 Mar 2012').getTime(),
              tickAmount: 6,
            },
            tooltip: {
              x: {
                format: 'dd MMM yyyy'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
          },
          
          selection: 'one_year',
        },
        methods: {
          updateData: function(timeline) {
            this.selection = timeline
        
            switch (timeline) {
              case 'Customized':
                this.$refs.chart.zoomX(
                  new Date('05 Oct 2019').getTime(),
                  new Date('06 Oct 2019').getTime()
                )
                break
              case 'all':
                this.$refs.chart.zoomX(
                  //new Date(data[0][0]).getTime(),
                  //new Date(data[data.length-1][0]).getTime()
		  data[0][0], 
		  data[data.length-1][0]
                )
                break
              default:
            }
          }
        }
       }) //Here function Vue closes
    
        }); //Here then clause closes
         
      

}//Here myFetch closes

document.getElementById("myBtn").addEventListener("click", myFetch);
//myFetch();
	
    
