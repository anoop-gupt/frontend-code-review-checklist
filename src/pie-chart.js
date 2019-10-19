const pieChart = (items) => {
    let _data = [
      ['Districution Weight', 'Per Category']
    ]

    for(let i=0;  i < items.length; i++) {
        _data.push([items[i].title, items[i].weight])
    }

    const google = window.google; 
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
  
      var data = google.visualization.arrayToDataTable(_data);
  
      var options = {
        title: 'Distribution Weight',
        is3D: true,
        legend: 'right'
      };
  
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  
      chart.draw(data, options);
    }
}
export default pieChart
