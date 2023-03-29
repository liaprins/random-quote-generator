import React, { useState, useEffect } from 'react';
import { Quote } from "./Quote.js";
import { colorizer } from "./colorizer.js";

export default function Wrapper() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newQuote, setNewQuote] = useState(true); // establish this var so it can be called later and updated, in turn triggering useEffect's fetch() method to run again upon button click
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'nawZ9nbRidxzlaAgYEMcTw==NnR9bZb4NN8o4SfI'
    }
  };

  // pass quote's length to colorizer() to determine color to associate it to in UI; used by both Quote and New components
  let color;
  data && (color = `lab(
    85% 
    ${colorizer(data.quote.length).a} 
    ${colorizer(data.quote.length).b}
    )`);

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);
    const getData = async() => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=dreams', fetchOptions
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
    }
    getData()
  }, [newQuote]); // set newQuote state var as a dependency for useEffect, so that useEffect will be re-triggered anytime newQuote changes

  return (
    <div id="quote-box">
      <Quote 
        color={color}
        loading={loading}
        error={error}
        data={data}
        handleClick={() => setNewQuote(!newQuote)} // change value of newQuote so that useEffect will be triggered to return a new quote
      />
    </div>
  );
}
