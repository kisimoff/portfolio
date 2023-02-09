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
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
    document.getElementById("projects").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
    console.log(zIndexxx);
  }, []);
  return (
    <Draggable
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
            <div className="projectsField">
              <div className="projectsRow">
                <Project
                  sorsa={kwik}
                  title="Kisimoff.com"
                  description="23 Tasks is designed to help users quickly organize their tasks and ideas. Many existing apps are either too complex, full of ads, or both. This app aims to fill the gap by providing a simple yet powerful system of tag sorting and task prioritization, inspired by the Kanban board, a popular workflow visualization tool used by Agile teams. The APK is available for testing on GitHub."
                  technologies="React, Firebase"
                  repo="https://github.com/vtwenty3/Kwik"
                  live="vtwenty3.github.io/Kwik/"
                ></Project>
                <Project
                  sorsa={tasks}
                  title="23 Tasks"
                  description="23 Tasks is designed to help users quickly organize their tasks and ideas. Many existing apps are either too complex, full of ads, or both. This app aims to fill the gap by providing a simple yet powerful system of tag sorting and task prioritization, inspired by the Kanban board, a popular workflow visualization tool used by Agile teams. The APK is available for testing on GitHub."
                  technologies="React-Native, Firebase"
                  repo="https://github.com/vtwenty3/23_Tasks"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={mas}
                  title="Microgrid Energy Trading System"
                  description="Multi-agent system designed to simulate microgrid energy trading auctions. Each agent is representing a peer of the system (household). Two auctions were developed – Dutch trading auction, which is fully decentralized and Double Auction which uses a central peer."
                  technologies="C#, ActressMAS, .NET"
                  repo="https://github.com/vtwenty3/ActressMas"
                ></Project>
                <Project
                  sorsa={setup}
                  title="Setup Garage"
                  description=" Setupgarage.cc is a web application for sharing car setup files for a racing simulator. It hosts setups in the form of .json files for different car and track combinations. When you select a car and track combination with an uploaded setup, you will be redirected to a table with a title, description, and a download button. You also have the ability to upload your own setups."
                  technologies="HTML, CSS, JS, Hosted on VPS, Flask, Nginx, SQLite"
                  repo="https://github.com/vtwenty3/SetupGarage.cc"
                  live="http://setupgarage.cc/"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={glass}
                  title="GLASS: Distributed E-governance Model "
                  description="This is a EU funded project aiming to develop a system that provides a method for secure sharing of citizen data among members of the Hyperledger network, using Inter-Planetary File System (IPFS). Our team was responsible for building prototypes for testing purposes. I was the main developer in the team, responsible the chain code and bash scripts used for communication between the Hyperledger and IPFS. Video Demonstration in GitHub."
                  technologies="Hyperledger Fabric, IPFS, Shell/Bash, GoLang"
                  repo="https://github.com/vtwenty3/Glass_Project"
                ></Project>
                <Project
                  sorsa={data}
                  title="Data Mining R-Studio"
                  description="Data mining project aiming to find outliers, relationships and plot the results using R programming language in its native IDE R-Studio. Based on synthetic dataset of historic vehicle accidents on UK roads, spanning five years"
                  technologies="R, R-Studio"
                  repo="https://github.com/vtwenty3/Data_Mining_R"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={kwik}
                  title="Cloud Based Medical System"
                  description="A distributed, cloud-based medical system with automated ambulance assignment based on patient location has been developed. Its software architecture is a combination of Model-View-Controller and Single-Page Application."
                  technologies="React, Firebase"
                  repo="https://github.com/vtwenty3/Kwik"
                  live="vtwenty3.github.io/Kwik/"
                ></Project>
                <Project
                  sorsa={track}
                  title="Track and Trace System"
                  description="SetupGarage is a file sharing"
                  technologies="React, Firebase"
                  repo="https://github.com/vtwenty3/Kwik"
                  live="vtwenty3.github.io/Kwik/"
                ></Project>

                {/* <img className="imageW" src={setup} /> */}
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={ai}
                  title="Deep Learing NLP Model"
                  description="This is a relatively simple deep learning model, trained on 1500 movie reviews. Word Embeddings were chosen as the representation technique due to their characteristics, flexibility, and use cases. The architecture of the model was composed of Bidirectional recurrent neural networks and LSTM layers. After training and tweaking the model achieved 87% accuracy on the testing data. "
                  technologies="Python, Keras, LSTM, Tensorflow"
                  repo="https://github.com/vtwenty3/Deep_Learning_Model"
                ></Project>
                <Project
                  sorsa={assembly}
                  title="Hi-Lo Game in Assembly"
                  description="SetupGarage is a file sharing"
                  technologies="React, Firebase"
                  repo="https://github.com/vtwenty3/Kwik"
                  live="vtwenty3.github.io/Kwik/"
                ></Project>
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
                  sorsa={connect}
                  title="Connect 4 in C"
                  description="Connect 4 is a fun local-multiplayer command-line game. It was one of my earliest projects and was coded purely in C. It served as a playground for learning algorithms and data structures. "
                  technologies="C"
                  repo="https://github.com/vtwenty3/Connect_4_C"
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
