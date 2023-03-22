import { quoteList } from "./data.js";

export function randomQuote() {
  const random = Math.floor(Math.random() * quoteList.length); // scale Math.random's result across total quote count so it corresponds to a quote's index
  return quoteList[random];
}
