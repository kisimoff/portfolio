import React, { useState, useRef, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
function Project(props) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div class="container">
      <video
        className="project-animation"
        playsinline
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
                  <span>Live</span>
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
