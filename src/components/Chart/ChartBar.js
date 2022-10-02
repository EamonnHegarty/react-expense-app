import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  //default the bar to fill to 0 percent
  let barFillHeight = "0%";
  //if we have props then we set the bar fill height to be
  //the precent of maxvalue
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
