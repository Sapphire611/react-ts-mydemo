import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

function echartInit(node: HTMLElement | null | undefined, xData: Array<string>, sData: Array<number>, title: string) {
  const myChart = echarts.init(node, null);
  // 绘制图表
  myChart.setOption({
    color: [
      //   '#c23531',
      //   '#2f4554',
      //   '#61a0a8',
      //   '#d48265',
      //   '#91c7ae',
      //   '#749f83',
      //   '#ca8622',
      '#bda29a',
      //   '#6e7074',
      //   '#546570',
      //   '#c4ccd3',
    ],
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
}

interface Bar_I {
  style: {
    width: string;
    height: string;
  };
  xData: Array<string>;
  sData: Array<number>;
  title: string;
}

function Bar(bar: Bar_I) {
  // 1. 先不考虑传参问题  静态数据渲染到页面中
  // 2. 把那些用户可能定制的参数 抽象props (1.定制大小 2.data 以及说明文字)
  const { style, xData, sData, title } = bar;

  const nodeRef = useRef(null);

  useEffect(() => {
    echartInit(nodeRef.current, xData, sData, title);
  }, [xData, sData, title]);

  return <div ref={nodeRef} style={style}></div>;
}

export default Bar;
