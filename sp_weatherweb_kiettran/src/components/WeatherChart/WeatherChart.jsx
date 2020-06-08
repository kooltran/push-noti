import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { formatTime, generateTime } from "../../helpers";

const NUMB_DAYS = 5;

const sampleDateWater = [
  {
    waterLevel: {
      start: 2,
      end: 0.3,
    },
  },
  {
    waterLevel: {
      start: 0.3,
      end: 2,
    },
  },
  {
    waterLevel: {
      start: 2,
      end: 0.3,
    },
  },
  {
    waterLevel: {
      start: 0.3,
      end: 2,
    },
  },
  {
    waterLevel: {
      start: 2,
      end: 0.3,
    },
  },
  {
    waterLevel: {
      start: 0.3,
      end: 2,
    },
  },
  {
    waterLevel: {
      start: 2,
      end: 0.3,
    },
  },
  {
    waterLevel: {
      start: 0.3,
      end: 2,
    },
  },
  {
    waterLevel: {
      start: 2,
      end: 0.3,
    },
  },
  {
    waterLevel: {
      start: 0.3,
      end: 2,
    },
  },
];

const sampleDataTime = generateTime(sampleDateWater.length);

const tideData = sampleDateWater.map((item, i) => ({
  ...item,
  ...sampleDataTime[i],
}));

const WeatherChart = () => {
  const { innerWidth } = window;
  const chartRef = React.createRef();
  const chartContainerRef = React.createRef();
  const [chartWidth, setChartWidth] = useState(innerWidth);
  const [scrollNumb, setScroll] = useState(0);
  const halfInnerWidth = chartWidth / 2;
  const pxEachHr = chartWidth / 12;
  // let position = 0.0;

  const convertDataToXY = useCallback(
    (chartHeight, waterLevel, time) => {
      return {
        x: (time - 7) * pxEachHr,
        y: chartHeight - waterLevel * 100,
      };
    },
    [pxEachHr]
  );

  const drawTimeChart = useCallback(
    (chartHeight) => {
      const ctx = chartRef.current.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ff8514";

      for (let i = 0; i < NUMB_DAYS; i++) {
        ctx.moveTo(i * chartWidth, chartHeight);
        if (i % 2) {
          ctx.quadraticCurveTo(
            chartWidth * i + halfInnerWidth,
            chartHeight * 2,
            chartWidth * (i + 1),
            chartHeight
          );

          // fill color for night times
          ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
          ctx.fillRect(chartWidth * i, 0, chartWidth, chartHeight);
        } else {
          ctx.quadraticCurveTo(
            chartWidth * i + halfInnerWidth,
            -chartHeight + 150,
            chartWidth * (i + 1),
            chartHeight
          );
        }
      }

      ctx.stroke();
    },
    [chartRef, chartWidth, halfInnerWidth]
  );
  const _fillChartBg = ({ start, end, chartHeight, ctx, options = {} }) => {
    ctx.lineTo(end.x, chartHeight);
    ctx.lineTo(start.x, chartHeight);
    ctx.lineTo(start.x, start.y);

    ctx.fillStyle = options.fillStyle || "#c1e5f7";
    ctx.strokeStyle = "#c1e5f7";
    ctx.fill();
  };

  const _fillText = (start, ctx, dataText) => {
    ctx.font = "14px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillStyle = "#333";
    ctx.fillText(`${dataText.waterLevel} m`, start.x, start.y - 27);
    ctx.fillText(formatTime(dataText.time), start.x, start.y - 9);

    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(start.x - 28, start.y - 44, 55, 44);
  };

  const drawTideChart = useCallback(
    (chartHeight) => {
      const ctx = chartRef.current.getContext("2d");
      const chartContainerHeight = chartContainerRef.current.getBoundingClientRect()
        .height;
      ctx.beginPath();
      ctx.strokeStyle = "#94d6f7";

      for (let i = 0; i < tideData.length; i++) {
        const startPt = convertDataToXY(
          chartHeight,
          tideData[i].waterLevel.start,
          tideData[i].time.start
        );
        const endPt = convertDataToXY(
          chartHeight,
          tideData[i].waterLevel.end,
          tideData[i].time.end
        );

        _fillText(startPt, ctx, {
          waterLevel: tideData[i].waterLevel.start,
          time: tideData[i].time.start,
        });
        _fillText(endPt, ctx, {
          waterLevel: tideData[i].waterLevel.end,
          time: tideData[i].time.end,
        });

        const middlePtY =
          (chartHeight - startPt.y - (chartHeight - endPt.y)) / 2 + startPt.y;

        const middlePtX = (endPt.x - startPt.x) / 2 + startPt.x;
        const middlePt = { x: middlePtX, y: middlePtY };

        if (!(i % 2)) {
          ctx.moveTo(startPt.x, startPt.y);
          ctx.quadraticCurveTo(middlePtX, startPt.y, middlePtX, middlePtY);

          _fillChartBg({
            start: startPt,
            end: middlePt,
            chartHeight: chartContainerHeight,
            ctx,
          });

          ctx.moveTo(middlePtX, middlePtY);
          ctx.quadraticCurveTo(middlePtX, endPt.y, endPt.x, endPt.y);

          _fillChartBg({
            start: middlePt,
            end: endPt,
            chartHeight: chartContainerHeight,
            ctx,
          });
        } else {
          ctx.moveTo(startPt.x, startPt.y);
          ctx.quadraticCurveTo(middlePtX, startPt.y, middlePtX, middlePtY);

          _fillChartBg({
            start: startPt,
            end: middlePt,
            chartHeight: chartContainerHeight,
            ctx,
          });

          ctx.moveTo(middlePtX, middlePtY);
          ctx.quadraticCurveTo(middlePtX, endPt.y, endPt.x, endPt.y);

          _fillChartBg({
            start: middlePt,
            end: endPt,
            chartHeight: chartContainerHeight,
            ctx,
          });
        }
      }

      ctx.stroke();
    },
    [chartContainerRef, chartRef, convertDataToXY]
  );

  const handleScroll = ({ target }) => {
    setScroll(target.scrollLeft);
  };

  const handleCanvas = useCallback(() => {
    const chartHeight = chartContainerRef.current.offsetHeight;
    const c = chartRef.current;

    c.width = NUMB_DAYS * chartWidth;
    c.height = chartHeight * 2;

    drawTideChart(chartHeight);
    drawTimeChart(chartHeight);
  }, [chartContainerRef, chartRef, chartWidth, drawTideChart, drawTimeChart]);

  useLayoutEffect(() => {
    const updateChartWidth = (e) => {
      const resizedChartWidth = e && e.currentTarget.innerWidth;
      if (resizedChartWidth) {
        setChartWidth(resizedChartWidth);
      }
    };
    updateChartWidth();
    window.addEventListener("resize", updateChartWidth);
    return () => {
      window.removeEventListener("resize", updateChartWidth);
    };
  }, [chartWidth]);

  useEffect(() => {
    handleCanvas();
  }, [chartWidth, handleCanvas, scrollNumb]);

  return (
    <div
      className="chart-container"
      ref={chartContainerRef}
      onScroll={handleScroll}
    >
      <div className="chart-title">
        <span className="blue-title">Tide</span>
        <span className="orange-title">Sunrise & Sunset</span>
      </div>
      <canvas className="chart-canvas" ref={chartRef} />
    </div>
  );
};

export default WeatherChart;
