import React, { useState, useRef, useEffect } from "react";

import Draggable from "react-draggable";
import about_png from "../../img/about.png";
import Window from "./Window";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";

const About = ({
  theme,
  textToWrite,
  setVisibility,
  zIndexxx,
  setZindexxx,
}) => {
  // Make a new component
  useEffect(() => {
    document.getElementById("about").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);
  return (
    <Draggable
      cancel=".close-window"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("about").style.zIndex = zIndexxx;
      }}
      // onMouseDown={() => {
      //   document.getElementById("projects").style.zIndex = "5";
      //   document.getElementById("deviceInfo").style.zIndex = "4";
      //   document.getElementById("about").style.zIndex = 6;
      //   document.getElementById("terminal").style.zIndex = "2";
      // }}
    >
      <div className="about" id="about">
        {/* <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            About
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            onClick={() => {
              document.getElementById("about").style.display = "none";
            }}
          />
        </div> */}
        <Window
          title="About"
          elementId="about"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div id="aboutField" className="aboutText">
            <WindupChildren>
              <Pace ms={35}>
                <div className="about-first">
                  <img alt="logoBoot" src={about_png} />
                  <p>
                  It all began one night back in 2007 <br/> <Pause ms={500} />  
                when I saw how my father cooled down an ridiculously overclocked GPU <Pause ms={350} /> with dry ice. <Pause ms={850} /> The result? <Pause ms={400} /> The 1st benchmark score in the country.  
                    <Pause ms={450} />
                    <br/>                     <br/>                     
                    
                    From that moment on, I was hooked.
                    <Pause ms={700} />
                    <br/><br/>
                   
                    
                  </p>
                </div>
                <p>
                As I grew up, I spent my time tinkering <Pause ms={350} /> - modding
                    games, <Pause ms={100} />flashing ROMs on Androids, <Pause ms={100} />building RC models, <Pause ms={100} />
                    building PCs... 
                    <Pause ms={1000} />
                    <br></br> <br></br>
                This hands-on experience, combined with my desire to create, led me to pursue a career as a developer. 
                    <Pause ms={600} />
                  <br></br> <br></br>
                  Nowadays, I have a broad background in multiple tech fields: ai, front-end, back-end, mobile development, blockchain, data mining, web design, HCI, IT support...                     <Pause ms={400} />

                  <br></br> <br></br>
                  This gives me great perspective,<Pause ms={300} /> allowing me to make informed decisions and approach a task from a variety of angles. <Pause ms={400} />                    
                  <Pause ms={400} />
                  <br></br> <br></br>
                  My latest superpower is transmuting espresso to react components.  <Pause ms={400} /> <br></br> <br></br>
                  Outside of work, cinema, sound, and motorsports are my sources of inspiration and delight, and I have a  curiosity about the human body, health, and spirituality.
                  <Pause ms={400} />
                If you’re looking for a good movie to watch, these are some of my favorites.
                <Pause ms={400} /> 
                            </p>
              </Pace>
            </WindupChildren>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default About;
