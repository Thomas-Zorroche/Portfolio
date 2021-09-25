import { React, useState } from 'react';

import '../style/components.css';


export const Card = ({ name, date, desc, tags, preview, url }) => {

  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  }
  const mouseLeave = () => {
    setHover(false);
  }

  return (
    <a href={url} target="_blank" rel='noreferrer'>
      <div className="card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <img class={hover ? "project-preview  project-preview-hover" : "project-preview"}  
          src={"project-preview/" + preview} 
          alt="project-preview"
        />

        <img className="eye" src="icons/eye.svg" alt="eye" style={{opacity: hover ? 0.8 : 0.0}} />

        <div className={hover ? "card-desc-container card-desc-container-hover" : "card-desc-container"}>
          <p className="card-name">{name}</p>
          <p className="card-date">{date}</p>
          <p className="card-desc">{desc}</p>

          {tags.map(tag => <img className="tag-preview" src={"icons/" + tag + ".png"} alt="tag-preview"/>)}
        </div>
      </div>
    </a>

  )
}