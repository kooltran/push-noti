import {
  formatTime,
  getTimeMode,
  generateTime,
  sampleDataTimeItem,
  convertPxToTime,
  convertDataToXY,
  getQuadraticCurvePoint,
} from "./helpers";

describe("formatTime", () => {
  it("should have format time 'hour:min pm' when input time over than 12", () => {
    expect(formatTime(22)).toEqual("10:00 pm");
  });

  it("should have format time 'hour:min am' when input time less than 12", () => {
    expect(formatTime(9)).toEqual("9:00 am");
  });

  it("should have format time '12:00 pm' when input time at 0", () => {
    expect(formatTime(0)).toEqual("12:00 pm");
  });
});

describe("getTimeMode", () => {
  it("should return mode 'sun' when input time between 6am and 12pm", () => {
    expect(getTimeMode(12)).toEqual({ mode: "sun" });
  });

  it("should return mode 'sun' when input time between 12pm and 6am", () => {
    expect(getTimeMode(3)).toEqual({ mode: "moon" });
  });
});

describe("generateTime", () => {
  const sampleData = [
    {
      time: {
        start: 0,
        end: 6,
      },
    },
    {
      time: {
        start: 6,
        end: 12,
      },
    },
    {
      time: {
        start: 12,
        end: 18,
      },
    },
    {
      time: {
        start: 18,
        end: 24,
      },
    },
  ];

  it("should return right array with length equal when input period 5", () => {
    expect(generateTime(5).length).toEqual(5);
  });

  it("should return right array time format when input period number", () => {
    expect(generateTime(4)).toEqual(sampleData);
  });
});

describe("sampleDataTimeItem", () => {
  it("should return right format when input period number", () => {
    expect(sampleDataTimeItem(0)).toEqual({ time: { start: 0, end: 6 } });
  });
});

describe("convertPxToTime", () => {
  it("should return right time when input pixel number and chartWidth number", () => {
    expect(convertPxToTime(200, 400)).toEqual(12);
  });
});

describe("convertDataToXY", () => {
  it("should return right 'x' and 'y' when input right time and water level", () => {
    expect(convertDataToXY(250, 2.5, 9, 35)).toEqual({ x: 315, y: 0 });
  });
});

describe("getQuadraticCurvePoint", () => {
  it("should return right 'x' and 'y' when input right info to draw the curve", () => {
    expect(getQuadraticCurvePoint(0, 200, 200, 0, 400, 200, 0.0)).toEqual({
      x: 0,
      y: 200,
    });
  });
});
