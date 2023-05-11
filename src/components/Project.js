import React, { useState, useRef, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
function Project(props) {
  const videoEl = useRef(null);
  return (
    <div class="container">
      <video
        className="project-animation"
        playsInline
        loop
        muted
        autoPlay
        src={props.sorsa}
        ref={videoEl}
        type="video/mp4"
      />

      <div class="project-title-overlay">
        <span> {props.title}</span>
      </div>
      <div class="project-description-overlay">
        <div class="text">
          <p>{props.description}</p>
          <div className="text-bottom-row">
            <p>
              <b> Technologies used:</b> <br></br>
              {props.technologies}
            </p>{" "}
            <div className="text-bottom-row-icons-wrapper">
              <a
                className="text-bottom-row-singleicon-wrapper"
                href={props.repo}
                target="_blank"
              >
                <AiFillGithub className="text-bottom-row-icon" />
                <span>Repo</span>
              </a>

              {props.live ? (
                <a
                  className="text-bottom-row-singleicon-wrapper"
                  href={props.live}
                  target="_blank"
                >
                  <BiWorld className="text-bottom-row-icon" />
                  <span>Web</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
