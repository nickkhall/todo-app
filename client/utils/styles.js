export const combineStyles = (...styles) => function CombineStyles(theme) {
  const outStyles = styles.map((arg) => {
    // Apply the "theme" object for style functions.
    if (typeof arg === 'function') {
      return arg(theme);
    }
    // Objects need no change.
    return arg;
  });

  return outStyles.reduce((acc, val) => Object.assign(acc, val));
};

export const hexToRGB = (hex, alpha = 1) => {
  let parseString = hex;
  if (hex.startsWith('#')) { parseString = hex.slice(1, 7); }
  if (parseString.length !== 6) { return null; }
  const r = parseInt(parseString.slice(0, 2), 16);
  const g = parseInt(parseString.slice(2, 4), 16);
  const b = parseInt(parseString.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) { return null; }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
