import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import { useSelector } from 'react-redux';

function Dashboard() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  const rows = useSelector((state) => state.billyData.rows);
 
  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'column'
      }, // type of the chart
      title: {
        text: 'Billy'
      }, // title of the chart
      subtitle: {
        text: 'energy usage over time'
      }, // subtitle of the chart
      xAxis: {
      },
      yAxis: {
        min: 0, // minimum value of the Y Axis
        title: {
          text: 'Values'
        } // the title of the Y Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });
 
    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
 
  }, [dataSource]);
 
  useEffect(() => {
    setDataSource([{
      name: 'Temperature',
      data: rows.map(e => e.temperature)
    },
    {
      name: 'Natural Gas',
      data: rows.map((e, idx, arr) => idx > 0 ? e.naturalGas - arr[idx - 1].naturalGas : 0)
    },
    {
      name: 'Electricity',
      data: rows.map((e, idx, arr) => idx > 0 ? e.electricity - arr[idx - 1].electricity : 0)
    }]);
  }, [rows]);
 
  return (
    <div style={{ height: 800, width: '100%' }} ref={refContainer} />
  );
}

export default Dashboard;
