import React, { useState, useRef, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

function Project(props) {
  const videoEl = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // pause old video and play new video
        if (entry.isIntersecting) {
          videoEl.current.play();
        } else {
          videoEl.current.pause();
        }
      },
      { threshold: 0.42 } // Adjust this value to determine when video should start and stop playing (0.5 means when half of the video is visible)
    );
    observer.observe(videoEl.current);

    // Clean up
    return () => {
      if (videoEl.current) {
        observer.unobserve(videoEl.current);
      }
    };
  }, []);

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
