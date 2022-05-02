import React from 'react';

import './ChartBar.css';

const className = 'chart-bar'

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={`${className}`}>
      <div className={`${className}__inner`}>
        <div
          className={`${className}__fill`}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={`${className}__label`}>{props.label}</div>
    </div>
  );
};

export default ChartBar;