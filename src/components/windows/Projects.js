// Libraries
import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { BiWorld } from "react-icons/bi";

// Videos
import esc from "./../../animated/esc.mp4";
import rockets from "./../../animated/rockets.mp4";

// Components
import Window from "./Window";
import Project from "../Project";

// Rest of the Videos
import mas from "./../../animated/mas.mp4";
import kisimoff from "./../../animated/kisimoff.mp4";
import kwik from "./../../animated/kwik.mp4";
import setup from "./../../animated/setup.mp4";
import tasks from "./../../animated/tasks2.mp4";
import ai from "./../../animated/ai.mp4";
import assembly from "./../../animated/asse.mp4";
import connect from "./../../animated/connect.mp4";
import labyrinth from "./../../animated/labyrinth.mp4";
import data from "./../../animated/data.mp4";
import track from "./../../animated/trackandtrace.mp4";
import glass from "./../../animated/glass.mp4";
import jazz from "./../../animated/jazz.mp4";
import cron from "./../../animated/cron.mp4";

const Projects = ({ theme, setVisibility, zIndexxx, setZindexxx, sorsa }) => {

  const projects = [
    {
      sorsa:esc,
                  title:"ESC The Loop: Mobile App (DSCT)",
                  description:"Leveraging cutting-edge research on manipulative patterns and psychological tactics in social media, ESC the Loop is a smarter app timer designed to help users regain control over their digital habits. Upon timer expiration, the app sends customizable notifications at set intervals, offering an escape route redirecting users to their task list or an app of their choice. ESC the loop’s features are wrapped in a neo-brutalist design and are enhanced by engaging animations and tactile feedback for an immersive user experience."
                  ,technologies:"React-native, TypeScript, Java, Headless JS, Figma"
                 , repo:"https://github.com/vtwenty3/ESC_The_Loop"
                 , live:"https://www.notion.so/23things/ESC-The-Loop-fccf49ea661b4752a3980300041aaa63"
    },
    
    // More projects...
  ];



  useEffect(() => {
    document.getElementById("projects").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(sorsa);
          videoEl.current && videoEl.current.play();
        } else {
          videoEl.current && videoEl.current.pause();
        }
      },
      { rootMargin: '2px' } // start loading video when it's within 500px of the viewport
    );
    observer.observe(videoEl.current);

    return () => {
      observer.unobserve(videoEl.current);
    };
  }, [sorsa]);
  
  return (
    <Draggable
      cancel=".close-window, .projectsScroll"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("projects").style.zIndex = zIndexxx;
        // console.log(zIndexxx);
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
              project.
            </div>
            <div className="projectsField">
              <div className="projectsRow">
                <Project
                  sorsa={esc}
                  title="ESC The Loop: Mobile App (DSCT)"
                  description="Leveraging cutting-edge research on manipulative patterns and psychological tactics in social media, ESC the Loop is a smarter app timer designed to help users regain control over their digital habits. Upon timer expiration, the app sends customizable notifications at set intervals, offering an escape route redirecting users to their task list or an app of their choice. ESC the loop’s features are wrapped in a neo-brutalist design and are enhanced by engaging animations and tactile feedback for an immersive user experience."
                  technologies="React-native, TypeScript, Java, Headless JS, Figma"
                  repo="https://github.com/vtwenty3/ESC_The_Loop"
                  live="https://www.notion.so/23things/ESC-The-Loop-fccf49ea661b4752a3980300041aaa63"
                ></Project>

                <Project
                  sorsa={rockets}
                  title="Lunar Lander: Evolutionary Algorithm"
                  description="The algorithm integrates an adaptive mutation rate, two crossover methods, and multiple activation and initialization functions, which are tunable as hyperparameters. This design creates a large search space that can be explored using techniques such as random and grid search. Each search-cycle generates a dataset which can be analyzed to uncover valuable insights used for tuning the parameters. The implemented strategy sheds light on the algorithm's dynamics and performance, resulting in an EA that achieves excellent fitness values.  "
                  technologies="Java, Math3, R, OpenRefine"
                  repo="https://github.com/vtwenty3/Lunar_Lander"
                ></Project>
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={mas}
                  title="Microgrid Market Maker: Multi-Agent System"
                  description="Peer-to-peer multi-agent system, where each agent represents a household in a microgrid. This enables testing of architectural patterns and evaluation of auction and communication protocols. Two auction protocols were compared: a decentralized Dutch Auction and a Double Auction with a central peer. The Double Auction demonstrated six times greater computational efficiency with 20 agents, revealing the potential drawbacks and cost of decentralization."
                  technologies="C#, ActressMAS, .NET"
                  repo="https://github.com/vtwenty3/ActressMas"
                ></Project>
                <Project
                  sorsa={kisimoff}
                  title="Kisimoff OS: Web Application"
                  description="Inspired by Poolside.fm and the nostalgia of Windows XP, Kisimoff OS offers an engaging platform to explore my craft. It resembles an OS with several applications, including a terminal window. Additionally, it showcases my entire project portfolio, accompanied by a short video demonstration for each."
                  technologies="React, JavaScript, CSS, Figma "
                  repo="https://github.com/vtwenty3/portfolio"
                ></Project>
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={setup}
                  title="Setup Garage: Full-Stack Web App"
                  description="Setupgarage.cc is a web application that serves as a platform for sharing car setup files for a racing simulator. It offers setups in the form of .json files for various car and track combinations. Upon selecting a specific car and track combination with, user will be directed to a table with best lap time, description, and a download button. Additionally, users have the option to upload their own setups. Hosted on a VPS with Nginx and Flask."
                  technologies="HTML, CSS, JS, Flask, Nginx, SQLite, Figma"
                  repo="https://github.com/vtwenty3/SetupGarage.cc"
                  live="http://setupgarage.cc/"
                ></Project>
                <Project
                  sorsa={glass}
                  title="GLASS: Distributed E-governance Model "
                  description="GLASS, an EU-funded project, aims to improve the trust between government and citizens, by providing an efficient and transparent model for handling personal information. It achieves that by leveraging a permissioned blockchain for the data transfer and IPFS protocol for the data storage.  Our team developed a prototype for evaluating different approaches and strategies. I designed the communication protocols (chaincode) and integrated IPFS with HLF."
                  technologies="Hyperledger Fabric, IPFS, Shell/Bash, GoLang"
                  repo="https://github.com/vtwenty3/Glass_Project"
                ></Project>
              </div>
              <div className="projectsRow">
                <Project
                  sorsa={jazz}
                  title="Jazzdap"
                  description="As the lead front-end developer for JazzDap, an AI-powered music search engine, I collaborated closely with a designer to create a visually appealing, intuitive, and responsive interface using React. The project aimed to revolutionize music search by allowing users to input melodies to search a vast database of songs. My work had to integrate seamlessly with the backend functionality developed by a co-developer. This project showcases my proficiency in React and my ability to collaborate effectively within a creative team."
                  technologies="React, Vite, Tailwind"
                  live="https://vtwenty3.github.io/jazzdap/"
                  repo="https://github.com/vtwenty3/jazzdap"
                ></Project>
                <Project
                  sorsa={labyrinth}
                  title="From The Labyrinth"
                  description="As the sole designer and developer for the From the Labyrinth band's website, I used Figma, HTML, and JavaScript to create a fully responsive, user-friendly site. The platform keeps fans updated with the latest news, events, and multimedia content from the band. Strong client communication was essential in this project to ensure the band's needs were met effectively. This endeavor showcases my capabilities in both design and development and my commitment to tailored client solutions."
                  technologies="HTML, CSS, JavaScript, Figma"
                  repo="https://github.com/vtwenty3/labyrinth"
                  live="http://fromthelabyrinth-music.com/"
                ></Project>
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
                  sorsa={tasks}
                  title="23 Tasks"
                  description="23 Tasks Cloud-Based productivity app designed to help users quickly organize their tasks and ideas. Many existing apps are either too complex, too simple or full of ads. This app aims to bridge the gap by providing a easy to use solution with tag sorting system and task prioritization, inspired by the Kanban board, a popular workflow visualization tool used by Agile teams. The APK is available for testing on GitHub."
                  technologies="React-Native, Firebase, Figma, Android Studio"
                  repo="https://github.com/vtwenty3/23_Tasks"
                ></Project>
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
                  sorsa={track}
                  title="Track and Trace System"
                  description="This track-and-trace system that tracks contacts and visits associated with each user. A contact occurs when two users come into contact. A visit occurs when a user checks in at a particular location. Each contact or visit is recorded with the user/s involved, location date and time of the event. The program can then generate a list of all the telephone numbers of individuals who visited a specified place or contacted a specified individual within a specified time-period."
                  technologies="C#"
                  repo="https://github.com/vtwenty3/Track_And_Trace_Prototype"
                ></Project>
              </div>
              <div className="projectsRow">
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
              <div className="projectsRow" style={{ paddingBottom: "2rem" }}>
                <Project
                  sorsa={cron}
                  title="Crontab UI"
                  description="Bash script providing UI for cron jobs management. Add, edit, and remove jobs with ease: choose from - display all jobs, insert a new job, edit existing jobs, remove specific jobs, or remove all jobs. "
                  technologies="Bash"
                  repo="https://github.com/vtwenty3/Crontab_UI"
                ></Project>
                <Project
                  sorsa={data}
                  title="Data Mining R-Studio"
                  description="This data mining project sought to identify and visualize outliers, relationships, and patterns in a synthetic dataset of historic vehicle accidents that occurred on UK roads over five years. The dataset was pre-processed with OpenRefine and the results were then plotted and visualized using R-Studio. "
                  technologies="R, R-Studio"
                  repo="https://github.com/vtwenty3/Data_Mining_R"
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
