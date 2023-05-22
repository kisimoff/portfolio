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
              <Pace ms={30}>
                <div className="about-first">
                  <img alt="logoBoot" src={about_png} />
                  <p>
                  It all started one night in 2008                     <Pause ms={100} />

 when I saw my father
                    cool an overclocked GPU with dry ice,                     <Pause ms={300} />
 topping the benchmarks in the country.
                    <Pause ms={800} />
                    <br/>                     

                    From that moment on, I was hooked.
                    <Pause ms={800} />
                    <br/><br/>
                    As I grew up, I spent my time tinkering<Pause ms={200} /> - modding
                    games, flashing ROMs on Androids, building RC models,
                    building PCs...
                    <Pause ms={1000} />
                    <br></br> <br></br>
                    
                  </p>
                </div>
                <p>
                This hands-on experience, combined with my desire to create,
                    led me to pursue a career as a developer. 
                    <Pause ms={1000} />
                  <br></br> <br></br>
                  Nowadays, I have a broad background in multiple tech fields: ai, front-end, back-end, mobile development, blockchain, data mining, web design, HCI, IT support... 
                  <br></br> <br></br>
                  This allows me to tackle problems from a variety of angles and bring a unique perspective to any project. I am fueld by espresso and a strong drive for building solutions.
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
