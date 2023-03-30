import React, { useState, useEffect } from "react";
import { Quote } from "./Quote.js";
import { colorizer } from "./colorizer.js";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-Api-Key": "nawZ9nbRidxzlaAgYEMcTw==NnR9bZb4NN8o4SfI",
  },
};

export default function Wrapper() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuote();
  }, []);

  // pass quote's length to colorizer() to determine color to associate it to in UI; used by both Quote and New components
  const color =
    data &&
    `lab(
    85%
    ${colorizer(data.quote.length).a}
    ${colorizer(data.quote.length).b}
    )`;

  return (
    <div id="quote-box">
      <Quote
        color={color}
        loading={loading}
        error={error}
        data={data}
        handleClick={() => getQuote()} // change value of newQuote so that useEffect will be triggered to return a new quote
      />
    </div>
  );

  function getQuote() {
    setData(null);
    setError(null);
    setLoading(true);

    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=dreams",
          FETCH_OPTIONS
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        let actualData = await response.json();
        setData(actualData[0]);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }
}
