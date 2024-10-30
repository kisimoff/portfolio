import React, { useState, useRef, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'

function Proj({ onLoad, ...props }) {
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVideoVisible(true)
        observer.unobserve(videoRef.current)
      }
    })

    observer.observe(videoRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleCanPlayThrough = () => {
    onLoad()
  }

  return (
    <div className="project-container" ref={videoRef}>
      {isVideoVisible && (
        <video
          className="project-animation"
          playsInline
          loop
          muted
          autoPlay
          src={props.sorsa}
          onCanPlayThrough={handleCanPlayThrough}
        />
      )}
      <div className="project-title-overlay">
        <span> {props.title}</span>
      </div>
      <div className="project-description-overlay">
        <div className="project-text-wrapper">
          <p>{props.description}</p>
          <div className="text-bottom-row">
            <p>
              <b> Technologies used:</b> <br></br>
              {props.technologies}
            </p>{' '}
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
  )
}

export default Proj
