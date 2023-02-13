import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import kwik from "./../../animated/kwik.mp4";
import setup from "./../../animated/setup.mp4";
import tasks from "./../../animated/tasks2.mp4";
import ai from "./../../animated/ai.mp4";
import assembly from "./../../animated/asse.mp4";
import connect from "./../../animated/connect.mp4";
import labyrinth from "./../../animated/labyrinth.mp4";
import data from "./../../animated/data.mp4";
import kisimoff from "./../../animated/kisimoff.mp4";

import mas from "./../../animated/mas.mp4";
import track from "./../../animated/trackandtrace.mp4";
import glass from "./../../animated/glass.mp4";

import webm from "./../../animated/connect.mp4";
import Window from "./Window";

import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Project from "../Project";
import { CgClose } from "react-icons/cg";
import { BsJournalCode } from "react-icons/bs";

const Projects = ({ theme, setVisibility, zIndexxx, setZindexxx }) => {
  const [z, setZ] = useState(4);
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch((error) => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  useEffect(() => {
    // attemptPlay();
    document.getElementById("projects").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
    console.log(zIndexxx);
  }, []);
  return (
    <Draggable
      cancel=".close-window, .projectsScroll"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("projects").style.zIndex = zIndexxx;
        console.log(zIndexxx);
      }}
    >
      <div className="projects" id="projects">
        <Window
          title="Projects"
          elementId="projects"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div className="projectsScroll">
            <div className="projectsExplain">
              Tap or hover on a project to learn more. Some projects are live
              and can be accessed by clicking the <BiWorld></BiWorld> icon. Each
              repository has a README with more detailed information about the
              project.{" "}
            </div>
            <div className="projectsField">
              <div className="projectsRow">
                <Project
                  sorsa={kisimoff}
                  title="Kisimoff.com"
                  description="Kisimoff OS  is innovative portfolio website designed to showcase my projects and technical skills. Interface that resembles a functioning operating system. Packed with powerful features Kisimoff OS offers a unique and engaging experience.  The site is built using React and hosted on GitHub Pages, showcasing proficiency in both front-end development and version control. inspired by Poolside.fm and Windows XP.  "
                  technologies="React, GitHub Pages"
                  repo="https://github.com/vtwenty3/portfolio"
                ></Project>

                <Project
                  sorsa={mas}
                  title="Microgrid Energy Trading System"
                  description="This system simulates microgrid energy trading auctions, where each agent represents a microgrid member (household). It  be used to evaluate trading/auction strategies and communcation portocols and test architectural patterns. Two auctions were developed and compared - Dutch Auction (decentralised) and Double Auction (with a central peer) with the latter showing better computational efficiency (6 times fewer messages exchanged)."
                  technologies="C#, ActressMAS, .NET"
                  repo="https://github.com/vtwenty3/ActressMas"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={tasks}
                  title="23 Tasks"
                  description="23 Tasks Cloud-Based productivity app designed to help users quickly organize their tasks and ideas. Many existing apps are either too complex, too simple or full of ads. This app aims to bridge the gap by providing a easy to use solution with tag sorting system and task prioritization, inspired by the Kanban board, a popular workflow visualization tool used by Agile teams. The APK is available for testing on GitHub."
                  technologies="React-Native, Firebase"
                  repo="https://github.com/vtwenty3/23_Tasks"
                ></Project>
                <Project
                  sorsa={glass}
                  title="GLASS: Distributed E-governance Model "
                  description="This is a EU funded project aiming to develop a system that provides a method for secure sharing of citizen data among members of the Hyperledger network, using Inter-Planetary File System (IPFS). Our team was responsible for building prototypes for testing purposes. I was the main developer in the team, responsible the chain code and bash scripts used for communication between the Hyperledger and IPFS. Video Demonstration in GitHub."
                  technologies="Hyperledger Fabric, IPFS, Shell/Bash, GoLang"
                  repo="https://github.com/vtwenty3/Glass_Project"
                ></Project>
                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={kwik}
                  title="Cloud Based Medical System"
                  description="Kiwk Medical is cloud-based distributed medical system that logs and manages patient information and finds hospitals based on postcode. It has 3 main screens: Operator, Hospital, and Ambulance. The Operator queries or inputs patient information, the Hospital updates case state, and the Ambulance receives and updates patient information. Cases are automatically assigned to the nearest avalaible ambulance. MVC and SPA architecture."
                  technologies="React, Firebase"
                  repo="https://github.com/vtwenty3/Kwik"
                  live="https://vtwenty3.github.io/Kwik/"
                ></Project>
                <Project
                  sorsa={setup}
                  title="Setup Garage"
                  description="Setupgarage.cc is a web application that serves as a platform for sharing car setup files for a racing simulator. It offers setups in the form of .json files for various car and track combinations. Upon selecting a specific car and track combination with, user will be directed to a table with best lap time, description, and a download button. Additionally, users have the option to upload their own setups."
                  technologies="HTML, CSS, JS, Hosted on VPS, Flask, Nginx, SQLite"
                  repo="https://github.com/vtwenty3/SetupGarage.cc"
                  live="http://setupgarage.cc/"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={labyrinth}
                  title="From The Labyrinth"
                  description="From the Labyrinth is a freelance website project for a music band. The site offers fans a window into the world of the band, with updates on their latest events and releases, as well as multimedia content like photos and videos.  The website is a hub for all things From the Labyrinth, providing fans with an immersive experience and helping the band connect with their fanbase. "
                  technologies="HTML, CSS, JS"
                  repo="https://github.com/vtwenty3/labyrinth"
                  live="http://fromthelabyrinth-music.com/"
                ></Project>
                <Project
                  sorsa={data}
                  title="Data Mining R-Studio"
                  description="This data mining project sought to identify and visualize outliers, relationships, and patterns in a synthetic dataset of historic vehicle accidents that occurred on UK roads over five years. The dataset was pre-processed and the results were then plotted and visualized using the powerful R programming language and its native development environment, R-Studio. "
                  technologies="R, R-Studio"
                  repo="https://github.com/vtwenty3/Data_Mining_R"
                ></Project>
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={track}
                  title="Track and Trace System"
                  description="This track-and-trace system that tracks contacts and visits associated with each user. A contact occurs when two users come into contact. A visit occurs when a user checks in at a particular location. Each contact or visit is recorded with the user/s involved, location date and time of the event. The program can then generate a list of all the telephone numbers of individuals who visited a specified place or contacted a specified individual within a specified time-period."
                  technologies="C#"
                  repo="https://github.com/vtwenty3/Track_And_Trace_Prototype"
                ></Project>
                <Project
                  sorsa={ai}
                  title="Deep Learing NLP Model"
                  description="This is a relatively simple deep learning model, trained on 1500 movie reviews. Word Embeddings were chosen as the representation technique due to their characteristics, flexibility, and use cases. The architecture of the model was composed of Bidirectional recurrent neural networks and LSTM layers. After training and tweaking the model achieved 87% accuracy on the testing data. "
                  technologies="Python, Keras, LSTM, Tensorflow"
                  repo="https://github.com/vtwenty3/Deep_Learning_Model"
                ></Project>
              </div>
              <div className="projectsRow" style={{ paddingBottom: "2rem" }}>
                <Project
                  sorsa={connect}
                  title="Connect 4 in C"
                  description="Connect 4 is a fun local-multiplayer command-line game. It was one of my earliest projects and was coded purely in C. It served as a playground for learning algorithms and data structures. "
                  technologies="C"
                  repo="https://github.com/vtwenty3/Connect_4_C"
                ></Project>
                <Project
                  sorsa={assembly}
                  title="Hi-Lo Game in Assembly"
                  description="Hi-Lo card game, written in ARM32 Assembly. This program takes two integer inputs, compares them, and returns a string indicating the stronger/weaker card. Writing this game helped me understand CPU architecture and the core concepts of programming at a low-level."
                  technologies="ARM32 Assembly, AQA Simulator"
                  repo="https://github.com/vtwenty3/Assembly_Game"
                ></Project>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;
