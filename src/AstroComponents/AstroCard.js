import React from "react";
import "./AstroCard.css";

export default function AstroCard(props) {
  {
    /* 
    1. Create a custom component to display the image. 
    
    <h1>Title</h1>
    <div className="img-container">
        <img /> 
    </div>
 */
  }
  return (
    <div className="astro-card">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <img src={props.url} />
      <p className="picture-desc">{props.description}</p>
    </div>
  );
}
