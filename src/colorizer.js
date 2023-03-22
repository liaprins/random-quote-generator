import { quoteList } from "./data.js";

export function colorizer(charCount) {
  let mostChars = 0;
  let leastChars;
  quoteList.map((quote) => {
    if (quote.content.length > mostChars) {
      mostChars = quote.content.length;
    }
  })

  leastChars = mostChars;
  quoteList.map((quote) => {
    if (quote.content.length < leastChars) {
      leastChars = quote.content.length;
    }
  })
  
  const charRange = mostChars - leastChars;
  const labRange = 250;
  const charCountScaled = charCount - leastChars;
  const b = (((charCountScaled * labRange) / charRange) - (labRange / 2));
  
  console.log(`mostChars: ${mostChars} // leastChars: ${leastChars} // charCount: ${charCount} // b: ${b}`);
  console.log();

  return b;  
}