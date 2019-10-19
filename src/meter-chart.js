const meterChart = (selectedWeight) => {
    const google = window.google
    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
  
      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Meter', 80]
      ]);
  
      var options = {
          width: 200, height: 200,
          redFrom: 0, redTo: 25,
          yellowFrom:26, yellowTo: 75,
          greenFrom:76, greenTo: 100,
          minorTicks: 5
      };
  
      var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  
      chart.draw(data, options);
  
      setInterval(function() {
        data.setValue(0, 1, selectedWeight);
        chart.draw(data, options);
      }, 500);
    }
}
export default meterChart