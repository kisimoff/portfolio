import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform, useAnimation } from "framer-motion";
import eyeball from "./../img/eyeball_compress_black.png";
import pupil from "./../img/pupil2.png";
import glass from "./../img/glassOverlay.png";
import { isSafari } from "react-device-detect";
export default function TheEye() {
  const eyeSizeMultiplier = 1.35; //size of the eye
  const perspectiveAngle = 40; // Maximum tilt angle for the eye
  const movementConstraint = 8; // Larger values will limit the eye movement more
  const movmentConstraintEyeballOnly = 12; // Larger values will limit the eye movement more
  const x = useSpring(0, { stiffness: 60, damping: 33 });
  const y = useSpring(0, { stiffness: 60, damping: 33 });
  const x_eyeball = useSpring(0, { stiffness: 70, damping: 60 }); // Modify the stiffness and damping as needed
  const y_eyeball = useSpring(0, { stiffness: 70, damping: 60 }); // Modify the stiffness and damping as needed
  const [eyeSize, setEyeSize] = useState(250);
  const [shouldTrackMouse, setShouldTrackMouse] = useState(false);

  const eyeAnimation = useAnimation();

  useEffect(() => {
    eyeAnimation.start({
      opacity: 1,
      transition: { delay: 2, duration: 2.2, ease: "easeIn" }, // adjust duration and easing as per your requirements
    });
  }, [eyeAnimation]);

  const constrainRef = useRef(null);
  const constrainRect = useRef(null);

  const updateConstrainRect = () => {
    constrainRect.current = constrainRef.current.getBoundingClientRect();
  };

  useEffect(() => {
    const handleResize = () => {
      updateConstrainRect();

      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      const videoWidth = vh * (16 / 9);
      const videoHeight = vw * (9 / 16);

      if (videoWidth < vw) {
        setEyeSize((vw / 14) * eyeSizeMultiplier); // adjust the divisor for desired size
      } else {
        setEyeSize((vh / 8) * eyeSizeMultiplier); // adjust the divisor for desired size
      }
    };

    // Call once to set initial size and constraint rect
    handleResize();

    // Update on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // These transform the x and y spring values to rotation values for the eye
  const rotateX = useTransform(
    y,
    [-(constrainRect.current?.height / 2), constrainRect.current?.height / 2],
    [perspectiveAngle, -perspectiveAngle]
  );
  const rotateY = useTransform(
    x,
    [-(constrainRect.current?.width / 2), constrainRect.current?.width / 2],
    [-perspectiveAngle, perspectiveAngle]
  );

  const rotateX_eyeball = useTransform(
    y,
    [-(constrainRect.current?.height / 2), constrainRect.current?.height / 2],
    [perspectiveAngle / 3, -perspectiveAngle / 3]
  );
  const rotateY_eyeball = useTransform(
    x,
    [-(constrainRect.current?.width / 2), constrainRect.current?.width / 2],
    [-perspectiveAngle / 3, perspectiveAngle / 3]
  );

  const updateSpringValues = (
    springX,
    springY,
    distance,
    radius,
    angle,
    constraint
  ) => {
    if (distance < radius) {
      springX.set(0);
      springY.set(0);
    } else {
      springX.set(
        ((1 - radius / distance) * radius * Math.cos(angle)) / constraint
      );
      springY.set(
        ((1 - radius / distance) * radius * Math.sin(angle)) / constraint
      );
    }
  };

  useEffect(() => {
    constrainRect.current = constrainRef.current.getBoundingClientRect(); // Get the dimensions of the div containing the eye

    if (shouldTrackMouse) {
      const updateMotionValues = (e) => {
        updateConstrainRect();
        // Calculate the center of the div containing the eye
        const centerX =
          constrainRect.current.left + constrainRect.current.width / 2;
        const centerY =
          constrainRect.current.top + constrainRect.current.height / 2;
        // Calculate the maximum distance the eye can move
        const radius = constrainRect.current.width / movementConstraint;
        // Calculate the difference between the mouse position and the center of the eye
        let diffX = e.clientX - centerX;
        let diffY = e.clientY - centerY;
        // Calculate the distance and angle from the mouse position to the center of the eye
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
        const angle = Math.atan2(diffY, diffX);
        // If the mouse is within the maximum movement distance of the eye, move the eye towards the mouse
        // For the pupil
        updateSpringValues(x, y, distance, radius, angle, 1);
        updateSpringValues(
          x_eyeball,
          y_eyeball,
          distance,
          radius,
          angle,
          movmentConstraintEyeballOnly
        );
      };

      window.addEventListener("mousemove", updateMotionValues);

      return () => {
        window.removeEventListener("mousemove", updateMotionValues);
      };
    }
  }, [x, y, shouldTrackMouse]);
  useEffect(() => {
    const animateEye = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3800)); // Look center
      await x.set(0);
      await y.set(0);
      await x_eyeball.set(0);
      await y_eyeball.set(0);
      await new Promise((resolve) => setTimeout(resolve, 2300)); // look bottom
      await y.set(12);
      await x.set(-4);
      await y_eyeball.set(2);
      await x_eyeball.set(-1);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // look top left
      await x.set(-12);
      await y.set(-12);
      await y_eyeball.set(-1);
      await x_eyeball.set(-1);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await x.set(0); // Look center
      await y.set(0); // Look center
      await x_eyeball.set(0);
      await y_eyeball.set(0);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShouldTrackMouse(true); // Start tracking mouse movement
    };

    animateEye();
  }, []);
  return (
    <motion.div
      className="theEye"
      ref={constrainRef}
      initial={{ opacity: 0 }}
      animate={eyeAnimation}
      style={{
        width: `${eyeSize}px`,
        height: `${eyeSize}px`,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "5px",
        zIndex: 5,
      }}
    >
      <motion.div className="iris">
        <motion.div
          style={
            isSafari
              ? { translateX: x, translateY: y, zIndex: 4 }
              : {
                  translateX: x,
                  translateY: y,
                  rotateX: rotateX,
                  rotateY: rotateY,
                  zIndex: 4,
                }
          }
        >
          <img
            src={pupil}
            style={{
              width: `${eyeSize / 3}px`,
              height: `${eyeSize / 3}px`,
            }}
            className="pupil"
          />
        </motion.div>
        <motion.img
          src={eyeball}
          className="eyeball"
          style={
            isSafari
              ? { translateX: x_eyeball, translateY: y_eyeball }
              : {
                  translateX: x_eyeball,
                  translateY: y_eyeball,
                  rotateX: rotateX_eyeball,
                  rotateY: rotateY_eyeball,
                }
          }
        />
      </motion.div>
      <img src={glass} className="glassOverlay" />
    </motion.div>
  );
}
