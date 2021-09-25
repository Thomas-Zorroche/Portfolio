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

        <Link to="/">
          <p>art</p>
        </Link>

        <Link to="/profile">
          <p>profile</p>
        </Link>


      </div>

    </div>
  )
}