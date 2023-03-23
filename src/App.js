import * as React from "react";
import { Fragment } from "react";
import { useState } from 'react';
import { randomQuote } from "./randomizer.js";
import { colorizer } from "./colorizer.js";

function Quote({content, author, color}) {
  return(
    <Fragment>
      <div 
        id="quote"
        style={{backgroundColor: color}}
      >
        <p id="text">{content}</p>
        <p id="author">{"—" + author}</p>
      </div>
      <span id="tweet-container">
        <img 
          id="twitter-logo"
          src="images/twitter.svg" 
          alt="Twitter logo" 
        />
        <a 
          id="tweet-quote" 
          href={"https://twitter.com/intent/tweet?text=“" + content + "” —"+author + ",&via=iggldee"} 
          target="_blank" 
          rel="noopener noreferrer" 
          OnClick="window.open(this.href)" 
          title="Share on Twitter"
        >
          Tweet it<i>!</i>
        </a>
      </span>
    </Fragment>
  );
}

function New({handleClick, color}) {
  return (
    <button 
      id="new-quote" 
      onClick={handleClick}
      style={{
        color: color,
      }}
    >
      New quote
    </button>
  );
}

function Legend() {
  return (
    <div id="legend">
      <span className="legend-label">Shortest quote</span>
      <div id="legend-colors"></div>
      <span className="legend-label">Longest quote</span>
    </div>
  ); 
}

export default function Wrapper() {
  const [quoteData, setQuoteData] = useState(randomQuote());
  const randomFrozen = randomQuote(); // Math.random() (within randomQuote() function) returns a distinct random value for each instance it is called, so instead need to set a var to its output, in order to keep quote content, author, and length cohesively assigned to a single output quote
  const color = `lab(
    85% 
    ${colorizer(randomFrozen.content.length).a} 
    ${colorizer(randomFrozen.content.length).b}
    )`; // determine quote's color within LAB colorspace based on its length

  return (
    <div id="quote-box">
      <Quote 
        content={randomFrozen.content}
        author={randomFrozen.author}
        color={color}
      />
      <New 
        handleClick={() => setQuoteData(randomQuote)} 
        color={color}
      />
      <Legend />
    </div>
  );
}
