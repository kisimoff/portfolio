
import Window from './Window'
import {
  WindupChildren,
  Pace,
} from 'windups'
import { useWindows } from '@contexts/WindowsContext'

const Credits = () => {
  const { creditsWindow } = useWindows()

  return (

    // <div className="credits" id="credits">
    <Window window={creditsWindow}>
      <div id="creditsField" className="creditsText">
        <WindupChildren>
          <Pace ms={1}>
            <p>
              <strong>Logo and Animation Design:</strong> Special thanks
              goes to
              <a
                href="https://www.linkedin.com/in/hivaluedesign/"
                target="_blank"
              >
                {' '}
                Valentin Ivanov{' '}
              </a>
              the creative force behind the CPU Portal intro animation and
              KisimoffOS logo. Watch the full RSA Award winning{' '}
              <a
                href="https://www.youtube.com/watch?v=6k12O1iADwc"
                target="_blank"
              >
                {' '}
                animation
              </a>{' '}
              and explore more of their remarkable work on{' '}
              <a href="https://www.hivaldesign.com/" target="_blank">
                {' '}
                HiValDesign
              </a>
              .
              <br />
              <br />
              <strong>Eye Design:</strong> Inspired by the iconic
              <a
                href="https://en.wikipedia.org/wiki/HAL_9000"
                target="_blank"
              >
                {' '}
                HAL-9000
              </a>
              , TheEye was brought into life with the help of Midjourney and
              Framer Motion.
              <br />
              <br />
              <strong>Inspiration: </strong>
              The concept of KisimoffOS was inspired by
              <a href="https://poolsuite.net/" target="_blank">
                {' '}
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
                    href="https://xtermjs.org/"
                    target="_blank"
                  >
                    {' '}
                    Xterm.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://zenfs.dev/core/"
                    target="_blank"
                  >
                    {' '}
                    ZenFS
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/captbaritone/webamp"
                    target="_blank"
                  >
                    {' '}
                    Webamp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/react-device-detect"
                    target="_blank"
                  >
                    {' '}
                    react-device-detect
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/react-draggable"
                    target="_blank"
                  >
                    {' '}
                    react-draggable
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/react-ip-details"
                    target="_blank"
                  >
                    {' '}
                    react-ip-details
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/framer-motion"
                    target="_blank"
                  >
                    {' '}
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
    </Window>
    // </div>
  )
}

export default Credits
