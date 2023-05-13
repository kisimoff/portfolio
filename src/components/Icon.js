import React from "react";
import { motion } from "framer-motion";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

function Icon(props) {
  return (
    <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
      <a
        href="#"
        className="iconWrapper"
        onClick={() => {
          if (props.visibility == true) {
            props.setZindexxx(props.zIndexxx + 1);
            document.getElementById(props.elementId).style.zIndex =
              props.zIndexxx;
          } else {
            props.setVisibility(true);
          }
        }}
      >
        {props.theme == true ? (
          // <props.icon className="icon" />
          <img src={props.osIcon} className="icon" />
        ) : (
          <img src={props.xpIcon} className="icon" />
        )}

        <span className="caption">
          {props.caption}
          <span> {props.line2}</span>
        </span>
      </a>
    </motion.div>
  );
}

export default Icon;
