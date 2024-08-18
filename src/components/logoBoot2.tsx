import React, { useState, useEffect } from 'react'
import { delay, motion, useAnimation } from 'framer-motion'

export default function LogoBoot2({ onLogoClick }) {
  const gradientFill23 = useAnimation()
  const gradientFillcircle = useAnimation()

  const twentyThreePath = useAnimation()
  const circlePath = useAnimation()
  const logoDivAnimation = useAnimation()

  const instructions = useAnimation()
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const sizeMultiplier = 1.23
  const [divSize, setDivSize] = useState(250)

  const logoClick = async () => {
    if (!animationCompleted) return 
    onLogoClick()
    setAnimationCompleted(false)
    instructions.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    })
    await logoDivAnimation.start({
      opacity: 0,
      transition: { duration: 4.6, delay: 2.5, ease: 'easeOut' },
    })
  }

  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    const videoWidth = vh * (16 / 9)
    const videoHeight = vw * (9 / 16)

    if (videoWidth < vw) {
      setDivSize((vw / 14) * sizeMultiplier) // adjust the divisor for desired size
    } else {
      setDivSize((vh / 8) * sizeMultiplier) // adjust the divisor for desired size
    }
  }, [])

  //all the animations are controlled from here
  const delay = 2.8
  useEffect(() => {
    const sequence = async () => {
      //darwing sequence
      circlePath.start({
        pathLength: 1,
        pathOffset: 2,
        stroke: 'url(#linear-gradient)',
        transition: {
          duration: 5,
          ease: [0.56, 0, 0.18, 1],
        },
      })
      twentyThreePath.start({
        pathLength: 1,
        pathOffset: 2,
        stroke: 'url(#linear-gradient)',
        transition: {
          delay: delay,
          duration: 4,
          ease: [0.56, 0, 0.18, 1],
        },
      })
      gradientFillcircle.start({
        opacity: 1,
        transition: { delay: delay, duration: 1.5, ease: 'easeIn' },
      })
      gradientFill23.start({
        opacity: 1,
        transition: { delay: delay + 2, duration: 1.5, ease: 'easeIn' },
      })
      //path dissapearing sequence
      circlePath.start({
        opacity: 0,
        transition: {
          delay: delay + 0.5,
          duration: 1.3,
          ease: 'easeIn',
        }, // adjust duration and easing as per your requirements
      })
      await twentyThreePath
        .start({
          opacity: 0,
          transition: { delay: delay + 2.5, duration: 1.3, ease: 'easeIn' }, // adjust duration and easing as per your requirements
        })
        .then(() => setAnimationCompleted(true))

      //instructions showing up
      instructions.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1 },
      })
      // pulsing animation
      logoDivAnimation.start({
        scale: [1, 1.07, 1],
        transition: {
          duration: 0.5,
          repeat: 1,
          delay: 0.7,
          repeatDelay: 8,
        },
      })
    }
    setTimeout(sequence, 1100)
  }, [
    twentyThreePath,
    circlePath,
    gradientFill23,
    gradientFillcircle,
    logoDivAnimation,
    instructions,
  ])

  const GradientDefs = () => (
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={7.53657}
        y1={50}
        x2={91.472}
        y2={50}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e01e37" />
        <stop offset={0.21} stopColor="#DA1E37" />
        <stop offset={0.42} stopColor="#b21e35" />
        <stop offset={0.72} stopColor="#717375" />
        <stop offset={0.91} stopColor="#35c1b0" />
        <stop offset={1} stopColor="#1ee0c7" />
      </linearGradient>
    </defs>
  )

  const circleSvg =
    'M50 92.5C41.5943 92.5 33.3774 90.0074 26.3883 85.3375C19.3992 80.6675 13.9519 74.0299 10.7351 66.2641C7.51841 58.4982 6.67677 49.9529 8.31665 41.7087C9.95652 33.4645 14.0042 25.8917 19.948 19.948C25.8917 14.0042 33.4645 9.95652 41.7087 8.31665C49.9529 6.67677 58.4982 7.51841 66.2641 10.7351C74.0299 13.9519 80.6675 19.3992 85.3375 26.3883C90.0074 33.3774 92.5 41.5943 92.5 50C92.4871 61.2678 88.0053 72.0703 80.0378 80.0378C72.0703 88.0053 61.2678 92.4871 50 92.5ZM50 10.8561C42.2571 10.8561 34.6881 13.1522 28.2501 17.454C21.8122 21.7558 16.7945 27.8702 13.8316 35.0237C10.8687 42.1773 10.0937 50.0489 11.6046 57.643C13.1155 65.237 16.8443 72.2125 22.3197 77.6873C27.795 83.1621 34.7709 86.8902 42.3651 88.4003C49.9593 89.9104 57.8308 89.1345 64.9841 86.1709C72.1374 83.2072 78.2512 78.1889 82.5523 71.7506C86.8534 65.3122 89.1487 57.7429 89.1479 50C89.135 39.6217 85.0063 29.6722 77.6673 22.3339C70.3283 14.9957 60.3784 10.868 50 10.8561Z'
  const twentyThreeSvg =
    'M65.9517 49.4027C69.4013 48.5576 73.7651 44.8277 73.7651 38.985C73.7651 30.9644 68.1377 26.4584 58.7763 26.4584H28.1283L25.3898 30.0339H58.9144C65.8217 30.0339 69.7548 33.3454 69.7548 39.4684C69.7548 44.3442 65.4601 48.0538 61.4498 48.0538H40.9677C35.7588 48.1188 31.8014 49.1265 29.1847 51.223C26.69 53.2099 25.398 56.18 25.398 60.2593V73.5335H58.5731C70.2545 73.5335 74.6183 67.8451 74.6183 60.7916C74.6102 54.12 70.1083 50.3169 65.9517 49.4027ZM58.565 70.027H40.9677V69.9945H29.4366V60.1984C29.4366 54.2906 33.2275 51.6009 40.1429 51.2352H61.3807C66.2361 51.2352 70.5268 54.8229 70.5268 60.3853C70.5268 66.4352 66.0248 70.027 58.565 70.027Z'
  return (
    <div className="logoBoot">
      <motion.h1
        initial={{ y: 7, opacity: 0 }}
        animate={instructions}
        className="instructions"
      >
        Push to Start
      </motion.h1>
      <motion.div
        style={{
          cursor: animationCompleted ? 'pointer' : 'default',
        }}
        animate={logoDivAnimation}
        className="motion-div"
        onClick={logoClick}
        whileHover={animationCompleted ? { scale: 1.05 } : {}}
        whileTap={animationCompleted ? { scale: 0.95 } : {}}
      >
        <svg
          className="svg1"
          style={{ width: `${divSize}px`, height: `${divSize}px` }}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GradientDefs />
          <g id="Frame_2">
            <rect width="100" height="100" />
            <circle
              id="filler"
              cx="50.0014"
              cy="50.0014"
              r="39.2302"
              fill="black"
            />
            <motion.path
              id="23"
              strokeWidth="1"
              d={twentyThreeSvg}
              fill="transparent"
              initial={{
                pathLength: 0,
                pathOffset: 0,
                opacity: 1,
              }}
              animate={twentyThreePath}
            />
            <motion.path
              id="circle"
              strokeWidth="1"
              d={circleSvg}
              fill="transparent"
              initial={{
                pathLength: 0,
                pathOffset: 0,
                opacity: 1,
              }}
              animate={circlePath}
            />
          </g>
        </svg>

        <svg
          className="svg2"
          style={{ width: `${divSize}px`, height: `${divSize}px` }}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GradientDefs />
          <motion.path
            id="23"
            d={twentyThreeSvg}
            fill="url(#linear-gradient)"
            initial={{ opacity: 0 }}
            animate={gradientFill23}
          />
          <motion.path
            id="circle"
            d={circleSvg}
            fill="url(#linear-gradient)"
            initial={{ opacity: 0 }}
            animate={gradientFillcircle}
          />
        </svg>
      </motion.div>
    </div>
  )
}
