import React, { useState, useRef, useEffect } from "react";

import Draggable from "react-draggable";
import about_png from "../../img/aboutCompress.png";
import Window from "./Window";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";

const Credits = ({ theme, setVisibility, zIndexxx, setZindexxx }) => {
  useEffect(() => {
    document.getElementById("credits").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);
  return (
    <Draggable
      cancel=".close-window"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("credits").style.zIndex = zIndexxx;
      }}
    >
      <div className="credits" id="credits">
        <Window
          title="Credits"
          elementId="credits"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div id="creditsField" className="creditsText">
            <WindupChildren>
              <Pace ms={1}>
                <p>
                  <strong>Logo and Animation Design:</strong> Special thanks
                  goes to
                  <a
                    href="https://www.linkedin.com/in/valentin-ivanov-a4b96b197/"
                    target="_blank"
                  >
                    {" "}
                    Valentin Ivanov{" "}
                  </a>
                  the creative force behind the CPU Portal intro animation and
                  KisimoffOS logo. Watch the full RSA Award winning{" "}
                  <a
                    href="https://hivalmotion.cargo.site/RSA-Moving-Pictures-2023"
                    target="_blank"
                  >
                    {" "}
                    animation
                  </a>{" "}
                  and explore more of their remarkable work on{" "}
                  <a href="https://hivalmotion.cargo.site/" target="_blank">
                    {" "}
                    HiValMotion
                  </a>
                  .
                  <br />
                  <br />
                  <strong>Eye Design:</strong> Inspired by the iconic
                  <a
                    href="https://en.wikipedia.org/wiki/HAL_9000"
                    target="_blank"
                  >
                    {" "}
                    HAL-9000
                  </a>
                  , TheEye was brought into life with the help of Midjourney and
                  Framer Motion.
                  <br />
                  <br />
                  <strong>Inspiration: </strong>
                  The concept of KisimoffOS was inspired by
                  <a href="https://poolsuite.net/" target="_blank">
                    {" "}
                    Poolside FM
                  </a>
                  , revealing the boundless potential of web apps.
                  <br />
                  Replicating WindowsXP posed an exciting challange and a deep
                  dive in the early 2000s nostalgia - an era which motivated me
                  to become a developer.
                  <br />
                  <br />
                  <strong>Feautred Libraries:</strong>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/react-console-emulator"
                        target="_blank"
                      >
                        {" "}
                        react-console-emulator
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/react-device-detect"
                        target="_blank"
                      >
                        {" "}
                        react-device-detect
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/react-draggable"
                        target="_blank"
                      >
                        {" "}
                        react-draggable
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/react-ip-details"
                        target="_blank"
                      >
                        {" "}
                        react-ip-details
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npmjs.com/package/framer-motion"
                        target="_blank"
                      >
                        {" "}
                        framer-motion
                      </a>
                    </li>
                  </ul>
                  <br />
                  These invaluable tools played a significant role in the
                  successful development and execution of the KisimoffOS.
                </p>
              </Pace>
            </WindupChildren>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Credits;
