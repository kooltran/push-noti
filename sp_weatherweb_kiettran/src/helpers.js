export const formatTime = (time) => {
  const fmTime = time % 24;
  if (fmTime > 12) {
    return `${fmTime - 12} pm`;
  }
  return `${fmTime} am`;
};

export const generateTime = (n) => {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(sampleDataTimeItem(i));
  }
  return res;
};

export const sampleDataTimeItem = (n) => {
  const TIDE_PERIOD = 7;
  return {
    time: {
      start: n * TIDE_PERIOD,
      end: (n + 1) * TIDE_PERIOD,
    },
  };
};

export const _getQBezierValue = (t, p1, p2, p3) => {
  var iT = 1 - t;
  return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
};

export const getQuadraticCurvePoint = (
  startX,
  startY,
  cpX,
  cpY,
  endX,
  endY,
  position
) => {
  return {
    x: _getQBezierValue(position, startX, cpX, endX),
    y: _getQBezierValue(position, startY, cpY, endY),
  };
};
