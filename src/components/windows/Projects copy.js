import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import labyrinth from "./../../animated/labyrinth.webp";
import kwik from "./../../animated/kwik.webp";
import setup from "./../../animated/setup.webp";
import tasks from "./../../animated/23tasks.webp";
import ai from "./../../animated/ai.webp";
import assembly from "./../../animated/assembly.webp";
import connect from "./../../animated/connect.webp";
import data from "./../../animated/data.webp";
import mas from "./../../animated/mas.webp";
import track from "./../../animated/track.webp";
import webm from "./../../animated/connect.webm";

import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Project from "../Project";

const Projects = ({ theme }) => {
  const [z, setZ] = useState(4);

  return (
    <Draggable
      onMouseDown={() => {
        document.getElementById("projects").style.zIndex = "6";
        document.getElementById("deviceInfo").style.zIndex = "4";
        document.getElementById("about").style.zIndex = "3";
        document.getElementById("terminal").style.zIndex = "2";
      }}
    >
      <div className="projects" id="projects">
        <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            Projects
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            onClick={() => {
              document.getElementById("projects").style.display = "none";
            }}
          />
        </div>
        <div className="projectsScroll">
          <div className="projectsField">
            <div className="projectsRow">
              <Project
                image={webm}
                title="Kwick Medical"
                description="Kwick medical is a bullshit coursework from a Chinese idiot"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>
              <Project
                image={setup}
                title="Setup Garage"
                description="SetupGarage is a file sharing"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>

              {/* <img className="imageW" src={setup} /> */}
            </div>
            <div className="projectsRow">
              <Project
                image={assembly}
                title="Kwick Medical"
                description="Kwick medical is a bullshit coursework from a Chinese idiot"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>
              <Project
                image={connect}
                title="Setup Garage"
                description="SetupGarage is a file sharing"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>

              {/* <img className="imageW" src={setup} /> */}
            </div>
            <div className="projectsRow">
              <Project
                image={ai}
                title="Kwick Medical"
                description="Kwick medical is a bullshit coursework from a Chinese idiot"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>
              <Project
                image={data}
                title="Setup Garage"
                description="SetupGarage is a file sharing"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>

              {/* <img className="imageW" src={setup} /> */}
            </div>
            <div className="projectsRow">
              <Project
                image={tasks}
                title="Kwick Medical"
                description="Kwick medical is a bullshit coursework from a Chinese idiot"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>
              <Project
                image={track}
                title="Setup Garage"
                description="SetupGarage is a file sharing"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>

              {/* <img className="imageW" src={setup} /> */}
            </div>
            <div className="projectsRow">
              <Project
                image={kwik}
                title="Kwick Medical"
                description="Kwick medical is a bullshit coursework from a Chinese idiot"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>
              <Project
                image={mas}
                title="Setup Garage"
                description="SetupGarage is a file sharing"
                technologies="React, Firebase"
                repo="https://github.com/vtwenty3/Kwik"
                live="vtwenty3.github.io/Kwik/"
              ></Project>

              {/* <img className="imageW" src={setup} /> */}
            </div>

            <div class="container">
              <img className="image" src={labyrinth} />
              <div class="overlay">
                <div class="text">
                  <h1>From the Labyrinth</h1>
                  <p>
                    This project was work from a client. It had to be fully
                    responsive, writtein purely in HTML, CSS and JS. Quite a
                    thigt time-frame, but completed on time.{" "}
                  </p>

                  <div className="text-bottom-row">
                    <p>
                      <b> Technologies used:</b> <br></br>
                      HTML, CSS, JS
                    </p>{" "}
                    <div className="text-bottom-row-icons-wrapper">
                      <a
                        className="text-bottom-row-singleicon-wrapper"
                        href="https://github.com/vtwenty3/labyrinth"
                        target="_blank"
                      >
                        <AiFillGithub className="text-bottom-row-icon" />
                        <span>Repo</span>
                      </a>
                      <a
                        className="text-bottom-row-singleicon-wrapper"
                        href="http://fromthelabyrinth-music.com/"
                        target="_blank"
                      >
                        <BiWorld className="text-bottom-row-icon" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div className="projectsRow">
            <img className="imageW" src={setup} />
            <img className="imageW" src={testw2} />
            <img className="imageW" src={testw} />
          </div> */}
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;
