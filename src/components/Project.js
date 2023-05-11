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
        src={props.sorsa}
        ref={videoEl}
        type="video/mp4"
      />
      {/* Rest of your component */}
    </div>
  );
}

export default Project;
