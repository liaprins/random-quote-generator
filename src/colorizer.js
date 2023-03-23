import { quoteList } from "./data.js";

export function colorizer(charCount) {

  // determine length of shortest and longest quotes in set
  let mostChars = 0;
  quoteList.map((quote) => {
    if (quote.content.length > mostChars) {
      mostChars = quote.content.length;
    }
  })
  let leastChars = mostChars;
  quoteList.map((quote) => {
    if (quote.content.length < leastChars) {
      leastChars = quote.content.length;
    }
  })
  
  // use quote-length to assign LAB-based color
  const charRange = mostChars - leastChars;
  const labRange = 250;
  const charCountScaled = charCount - leastChars;
  const b = ((((charCountScaled * labRange) / charRange) - (labRange / 2)) * -1);
  const a = b - (labRange / 2);
  console.log(`b: ${b} // a: ${a}`);

  return {
    b: b,
    a: a
  }
}