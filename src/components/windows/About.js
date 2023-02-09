import React, { useState, useRef, useEffect } from "react";

import Draggable from "react-draggable";
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
  const [zIndexD, setzIndexD] = useState(100);
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
            <WindupChildren
            //   onFinished={() => {
            //     document.getElementById("start").style.display = "none";
            //   }}
            >
              {" "}
              <h1>My Story</h1>
              <p>
                When I was 7, I saw how my father was cooling an overlocked GPU
                with Carbon-dioxide. This marked the start of my tech passion.
                Growing up I've spent most of my time tinkering – modding games,
                flashing custom ROMs on Android Phones, RC modelling,
                overclocking GPUs… These hobbies and my desire to create led me
                to pursue a career as a developer. Nowadays I have experience in
                many different tech fields – machine learning, front-end,
                back-end, mobile development, blockchain etc. This is a strength
                and a weakness, firstly as I can identify and approach a problem
                from various perspectives, secondly as I lack a high-proficiency
                in a particular field, which makes it hard to be a valuable
                candidate.
                <br></br> <br></br>
                Play with the terminal to learn more. :&#41;
              </p>
            </WindupChildren>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default About;
