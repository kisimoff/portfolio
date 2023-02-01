import React from "react";
import Draggable from "react-draggable";

const About = ({ theme, setTheme }) => {
  return (
    <Draggable>
      <div className="about" id="about" style={theme.field}>
        <div id="window" style={theme.window}>
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
        </div>
        <div className="aboutText">
          <h1>About</h1>
          <p>
            When I was 7, I saw how my father was cooling an overlocked GPU with
            Carbon-dioxide. This marked the start of my tech passion. Growing up
            I've spent most of my time tinkering – modding games, flashing
            custom ROMs on Androids, RC modelling, overclocking… These hobbies
            and my desire to create led me to pursue a career as a developer.
            Nowadays I have experience in many different tech fields – machine
            learning, front-end, back-end, mobile development, blockchain etc.
            This is a strength and a weakness, firstly as I can identify and
            approach a problem from various perspectives, secondly as I lack a
            high-proficiency in a particular field, which makes it hard to be a
            valuable candidate.
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default About;
