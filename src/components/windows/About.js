import React, { useState, useRef, useEffect } from "react";

import Draggable from "react-draggable";
import about_png from "../../img/aboutCompress.png";
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
              <Pace ms={38}>
                <div className="about-first">
                  <img alt="me" src={about_png} />
                  <p>
                    Hi! <Pause ms={500} />
                    I'm Val! <Pause ms={500} />
                    Let me tell you a bit about me. <Pause ms={600} />
                    It all began back in 2007 <Pause ms={500} />
                    when I saw how my father cooled an extremely overclocked GPU
                    with dry ice. <Pause ms={1000} /> The result?{" "}
                    <Pause ms={400} /> The 1st benchmark score in the country.
                    <Pause ms={450} />
                    <br />
                    From that moment on, I was hooked.
                    <Pause ms={700} />
                    <br />
                    <br />
                  </p>
                </div>
                <p>
                  As I grew up, I spent my time tinkering <Pause ms={500} /> -
                  modding games, <Pause ms={150} />
                  flashing ROMs on Androids, <Pause ms={150} />
                  building RC models, <Pause ms={150} />
                  building PCs...
                  <Pause ms={1000} />
                  <br></br> <br></br>
                  This hands-on experience, combined with my desire to create,
                  led me to pursue a career as a developer.
                  <Pause ms={600} />
                  <br></br> <br></br>
                  Nowadays, I have a broad background in multiple tech fields:
                  ai, <Pause ms={150} /> front-end,
                  <Pause ms={150} /> back-end,
                  <Pause ms={150} /> mobile development,
                  <Pause ms={150} /> blockchain, <Pause ms={150} />
                  data mining,
                  <Pause ms={150} /> web design,
                  <Pause ms={150} /> HCI, IT support... <Pause ms={200} />
                  <br></br> <br></br>
                  This gives me great perspective,
                  <Pause ms={100} /> allowing me to make informed decisions and
                  approach a task from a variety of angles. <Pause ms={400} />
                  <br></br> <br></br>
                  Im passionate about creating experiences,
                  <Pause ms={200} /> crafting UIs, <Pause ms={200} />
                  and assembling the pieces together. <Pause ms={400} /> I care{" "}
                  <Pause ms={200} />
                  about productivity and efficiency, <Pause ms={200} /> and i
                  hate wasted time and potential. <Pause ms={400} />
                  <br></br> <br></br>
                  Outside of work, im a movie lover, <Pause ms={200} />a bit of
                  an audiophile <Pause ms={200} />
                  and a motorhead at hearth. <Pause ms={200} />
                  I'm also deeply fascinated by the human body, health, and
                  spirituality.
                  {/* <Pause ms={400} /> */}
                  {/* My latest superpower is transmuting espresso to react
                  components. <Pause ms={400} />
                  If you’re looking for a good movie to watch, these are some of
                  my favorites. */}
                  {/* <Pause ms={400} /> */}
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
