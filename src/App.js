import "./App.scss";
import React, {Fragment} from "react";
import checkList from "./data.json";
import pieChart from './pie-chart'
import meterChart from './meter-chart'
let meterValue = 0

function updateMeterChart(e, weight) {
  meterValue = e.target.checked ? meterValue + weight : meterValue - weight;
  meterChart(meterValue)
}

function renderChildList(data) {
    return (<Fragment>
      {data.map((subCat, index) => (<div className='sub-list' key={subCat.title + index}>
        <h4 className="breadcrumb">{subCat.title}</h4>
          {subCat.items.map((row, index) => (
          <div className="form-check" key={row.title + index}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              onClick={(e)=> {
                updateMeterChart(e, row.weight)
              }}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {row.title}
            </label>
          </div>
          ))}
        </div>))}
    </Fragment>)
}

function renderParentList(data) {
    return (<Fragment>
        {data.length && data.map((cat, index) => (
          <div className='list' key={cat.title + index} id={cat.linkId}>
            <h4 className="breadcrumb">{cat.title}</h4>
            {!cat.hasChilds && cat.items.map((row, index) => (
              <div className="form-check" key={row + index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onClick={(e)=> {
                    updateMeterChart(e, row.weight)
                  }}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  {row.title}
                </label>
              </div>
            ))}
            {cat.hasChilds && renderChildList(cat.items)}
          </div>
        ))}
    </Fragment>)
}

function App() {
  return (
    <div className="app-container">
      {/** Header */}
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="/">Frontend Code Review Checklist</a>
      </nav>

      <div className="container-fluid">
          <div className="row">
            {/** Sidebar menu */}
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column mb-2">
                  {checkList.map((row, index) => (
                    <li className="nav-item" key={row.linkId + index} >
                      <a className="nav-link" href={`#${row.linkId}`}>
                        {row.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/** Main content area */}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="row">
                {/** Description area */}
                <div className="content col-md-12 col-lg-9">{renderParentList(checkList)}</div>
                {/** Chart area */}
                <div className="sidebar col-md-12 col-lg-3">
                  <div className="sidebar-sticky">
                    <div id="piechart">{pieChart(checkList)}</div>
                    <h6 className="meter-heading">Your report</h6>
                    <div id="chart_div">{meterChart(meterValue)}</div>
                  </div>
                </div>
              </div>
            </main>
            
          </div>
          </div>
    
    </div>
  );
}


export default App;
