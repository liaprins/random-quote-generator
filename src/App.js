import * as React from "react";
import { Fragment } from "react";
import { useState } from 'react';
import { randomQuote } from "./randomizer.js";

function Quote({content, author}) {
  return(
    <Fragment>
      <div id="quote">
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

function New({handleClick}) {
  return <button id="new-quote" onClick={handleClick}>New quote</button>;
}

export default function Wrapper() {
  const [quoteData, setQuoteData] = useState(randomQuote());
  return (
    <div id="quote-box">
      <Quote 
        content={quoteData.content}
        author={quoteData.author}
      />
      <New handleClick={() => setQuoteData(randomQuote)} />
    </div>
  );
}
