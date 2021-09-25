import { React } from 'react';
import { Link } from "react-router-dom"

import '../style/components.css';


export const Header = () => {

  return (
    <div id="Header">

      <div className="header-name">
        <p>Thomas Zorroché</p>
      </div>

      <div className="header-links">
        <Link to="/">
          <p>projects</p>
        </Link>

        <a href="https://www.artstation.com/thomas10" target="_blank" rel='noreferrer'><p>art</p></a>

        <Link to="/profile">
          <p>profile</p>
        </Link>


      </div>

    </div>
  )
}