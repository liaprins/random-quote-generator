import * as React from "react";
import { Fragment } from "react";
import { useState } from 'react';
import { randomQuote } from "./randomizer.js";
import { colorizer } from "./colorizer.js";



function Quote({content, author, b}) {
  const style = {
    backgroundColor: `lab(85% 0 ${b})`
  }
  return(
    <Fragment>
      <div 
        id="quote"
        style={style}
      >
        <p 
          id="text">{content}</p>
        <p id="author">{"—" + author + " // " + content.length}</p>
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
        b={colorizer(quoteData.content.length)}
      />
      <New handleClick={() => setQuoteData(randomQuote)} />
    </div>
  );
}
