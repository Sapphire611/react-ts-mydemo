import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

function echartInit(
  node: HTMLDivElement | null | undefined,
  xData: Array<string>,
  sData: Array<number>,
  title: string
) {
  if (!node) {
    // Handle the case where node does not exist
    return null;
  }

  // Check if the chart instance already exists
  let myChart = echarts.getInstanceByDom(node);

  if (!myChart) {
    // If the chart instance doesn't exist, create it
    myChart = echarts.init(node, null);
  }

  // Update the chart options
  myChart.setOption({
    color: ['#bda29a'],
    title: {
      text: title,
    },
    tooltip: {},
    xAxis: {
      data: xData,
    },
    yAxis: {},
    series: [
      {
        name: '得分',
        type: 'bar',
        data: sData,
      },
    ],
  });

  return myChart;
}

interface BarProps {
  style?: React.CSSProperties;
  xData: Array<string>;
  sData: Array<number>;
  title?: string;
}

function Bar({ style, xData, sData, title = '' }: BarProps) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const myChartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    // Initialize or update the chart
    const chartInstance = echartInit(nodeRef.current, xData, sData, title);

    if (chartInstance) {
      myChartRef.current = chartInstance;
    }

    // Cleanup: Dispose of the chart instance when the component unmounts
    return () => {
      if (myChartRef.current) {
        myChartRef.current.dispose();
      }
    };
  }, [xData, sData, title]);

  return <div ref={nodeRef} style={style}></div>;
}

export default Bar;
