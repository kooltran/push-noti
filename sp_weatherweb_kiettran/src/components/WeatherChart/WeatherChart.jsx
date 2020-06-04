import React, { useEffect, useState, useLayoutEffect } from "react";

const useChartSize = (chartRef) => {
  const { innerWidth } = window;
  const [chartWidth, setChartWidth] = useState(innerWidth);
  useLayoutEffect(() => {
    const chartContainerWidth = chartRef.current.offsetWidth;
    setChartWidth(chartContainerWidth, "chartContainerWidth");
    const updateChartWidth = (e) => {
      const resizedChartWidth = e && e.currentTarget.innerWidth;
      if (resizedChartWidth) {
        setChartWidth(resizedChartWidth);
      }
    };
    window.addEventListener("resize", updateChartWidth);
    updateChartWidth();
    return () => window.removeEventListener("resize", updateChartWidth);
  }, [chartWidth]);

  return chartWidth;
};

const WeatherChart = () => {
  const { innerWidth } = window;
  const chartRef = React.createRef();
  const chartContainerRef = React.createRef();
  // const [chartWidth, setChartWidth] = useState(innerWidth);

  const handleCanvas = () => {
    console.log(chartRef, "inside");
    const c = chartRef.current;
    const ctx = c.getContext("2d");
    const halfInnerWidth = innerWidth / 2;
    const chartContainerHeight = chartContainerRef.current.offsetHeight;
    const beginPt = chartContainerHeight;

    c.width = 5 * innerWidth;
    c.height = beginPt * 2;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff8514";

    for (let i = 0; i < 5; i++) {
      ctx.moveTo(i * innerWidth, beginPt);
      if (i % 2) {
        ctx.quadraticCurveTo(
          innerWidth * i + halfInnerWidth,
          beginPt * 2,
          innerWidth * (i + 1),
          beginPt
        );
      } else {
        ctx.quadraticCurveTo(
          innerWidth * i + halfInnerWidth,
          -beginPt + 150,
          innerWidth * (i + 1),
          beginPt
        );
      }
    }

    ctx.stroke();
  };

  // useLayoutEffect(() => {
  //   const chartContainerWidth = chartContainerRef.current.offsetWidth;
  //   setChartWidth(chartContainerWidth, "chartContainerWidth");
  //   const updateChartWidth = (e) => {
  //     const resizedChartWidth = e && e.currentTarget.innerWidth;
  //     if (resizedChartWidth) {
  //       console.log(chartRef.current, "chartRef");
  //       setChartWidth(resizedChartWidth);
  //       handleCanvas(chartWidth, chartRef.current);
  //     }
  //   };
  //   updateChartWidth();
  //   window.addEventListener("resize", updateChartWidth);
  //   return () => {
  //     window.removeEventListener("resize", updateChartWidth);
  //   };
  // }, [chartWidth, handleCanvas]);

  useEffect(() => {
    handleCanvas();
  }, []);

  return (
    <div className="chart-container" ref={chartContainerRef}>
      <div className="chart-title">
        <span className="blue-title">Tide</span>
        <span className="orange-title">Sunrise & Sunset</span>
      </div>
      <canvas className="chart-canvas" ref={chartRef} />
    </div>
  );
};

export default WeatherChart;
