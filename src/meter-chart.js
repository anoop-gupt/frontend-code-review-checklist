const meterChart = (selectedWeights) => {
    const google = window.google
    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawChart);

    let _data = [
      ['Label', 'Value'],
      ['Meter', 0]
    ]
    const finalWeight = 0
  
    function drawChart() {
  
      var data = google.visualization.arrayToDataTable(_data);
  
      var options = {
          width: 150, height: 150,
          redFrom: 0, redTo: 25,
          yellowFrom:26, yellowTo: 75,
          greenFrom:76, greenTo: 100,
          minorTicks: 5
      };
  
      var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  
      chart.draw(data, options);
  
      setInterval(function() {
        data.setValue(0, 1, finalWeight);
        chart.draw(data, options);
      }, 1000);
    }
}
export default meterChart