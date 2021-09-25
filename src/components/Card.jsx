import { React, useState } from 'react';

import '../style/components.css';


export const Card = ({ name, date, desc, tags, url }) => {

  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  }
  const mouseLeave = () => {
    setHover(false);
  }

  return (
    <div className="card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img class="project-preview" src={"project-preview/" + url} alt="project-preview" />

      <div className={hover ? "card-desc-container card-desc-container-hover" : "card-desc-container"}>
        <p className="card-name">{name}</p>
        <p className="card-date">{date}</p>
        <p className="card-desc">{desc}</p>

        {tags.map(tag => <img className="tag-preview" src={"icons/" + tag + ".png"} alt="tag-preview"/>)}
      </div>

    </div>
  )
}