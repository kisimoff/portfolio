import React, { useState, useRef } from 'react'
import { WindupChildren, Pause, Pace, Effect } from 'windups'
import { motion, useAnimation } from 'framer-motion'
import LogoBoot2 from '@components/logoBoot2'
import TheEye from '@components/theEye'
import portal from '@assets/videos/cpuPortal.mp4'
import cpuLoop from '@assets/videos/cpuLoop.mp4'
import {
  deviceType,
  osName,
  osVersion,
  browserName,
  browserVersion,
  engineName,
  engineVersion,
} from 'react-device-detect'

interface LoadingScreenProps {
  onLogoClick: () => void;
  openCredits: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLogoClick, openCredits }) => {
  const [logoClicked, setLogoClicked] = useState(false)
  const [pattern, setPattern] = useState(false)
  const [step1, setStep1] = useState(true)
  const [step3, setStep3] = useState(true)
  const [logo, setLogo] = useState(true)

  const navbarAnimation = useAnimation()
  const iconsAnimation = useAnimation()
  const backgroundAnimation = useAnimation()
  const loopAnimation = useAnimation()
  const portalAnimation = useAnimation()

  const videoEl = useRef<HTMLVideoElement>(null)
  const loopVideoEl = useRef<HTMLVideoElement>(null)

  const attemptPlay = (refToPlay: React.RefObject<HTMLVideoElement>) => {
    refToPlay.current?.play().catch((error) => {
      console.error('Error attempting to play', error)
    })
  }

  const logoClick = () => {
    attemptPlay(videoEl)
    setLogoClicked(true)
    onLogoClick()
    // elementsSequenceAnimation()
    videosSequenceAnimation()
    document.getElementById('bootRoot')!.style.display = 'none'
    // setTimeout(() => {
    // }, 12000)
    setTimeout(() => {
      setLogo(false)
    }, 7000)
  }

  const videosSequenceAnimation = async () => {
    portalAnimation.start({
      opacity: 0,
      transition: { duration: 1, delay: 7 },
    })

    loopAnimation
      .start({
        opacity: 1,
        transition: { duration: 1, delay: 5.5 },
      })
      .then(() => {
        attemptPlay(loopVideoEl)
      })
  }

  //   const elementsSequenceAnimation = async () => {
  //     if (window.innerWidth > 800 && window.innerHeight > 400) {
  //       navbarAnimation.set({ y: 100 })

  //       await navbarAnimation.start({
  //         y: 0,
  //         transition: { duration: 1.5, delay: 5 },
  //       })
  //     } else {
  //       navbarAnimation.set({ y: -100 })

  //       await navbarAnimation.start({
  //         y: 0,
  //         transition: { duration: 1.5, delay: 5 },
  //       })
  //     }
  //     await iconsAnimation.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 0.7, delay: 0.8 },
  //     })
  //   }

  return (
    <>
      {logo && <LogoBoot2 onLogoClick={logoClick} />}
      <motion.div initial={{ opacity: 1 }} animate={backgroundAnimation}>
        {logoClicked && <TheEye onEyeClick={openCredits} />}
        <motion.video
          animate={portalAnimation}
          initial={{ opacity: 1 }}
          className="video-background"
          playsInline
          muted
          src={portal}
          ref={videoEl}
        />
        <motion.video
          animate={loopAnimation}
          initial={{ opacity: 0 }}
          className="video-background"
          playsInline
          muted
          src={cpuLoop}
          ref={loopVideoEl}
          loop
        />
      </motion.div>
      <div className="boot-screen" id="bootRoot">
        <div className="pattern-background">
          <div className={`pattern-mask ${pattern ? 'animate' : ''}`}></div>
          <div className="pattern-reveal">
            <div className="boot-screen-text" id="boot-text">
              <WindupChildren
                onFinished={() => {
                  // setSpinner(false);
                  // setLogovis(true);
                }}
              >
                {step3 && (
                  <Pace ms={0}>
                    Kisimoff OS v2.3.11
                    <br />
                    <Pause ms={500} />
                    {step1 && (
                      <>
                        <Pause ms={20} />
                        <br /> Checking hardware compatibility
                        <Pace ms={200}>...</Pace>
                        <Pause ms={300} />
                        <br />
                        Type: {deviceType}
                        <br /> <Pause ms={100} /> OS: {osName} Version: {osVersion}
                        <br />
                        <Pause ms={100} />
                        Browser: {browserName} Version: {browserVersion} <br />
                        <Pause ms={100} />
                        Engine: {engineName} Version: {engineVersion}
                        <Pause ms={400} /> <br />
                        Compatibility
                        <Pace ms={200}>...</Pace>
                        <Pause ms={200} /> OK
                        <Pause ms={400} />
                      </>
                    )}
                    <Effect
                      fn={() => {
                        setStep1(false)
                      }}
                    />
                    {(
                      <>
                        <br /> Loading system drivers...
                        <br /> Loading system startup scripts...
                        <br /> Verifying system configuration...
                        <br /> Initializing user interface...{' '}
                        <Pause ms={100} />
                        <br /> Loading system fonts...
                        <br /> Configuring system preferences...
                        <br /> Mounting files...
                        <Pause ms={400} />
                        <br /> Loading system services...
                        <br /> Initializing networking protocols...
                        <br /> Establishing secure connections...
                        <br /> Preparing desktop environment...
                        <br /> Optimizing system performance...
                        <Pause ms={100} />
                        <br /> Verifying system integrity...
                        <br /> Loading system log files...
                        <br /> Loading application framework...
                        <br /> Verifying user browser settings...
                        <br /> Loading system themes...
                        <br /> Scanning for available updates...
                        <Pause ms={50} />
                        <br /> Loading system resources...
                        <br /> Initializing system clock...
                        <br /> Loading system virtualization...
                        <br /> Establishing system backups...
                        <br /> Initializing system database...
                        <Pause ms={50} />
                        <br /> Verifying system licenses...
                        <br /> Initializing system multitasking...
                        <br /> Loading system security patches...
                        <br /> Initializing system memory...
                        <Pause ms={80} />
                        <br /> Loading system encryption tools...
                        <br /> Checking system for malware...
                        <br /> Loading system updates
                        <Pace ms={150}>...</Pace>
                        OK
                        <Effect
                          fn={() => {
                            setPattern(!pattern)
                          }}
                        />
                        <Pause ms={400} />
                        <br />
                        <br />
                        Loading complete...
                        <Pause ms={1300} />
                        <Effect
                          fn={() => {
                            setStep3(false)
                          }}
                        />
                      </>
                    )}
                    {/* System time: [insert current time here] <br></br> <br></br> */}
                  </Pace>
                )}
              </WindupChildren>
            </div>
            <div className="login-screen" id="login-screen"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen