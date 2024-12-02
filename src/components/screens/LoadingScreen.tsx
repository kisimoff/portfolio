import React, { useState, useRef, useEffect } from 'react'
import { WindupChildren, Pause, Pace, Effect } from 'windups'
import { delay, motion, useAnimation } from 'framer-motion'
import LogoBoot2 from '@/components/logoBootAnimation'
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

import { useTheme } from '@contexts/ThemeContext'
import { useWindows } from '@contexts/WindowsContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { loadFastBootFlag } from '@/utils/zenFs'


const LoadingScreen = () => {
  const [logoClicked, setLogoClicked] = useState(false)
  const [pattern, setPattern] = useState(false)
  const [step1, setStep1] = useState(true)
  const [step3, setStep3] = useState(true)
  const [logoAnimation, setLogoAnimation] = useState(false)
  const { startWindow, creditsWindow } = useWindows()
  const { elementsSequenceAnimation, navbarAnimation, iconsAnimation, backgroundAnimation } = useAnimations()

  const [fastBoot, setFastBoot] = useState(false)


  const loopAnimation = useAnimation()
  const portalAnimation = useAnimation()

  const videoEl = useRef<HTMLVideoElement>(null)
  const loopVideoEl = useRef<HTMLVideoElement>(null)

  const { themeState } = useTheme()

  function openCredits() {
    creditsWindow.openOrFocus()
  }

  const attemptPlay = (refToPlay: React.RefObject<HTMLVideoElement>) => {
    refToPlay.current?.play().catch((error) => {
      console.error('Error attempting to play', error)
    })
  }

  useEffect(() => {
    if (themeState === 'xp') {
      backgroundAnimation.start({
        opacity: 0,
        transition: { duration: 1, ease: 'easeIn' },
      })
    } else {
      backgroundAnimation.start({
        opacity: 1,
        transition: { duration: 1, ease: 'easeIn' },
      })
    }
  }, [themeState, backgroundAnimation])

  const logoClick = () => {
    attemptPlay(videoEl)
    setLogoClicked(true)
    elementsSequenceAnimation()
    videosSequenceAnimation()
    document.getElementById('bootRoot')!.style.display = 'none'
    setTimeout(() => {
      setLogoAnimation(false)
    }, 7000)
    setTimeout(() => {
      startWindow.openOrFocus()
    }, 12000)
  }



  async function skipLoading() {
    setLogoAnimation(false) // skips the logo animation
    setFastBoot(true)
    document.getElementById('bootRoot')!.style.display = 'none' //Disables the loading screen
    loopAnimation //starts the background video
      .start({
        opacity: 1,
        transition: { duration: 1 },
      })
      .then(() => {
        attemptPlay(loopVideoEl)
      })



    setTimeout(() => {
      navbarAnimation.start(
        {
          y: 0,
          opacity: 1,
          transition: { duration: 1.5, delay: 0.5 },
        })
      iconsAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      })
    }, 500)





    setLogoClicked(true) //enables the eye and starts looking around


    // elementsSequenceAnimation()
    // // startWindow.openOrFocus()
    // loopAnimation
    //   .start({
    //     opacity: 1,
    //     transition: { duration: 1 },
    //   })
    //   .then(() => {
    //     attemptPlay(loopVideoEl)
    //   })
  }


  useEffect(() => {
    loadFastBootFlag((isFastboot) => {
      console.log(
        '%c👋 Welcome to KisimoffOS!',
        'color: white; background: linear-gradient(90deg, rgba(224,24,52,1) 0%, rgba(32,225,200,1) 100%); font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 5px;'
      )
      console.log(
        `%c🚀 Fastboot: %c${isFastboot ? 'On' : 'Off'}`,
        'color: #FF9800; font-size: 14px; font-weight: bold;',
        `color: ${isFastboot ? '#4CAF50' : '#F44336'}; font-size: 14px; font-weight: bold;`
      )
      setFastBoot(isFastboot)
      if (isFastboot) {
        skipLoading()
      } else {
        setLogoAnimation(true)
      }


      console.log(
        `%c💡 Tip: %cTo ${isFastboot ? 'disable' : 'enable'} fastboot and see the loading screen, execute %cfastboot ${isFastboot ? 'off' : 'on'
        }%c in the terminal.`,
        'color: #FF9800; font-size: 13px; font-weight: bold;', // Tip styling
        'font-size: 13px;', // Regular text styling
        'color: #4CAF50; font-size: 12px; font-weight: bold; background: black; padding: 2px 4px; border-radius: 3px;', // Command styling
        'font-size: 13px;' // Regular text styling after the command
      )
    })

  }, [])

  // useEffect(() => {
  //   setLogoAnimation(true)
  //   // skipLoading()
  // }, [])




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

  return (
    <>
      {logoAnimation && <LogoBoot2 onLogoClick={logoClick} />}
      <motion.div initial={{ opacity: 1 }} animate={backgroundAnimation}>
        {logoClicked && <TheEye fastBoot={fastBoot} onEyeClick={openCredits} />}
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

      {!fastBoot && <div className="boot-screen" id="bootRoot">
        <div className="pattern-background">
          <div className={`pattern-mask ${pattern ? 'animate' : ''}`}></div>
          <div className="pattern-reveal">
            <div className="boot-screen-text" id="boot-text">
              <WindupChildren>
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
                  </Pace>
                )}
              </WindupChildren>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default LoadingScreen