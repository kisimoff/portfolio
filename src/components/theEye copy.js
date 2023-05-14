import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import eye from "./../img/logoEye.png";

export default function TheEye() {
  const x = useSpring(0, { stiffness: 50, damping: 20 });
  const y = useSpring(0, { stiffness: 50, damping: 20 });

  //   const y = useMotionValue(0);
  const constrainRef = useRef(null);
  const constrainRect = useRef(null);

  useEffect(() => {
    constrainRect.current = constrainRef.current.getBoundingClientRect();

    const updateMotionValues = (e) => {
      const centerX =
        constrainRect.current.left + constrainRect.current.width / 2;
      const centerY =
        constrainRect.current.top + constrainRect.current.height / 2;
      const radius = constrainRect.current.width / 2.5;

      let diffX = e.clientX - centerX;
      let diffY = e.clientY - centerY;

      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < radius) {
        x.set(0);
        y.set(0);
      } else {
        const angle = Math.atan2(diffY, diffX);
        x.set((1 - radius / distance) * radius * Math.cos(angle));
        y.set((1 - radius / distance) * radius * Math.sin(angle));
      }
    };

    window.addEventListener("mousemove", updateMotionValues);

    return () => {
      window.removeEventListener("mousemove", updateMotionValues);
    };
  }, [x, y]);

  return (
    <div className="theEye" ref={constrainRef}>
      <motion.img
        src={eye}
        style={{
          translateX: x,
          translateY: y,
        }}
      />
    </div>
  );
}
