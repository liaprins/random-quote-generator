export function colorizer(charCount) {

  // manually set max and min quote length between which to map background colors
  const maxChars = 250;
  const minChars = 25;
  const charRange = maxChars - minChars;
  const charCountScaled = charCount - minChars;
  const positiveLabRange = 125;

  // set a and b within lab() colorspace
  let a = 0; 
  let b;
  if (charCount > maxChars) { // if beyond max char length accounted for in color spectrum...
    b = -positiveLabRange; // ...set b to max color accounted for within spectrum (-125; blue)
  } else if (charCount < minChars) { // if below min char length accounted for in color spectrum...
    b = positiveLabRange; // ...set b to min color accounted for within spectrum (125; yellow)
  } else { // if within char length range...
    b = ((((charCountScaled * (positiveLabRange * 2)) / charRange) - positiveLabRange) * -1);
    a = b - positiveLabRange;
  }

  return {
    b: b,
    a: a
  }
}