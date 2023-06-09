import React from "react";
import { New } from "./New.js";

export function Quote({ color, loading, error, data, handleClick }) {
  if (loading) {
    return (
      <div id="loading-box">
        <img
          className="icon"
          src="images/loader.gif"
          alt="Eye glasses' arms opening and closing with eyes roving and blinking"
        />
        <p className="primary-text">Quote incoming!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img
          className="icon"
          src="images/error.png"
          alt="Triangle with '!' inside to indicate error"
        />
        <p className="primary-text">{`An HTTP error has occurred with status ${error}`}</p>

        {error === 429 && (
          <p className="custom-message">
            This means the rate of clicks has exceeded what is allowed by the
            API; try waiting longer before requesting a new quote.
          </p>
        )}
        {error === 404 && (
          <p className="custom-message">
            This means the API's URL could not be found; if you are the creator
            of this app, check the URL you are requesting.
          </p>
        )}

        <New handleClick={handleClick} />
      </div>
    );
  }

  if (data) {
    return (
      <>
        <p className="custom-message">
          (These quotes are not endorsed by the creator of this app.)
        </p>

        <div id="quote" style={{ backgroundColor: color }}>
          <p id="text" className="primary-text">
            {data.quote}
          </p>
          <p id="author">{"—" + data.author}</p>
        </div>

        <span id="tweet-container">
          <img id="twitter-logo" src="images/twitter.svg" alt="Twitter logo" />
          <a
            id="tweet-quote"
            href={
              "https://twitter.com/intent/tweet?text=“" +
              data.quote +
              "” —" +
              data.author +
              ",&via=iggldee"
            }
            target="_blank"
            rel="noopener noreferrer"
            OnClick="window.open(this.href)"
            title="Share on Twitter"
          >
            Tweet it<i>!</i>
          </a>
        </span>

        <New
          handleClick={handleClick}
          color={color}
          className="new-quote-data-state"
        />

        <div id="legend">
          <span className="legend-label">Short quote</span>
          <div id="legend-colors"></div>
          <span className="legend-label">Long quote</span>
        </div>
      </>
    );
  }

  return <>We don't expect you to see this...</>;
}
