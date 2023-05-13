import React, { useState, useRef, useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";

export default function LogoBoot({ onLogoClick }) {
  const controlsPath = useAnimation();
  const controlsOpacity = useAnimation();

  //good combinations
  //    await controlsPath.start({
  //          pathLength: 0.1, //how fast it draws higher - faster
  //          pathOffset: 3, // how fast they dissaper
  //          stroke: "url(#linear-gradient)",
  //          transition: { duration: 7, ease: "easeIn" },
  //        });

  const delay = 1.5;

  useEffect(() => {
    const sequence = async () => {
      controlsPath.start({
        pathLength: 0.8, //how fast it draws higher - faster
        pathOffset: 5, // how fast they dissaper
        stroke: "url(#linear-gradient)",
        transition: { delay: delay, duration: 3.5, ease: "easeIn" },
      });

      controlsOpacity.start({
        opacity: 1,
        transition: { delay: delay + 4, duration: 1, ease: "easeOut" },
      });
      controlsPath.start({
        opacity: 0, // adjust as per your requirements
        transition: { delay: delay + 4, duration: 2, ease: "easeOut" }, // adjust duration and easing as per your requirements
      });
    };

    sequence();
  }, [controlsPath, controlsOpacity]);

  const GradientDefs = () => (
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={8.92}
        y1={159.4}
        x2={290.68}
        y2={169.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e01e37" />
        <stop offset={0.21} stopColor="#da1e37" />
        <stop offset={0.42} stopColor="#b21e35" />
        <stop offset={0.66} stopColor="#717375" />
        <stop offset={0.89} stopColor="#35c1b0" />
        <stop offset={1} stopColor="#1ee0c7" />
      </linearGradient>
    </defs>
  );
  const svgPath =
    "M238.77,177.71c13.37-3.27,30.29-17.74,30.29-40.39,0-31.12-21.83-48.58-58.13-48.58H92.11L81.47,102.65h130c26.75,0,42,12.83,42,36.58,0,18.83-16.64,33.3-32.2,33.3H141.88c-20.2.25-35.55,4.16-45.73,12.28-9.68,7.71-14.68,19.23-14.68,35v51.48H210.11c45.3,0,62.23-22.11,62.23-49.4C272.34,196,254.87,181.26,238.77,177.71Zm-28.66,80H141.88v-.11H97.17v-38c0-22.92,14.69-33.35,41.5-34.77H221c18.84,0,35.49,13.92,35.49,35.48C256.51,243.76,239,257.68,210.11,257.68ZM176.9,344.84C86,344.84,12.1,270.91,12.1,180S86,15.23,176.9,15.23,341.71,89.16,341.71,180,267.78,344.84,176.9,344.84Zm0-316.61C93.2,28.23,25.1,96.33,25.1,180S93.2,331.84,176.9,331.84,328.71,263.74,328.71,180,260.61,28.23,176.9,28.23Z";

  return (
    <div className="logoBoot">
      <motion.div
        className="motion-div"
        onClick={onLogoClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 353.81 360.07"
        >
          <GradientDefs />
          <motion.path
            fill="transparent"
            strokeWidth="2"
            d={svgPath}
            initial={{
              pathLength: 0,
              pathOffset: 0,
              opacity: 1,
            }}
            animate={controlsPath}
          />
        </svg>
        <motion.svg
          className="svg2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 353.81 360.07"
          initial={{ opacity: 0 }}
          animate={controlsOpacity}
        >
          <GradientDefs />
          <path
            fill="url(#linear-gradient)"
            strokeWidth="0"
            d={svgPath}
            stroke="url(#linear-gradient)"
          />
        </motion.svg>
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      </motion.div>
    </div>
  );
}
