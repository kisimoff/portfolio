import about_png from '../../img/aboutCompress.png'
import Window from './Window'
import {
  WindupChildren,
  Pause,
  Pace,
} from 'windups'
import { useWindows } from '@contexts/WindowsContext'

const About = () => {
  const { aboutWindow } = useWindows()

  return (
    <div className="about" id="about">
      <Window window={aboutWindow}>
        <div id="aboutField" className="aboutText">
          <WindupChildren>
            <Pace ms={38}>
              <div className="about-first">
                <img alt="me" src={about_png} />
                <p>
                  Hi! <Pause ms={500} />
                  I'm Val! <Pause ms={500} />
                  Let me tell you a bit about me. <Pause ms={600} />
                  It all began back in 2007 <Pause ms={500} />
                  when I saw how my father cooled an extremely overclocked GPU
                  with dry ice. <Pause ms={1000} /> The result?{' '}
                  <Pause ms={400} /> The 1st benchmark score in the country.
                  <Pause ms={450} />
                  <br />
                  From that moment on, I was hooked.
                  <Pause ms={700} />
                  <br />
                  <br />
                </p>
              </div>
              <p>
                As I grew up, I spent my time tinkering <Pause ms={500} /> -
                modding games, <Pause ms={150} />
                flashing ROMs on Androids, <Pause ms={150} />
                building RC models, <Pause ms={150} />
                building PCs...
                <Pause ms={1000} />
                <br></br> <br></br>
                This hands-on experience, combined with my desire to create,
                led me to pursue a career as a developer.
                <Pause ms={600} />
                <br></br> <br></br>
                Nowadays, I have a broad background in multiple tech fields:
                ai, <Pause ms={150} /> front-end,
                <Pause ms={150} /> back-end,
                <Pause ms={150} /> mobile development,
                <Pause ms={150} /> blockchain, <Pause ms={150} />
                data mining,
                <Pause ms={150} /> web design,
                <Pause ms={150} /> HCI, IT support... <Pause ms={200} />
                <br></br> <br></br>
                This gives me great perspective,
                <Pause ms={100} /> allowing me to make informed decisions and
                approach a task from a variety of angles. <Pause ms={400} />
                <br></br> <br></br>
                Im passionate about creating experiences,
                <Pause ms={200} /> crafting UIs, <Pause ms={200} />
                and assembling the pieces together. <Pause ms={400} /> I care{' '}
                <Pause ms={200} />
                about productivity and efficiency, <Pause ms={200} /> and i
                hate wasted time and potential. <Pause ms={400} />
                <br></br> <br></br>
                Outside of work, im a movie lover, <Pause ms={200} />a bit of
                an audiophile <Pause ms={200} />
                and a motorhead at hearth.
                <br></br>
              </p>
            </Pace>
          </WindupChildren>
        </div>
      </Window>
    </div>
  )
}

export default About
