import React from "react";
import Collapsible from "react-collapsible";
import "./App.scss";
import checkList from "./data.json";

function chart(){
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
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 6
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);

    setInterval(function() {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 13000);
    setInterval(function() {
      data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 5000);
    setInterval(function() {
      data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
      chart.draw(data, options);
    }, 26000);
  }
}

function pieChart() {
  const google = window.google; 
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Architecture',     10],
      ['Formating',      20],
      ['Styling',  15],
      ['Tools', 10],
      ['Best Practices',    5],
       ['Non Functional',    40]
    ]);

    var options = {
      title: 'Distribution Points',
      is3D: true,
      legend: 'right'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
}

function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="#">Frontend Code Review Checklist</a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 col-lg-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Code Style
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Code formating
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Architecture
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coding best practices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Non-functional
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tools
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-6 ml-sm-auto col-lg-6 pt-3 px-4">
          <div className="content">{Accordion(checkList)}</div>
        </main>
        <div className="col-md-4 col-lg-4">
          <div id="piechart">{pieChart()}</div>
          <div id="chart_div">{chart()}</div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

function Accordion(category, header) {
  if (Array.isArray(category)) {
    return (
      <div className='list'>
        <h4>{header}</h4>
        {category.map((data, index) => (
          <div className="form-check" key={header + index}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {data}
            </label>
          </div>
        ))}
      </div>
    );
  } else {
    const categoryKeys = Object.keys(category);
    return header ? (
      <Collapsible trigger={header} key={header}>
        {categoryKeys.map(keys => Accordion(category[keys], keys))}
      </Collapsible>
    ) : (
      categoryKeys.map(keys => Accordion(category[keys], keys))
    );
  }
}

export default App;
