import React from 'react';

export const ProfilePage = () => {

  return (
    <div id="Page">

      <div className="title-cover cover-profile"><p>Profile</p></div>

      <div id="profile-container">
        <img src="thomas-logo.jpg" alt="logo" className="logo" />

        <div>
          <h1>Thomas Zorroché</h1>
          <h2>Student in Software Engineering</h2>
          <p className="bio">Currently in my last year of engineering school in Paris, 
          I am also following a master's degree in computer science specialized in image. 
          I'm passionate about <strong>3D applications and video games development.</strong></p>
          <p className="bio" style={{fontWeight:'bold'}}>I am looking for an internship in these sectors for a period of 4 to 6 months, starting in April.</p>
          <p className="bio">Please contact me by email or phone if you are interested in my profile.</p>

          <div className="contact">
            <p><strong>Contact</strong></p>
            <p>thomas.zorroche@gmail.com</p>
            <p>(+33) 7 70 47 01 17</p>
            <p><a href="https://github.com/Thomas-Zorroche">Github</a></p>
            <p><a href="https://www.linkedin.com/in/thomas-zorroch%C3%A9-40ab451b9/">LinkedIn</a></p>
            <p><a href="https://www.artstation.com/thomas10">ArtStation</a></p>
          </div>

        </div>
      </div>

    </div>
  )
}