import React from "react";

export function New({handleClick, color, className}) {
  return(
    <button 
      id="new-quote"
      onClick={handleClick}
      style={{color: color}}
      className={className}
    >
      New quote
    </button>
  );
} 