import React, { useState, useRef, useEffect } from "react";
import math from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Draggable from "react-draggable";
import Window from "./Window";

const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = React.useState(false);
  const [title, setTitle] = React.useState("Terminal");

  useEffect(() => {
    document.querySelector("#field").focus();
  }, []);

  // const handleMinMax = () => {
  // };

  return (
    <Draggable
      onMouseDown={() => {
        document.getElementById("projects").style.zIndex = "5";
        document.getElementById("deviceInfo").style.zIndex = "4";
        document.getElementById("about").style.zIndex = "3";
        document.getElementById("terminal").style.zIndex = "6";
      }}
    >
      <div
        id="terminal"
        style={
          maximized
            ? { height: "100vh", width: "100vw", maxWidth: "100vw" }
            : theme.terminal
        }
      >
        {/* <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            {title}
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            text="X"
            onClick={() => {
              document.getElementById("terminal").style.display = "none";
            }}
          />
        </div> */}
        <Window title="Terminal" elementId="terminal" theme={theme} />

        <Field theme={theme} setTheme={setTheme} setTitle={setTitle} />
      </div>
    </Draggable>
  );
};
class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commandHistory: [],
      commandHistoryIndex: 0,
      //First row text

      fieldHistory: [
        {
          text: "Hello, world! I'm Valentin, Software Developer. This is my portfolio.",
        },
        {
          text: "Type HELP to see the full list of commands.",
          hasBuffer: true,
        },
      ],
      userInput: "",
      isMobile: false,
    };
    this.recognizedCommands = [
      {
        command: "help",
        purpose: "Displays infromation about all the commands.",
      },
      {
        command: "date",
        purpose: "Displays the current date.",
      },
      {
        command: "start",
        purpose: "Launches a specified URL in a new tab or separate window.",
        help: [
          "START <URL>",
          "Launches a specified URL in a new tab or separate window.",
          "",
          "URL......................The website you want to open.",
        ],
      },
      {
        command: "cls",
        purpose: "Clears the screen.",
      },
      {
        command: "time",
        purpose: "Displays the current time.",
      },
      {
        command: "whoami",
        isMain: true,
        purpose: "Displays personal information.",
      },

      {
        command: "contact",
        isMain: true,
        purpose: "Displays contact information.",
      },

      {
        command: "projects",
        isMain: true,
        purpose: "Displays information about my projects.",
      },
      {
        command: "skills",
        isMain: true,
        purpose: "Displays programming skills information.",
      },
      {
        command: "project",
        purpose:
          "Launches a specified project in a new tab or separate window.",
        help: [
          "PROJECT <TITLE>",
          "Launches a specified project in a new tab or separate window.",
          "List of projects currently include:",
          "glass",
          "23tasks",
          "setupgarage",
          "deeplearning",
          "datamining",
          "trackandtrace",
          "crontab",
          "connect4",
          "replacer",
          "assembly",
          "",
          "TITLE....................The title of the project you want to view.",
        ],
      },
    ];
    this.handleTyping = this.handleTyping.bind(this);
    this.handleTypingMobile = this.handleTypingMobile.bind(this);

    this.handleInputEvaluation = this.handleInputEvaluation.bind(this);
    this.handleInputExecution = this.handleInputExecution.bind(this);
    this.handleContextMenuPaste = this.handleContextMenuPaste.bind(this);
  }
  componentDidMount() {
    if (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    ) {
      this.setState((state) => ({
        isMobile: true,
        fieldHistory: [
          {
            text: "Hello, world! I'm Valentin, Software Developer. This is my portfolio.",
            hasBuffer: true,
          },
          {
            text: "",
            isError: true,
          },
          {
            text: "\n Type 'help' to see the full list of commands.",
            hasBuffer: true,
          },
          {
            text: "Visit from desktop for full experience.",
            isError: true,
            hasBuffer: true,
          },
        ],
      }));
    } else {
      const userElem = document.querySelector("#field");
      const themePref = window.localStorage.getItem("reactTerminalThemePref");

      // Disable this if you're working on a fork with auto run enabled... trust me.
      // userElem.focus();

      if (themePref) {
        this.props.setTheme(themePref);
      }
    }
  }
  componentDidUpdate() {
    const userElem = document.querySelector("#field");

    userElem.scrollTop = userElem.scrollHeight;
  }
  handleTyping(e) {
    e.preventDefault();

    const { key, ctrlKey, altKey } = e;
    const forbidden = [
      ...Array.from({ length: 12 }, (x, y) => `F${y + 1}`),
      "ContextMenu",
      "Meta",
      "NumLock",
      "Shift",
      "Control",
      "Alt",
      "CapsLock",
      "Tab",
      "ScrollLock",
      "Pause",
      "Insert",
      "Home",
      "PageUp",
      "Delete",
      "End",
      "PageDown",
    ];

    if (!forbidden.some((s) => s === key) && !ctrlKey && !altKey) {
      if (key === "Backspace") {
        this.setState(
          (state) => (state.userInput = state.userInput.slice(0, -1))
        );
      } else if (key === "Escape") {
        this.setState({ userInput: "" });
      } else if (key === "ArrowUp" || key === "ArrowLeft") {
        const { commandHistory, commandHistoryIndex } = this.state;
        const upperLimit = commandHistoryIndex >= commandHistory.length;

        if (!upperLimit) {
          this.setState((state) => ({
            commandHistoryIndex: (state.commandHistoryIndex += 1),
            userInput: state.commandHistory[state.commandHistoryIndex - 1],
          }));
        }
      } else if (key === "ArrowDown" || key === "ArrowRight") {
        const { commandHistory, commandHistoryIndex } = this.state;
        const lowerLimit = commandHistoryIndex === 0;

        if (!lowerLimit) {
          this.setState((state) => ({
            commandHistoryIndex: (state.commandHistoryIndex -= 1),
            userInput:
              state.commandHistory[state.commandHistoryIndex - 1] || "",
          }));
        }
      } else if (key === "Enter") {
        const { userInput } = this.state;
        if (userInput.length) {
          this.setState(
            (state) => ({
              commandHistory:
                userInput === ""
                  ? state.commandHistory
                  : [userInput, ...state.commandHistory],
              commandHistoryIndex: 0,
              fieldHistory: [
                ...state.fieldHistory,
                { text: userInput, isCommand: true },
              ],
              userInput: "",
            }),
            () => this.handleInputEvaluation(userInput)
          );
        } else {
          this.setState((state) => ({
            fieldHistory: [...state.fieldHistory, { isCommand: true }],
          }));
        }
      } else {
        this.setState((state) => ({
          commandHistoryIndex: 0,
          userInput: (state.userInput += key),
        }));
      }
    }
  }

  handleTypingMobile(e) {
    // console.log("button pressed:", e);
    const { key, ctrlKey, altKey } = e;
    const forbidden = [
      ...Array.from({ length: 12 }, (x, y) => `F${y + 1}`),
      "ContextMenu",
      "Meta",
      "NumLock",
      "Shift",
      "Control",
      "Alt",
      "CapsLock",
      "Tab",
      "ScrollLock",
      "Pause",
      "Insert",
      "Home",
      "PageUp",
      "Delete",
      "End",
      "PageDown",
    ];

    if (!forbidden.some((s) => s === e) && !ctrlKey && !altKey) {
      if (e === "{bksp}") {
        this.setState(
          (state) => (state.userInput = state.userInput.slice(0, -1))
        );
      } else if (e === "{escape}") {
        this.setState({ userInput: "" });
      } else if (e === "{space}") {
        this.setState((state) => (state.userInput = state.userInput += " "));
      } else if (e === "{shift}") {
        this.handleShift();
      } else if (e === "{enter}") {
        const { userInput } = this.state;
        this.setState((state) => (state.userInput = this.state.input));
        if (userInput.length) {
          this.setState(
            (state) => ({
              commandHistory:
                userInput === ""
                  ? state.commandHistory
                  : [userInput, ...state.commandHistory],
              commandHistoryIndex: 0,
              fieldHistory: [
                ...state.fieldHistory,
                { text: userInput, isCommand: true },
              ],
              userInput: "",
            }),
            () => this.handleInputEvaluation(userInput)
          );
        } else {
          this.setState((state) => ({
            fieldHistory: [...state.fieldHistory, { isCommand: true }],
          }));
          this.setState((state) => (state.userInput = ""));
          this.setState((state) => (state.input = ""));
        }
      } else {
        this.setState((state) => ({
          commandHistoryIndex: 0,
          userInput: (state.userInput += e),
        }));
      }
    }
  }

  handleInputEvaluation(input) {
    try {
      const evaluatedForArithmetic = math.evaluate(input);

      if (!isNaN(evaluatedForArithmetic)) {
        return this.setState((state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            { text: evaluatedForArithmetic },
          ],
        }));
      }

      throw Error;
    } catch (err) {
      const { recognizedCommands, giveError, handleInputExecution } = this;
      const cleanedInput = input.toLowerCase().trim();
      const dividedInput = cleanedInput.split(" ");
      const parsedCmd = dividedInput[0];
      const parsedParams = dividedInput.slice(1).filter((s) => s[0] !== "-");
      const parsedFlags = dividedInput.slice(1).filter((s) => s[0] === "-");
      const isError = !recognizedCommands.some((s) => s.command === parsedCmd);

      if (isError) {
        return this.setState((state) => ({
          fieldHistory: [...state.fieldHistory, giveError("nr", input)],
        }));
      }

      return handleInputExecution(parsedCmd, parsedParams, parsedFlags);
    }
  }
  handleInputExecution(cmd, params = [], flags = []) {
    if (cmd === "help") {
      if (params.length) {
        if (params.length > 1) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              this.giveError("bp", { cmd: "HELP", noAccepted: 1 }),
            ],
          }));
        }

        const cmdsWithHelp = this.recognizedCommands.filter((s) => s.help);

        if (cmdsWithHelp.filter((s) => s.command === params[0]).length) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              {
                text: cmdsWithHelp.filter((s) => s.command === params[0])[0]
                  .help,
                hasBuffer: true,
              },
            ],
          }));
        } else if (
          this.recognizedCommands.filter((s) => s.command === params[0]).length
        ) {
          return this.setState((state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              {
                text: [
                  `No additional help needed for ${this.recognizedCommands
                    .filter((s) => s.command === params[0])[0]
                    .command.toUpperCase()}`,
                  this.recognizedCommands.filter(
                    (s) => s.command === params[0]
                  )[0].purpose,
                ],
                hasBuffer: true,
              },
            ],
          }));
        }

        return this.setState((state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            this.giveError("up", params[0].toUpperCase()),
          ],
        }));
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "",
              "------------------ Main Commands -----------------",

              ...this.recognizedCommands
                .filter(({ isMain }) => isMain)
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from(
                      { length: 15 - command.length },
                      (x) => "."
                    ).join("")}${purpose}`
                ),
              "",
              "------------------ All Commands ------------------",

              ...this.recognizedCommands
                .sort((a, b) => a.command.localeCompare(b.command))
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from(
                      { length: 15 - command.length },
                      (x) => "."
                    ).join("")}${purpose}`
                ),
              "",
              "For help about a specific command, type HELP <COMMAND>, e.g. HELP PROJECT.",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "cls") {
      return this.setState({ fieldHistory: [] });
    } else if (cmd === "start") {
      if (params.length === 1) {
        return this.setState(
          (state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              { text: `Launching ${params[0]}...`, hasBuffer: true },
            ],
          }),
          () =>
            window.open(
              /http/i.test(params[0]) ? params[0] : `https://${params[0]}`
            )
        );
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          this.giveError("bp", { cmd: "START", noAccepted: 1 }),
        ],
      }));
    } else if (cmd === "date") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: `The current date is: ${new Date(
              Date.now()
            ).toLocaleDateString()}`,
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "time") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: `The current time is: ${new Date(
              Date.now()
            ).toLocaleTimeString()}`,
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "whoami") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Hello there!",

              "I'm Valentin, a software developer based in Edinburgh, Scotland. I've just finished my 3rd year at Napier University as, Computing Major. I'm currently looking for an internship or a job opportunity, where I can learn and improve my skills as a developer.",

              "",
              "Tech is my passion and hobby since my earliest memories, from modding games to building and preinstalling PCs, I have been around technology as far as I can remember.",
              "",
              "If you take a look at my projects (execute: PROJECTS) you can easily spot one thing - I have been involved in a wide variety of programming languages and technologies. From UI and design to Assembly language and Neural Networks. I'm not limiting my exposure and I'm willing to explore, innovate and learn.",
              "",
              "Execute CONTACT if you'd like to get in touch! ",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "skills") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Languages:",
              "-ARM32 Assembly",
              "-C",
              "-R",
              "-C++",
              "-Bash",
              "-Haskell",
              "-Python",
              "-Go Lang",
              "-MySQL",
              "-HTML",
              "-CSS",
              "-JavaScript",
              "",
              "Libraries/Frameworks:",
              "-Flask",
              "-Nginx",
              "-Gunicorn",
              "-React Native",
              "-React",
              "-Node",
              "",
              "Technologies:",
              "-Git",
              "-GitHub",
              "-Firebase",
              "-Hyperledger-Fabric",
              "-Wordpress",
              "-Docker",
              "-IPFS",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "contact") {
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "Email: kisimovvalentin@gmail.com",
              "Website: kisimoff.com",
              "LinkedIn: @kisimoff",
              "GitHub: @vtwenty3",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "projects") {
      let text = "";
      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          {
            text: [
              "",
              "*** To learn more about any of these project, type PROJECT <TITLE>, e.g. PROJECT setupgarage ***",
              "",
              "================================================",
              "----------------- Assembly Game ----------------",
              "================================================",
              "- To Learn More Execute: project assembly",
              "- Developed with: ARM32 Assembly",
              "- Project Description:",
              " Simple Hi-Lo game developed with Assembly language. The code can be run in an ARM CPU simulator which visualizes the execution flow of each instruction.  ",
              "",

              "================================================",
              "---------------- Word Replacer  ----------------",
              "================================================",
              "- To Learn More Execute: project replacer",
              "- Developed with: C",
              "- Project Description:",
              "Simple but useful program written in C using only the standard libaray used for replacing specified words or chars via the command line. Similar to Ctrl + F command in Windows. ",
              "",

              "================================================",
              "---------------- Connect 4 Game ----------------",
              "================================================",
              "- To learn more execute: project connect4",
              "- Developed with: C",
              "- Project Description:",
              "The classic connect 4 game game on command line, developed only with the standard C libraly. This is quite an old project, which tought me how to work with algorithms and data-structures, the power of pointers and what is happening behind the scenes with the higher-level languages.  ",
              "",

              "================================================",
              "------------------ Crontab UI ------------------",
              "================================================",
              "- To Learn More Execute: project crontab",
              "- Developed with: Shell (Bash flavor)",
              "- Project Description:",
              " Cron is a command-line utility which is used to schedule tasks on Unix based systems. This program serves as a command-line Ui app used for easier scheduling, editing and creation of specific processes. ",
              "",

              "================================================",
              "------------ Track And Trace System ------------",
              "================================================",
              "- To Learn More Execute: project trackandtrace",
              "- Developed with: C#, WPF",
              "- Project Description:",
              " Prototype for a track-and-trace system that will allow users to keep track of individuals with whom they have come into contact with and places that they have been. Every event is stored on a .csv which later can be used for visualising hotspots, relationships etc. ",
              "",

              "================================================",
              "-------------- Data Mining Project -------------",
              "================================================",
              "- To Learn More Execute: project datamining",
              "- Developed with: R, R-Studio, ggplot2",
              "- Project Description:",
              " The objective of this project was to find and visualise outliers and relationship in road accident synthetic dataset using R and ggplot2  ",
              "",

              "================================================",
              "-------------- Deep Learning Model -------------",
              "================================================",
              "- To Learn More Execute: project deeplearning ",
              "- Developed with: Python, Google Colab",
              "- Project Description:",
              "AI model for analysing positive or negative sentiment on movie reviews using BRNN networks and LTSM layers. The model achieved 87% accuracy on testing data. The word representation method used was custom word-embeddings.",
              "",

              "================================================",
              "---------------- Setupgarage.cc ----------------",
              "================================================",
              "- To Learn More Execute: project setupgarage ",
              "- Developed with: HTML, CSS, JS, Bootstrap, Python, Flask, SQLite, Nginx",
              "- Project Description:",
              "Setupgarage website aims is to educate about the basics of car racing and the core concepts of how to tune a race car.  It also provides a platform for sharing car setup files for Asetto Corsa Competizione - a car racing simulator. Fully designed, developed and deployed by me.",
              "",

              "================================================",
              "-------------- 23 Tasks Mobile App -------------",
              "================================================",
              "- To Learn More Execute: project 23tasks ",
              "- Developed with: React-Native, Firebase",
              "- Project Description:",
              "Cross-platform productivity mobile app. The app has two main parts - task prioritising using the agile project management tool - Kanban Board and note-taking and organising using a customisable tag system. Screenshots and .apk file is available on my Github Page.",
              "",

              "================================================",
              "----------- GLASS: Distributed Ledger ----------",
              "================================================",
              "- To Learn More Execute: project glass",
              "- Developed with: Go Lang, Shell, IPFS and Hyperledger Fabric (minifab tool)",
              "- Project Description:",
              "The main idea behind Glass Project is to provide a secure and permission-based solution for data transfer and storage among public administrations using blockchain technology. The project is citizen-centric as it aims to give the citizens control over their digital identities and give them the ability to monitor how their personal information is used and managed. Video Demonstration available, just follow - Learn more instructions!",
              "",

              "*** To learn more about any of these project, type PROJECT <TITLE>, e.g. PROJECT replacer ***",
            ],
            hasBuffer: true,
          },
        ],
      }));
    } else if (cmd === "project") {
      if (params.length === 1) {
        const projects = [
          {
            title: "glass",
            live: "https://github.com/vtwenty3/Glass_Project",
          },
          {
            title: "23tasks",
            live: "https://github.com/vtwenty3/23_Tasks",
          },
          {
            title: "deeplearning",
            live: "https://github.com/vtwenty3/Deep_Learning_Model",
          },
          {
            title: "setupgarage",
            live: "https://github.com/vtwenty3/SetupGarage.cc",
          },
          {
            title: "connect4",
            live: "https://github.com/vtwenty3/Connect_4_C",
          },
          {
            title: "datamining",
            live: "https://github.com/vtwenty3/Data_Mining_R",
          },
          {
            title: "assembly",
            live: "https://github.com/vtwenty3/Assembly_Game",
          },
          {
            title: "crontab",
            live: "https://github.com/vtwenty3/Crontab_UI",
          },
          {
            title: "trackandtrace",
            live: "https://github.com/vtwenty3/Track_And_Trace_Prototype",
          },
          {
            title: "replacer",
            live: "https://github.com/vtwenty3/Word_Replacer_C",
          },
        ];

        return this.setState(
          (state) => ({
            fieldHistory: [
              ...state.fieldHistory,
              { text: `Launching ${params[0]}...`, hasBuffer: true },
            ],
          }),
          () =>
            window.open(projects.filter((s) => s.title === params[0])[0].live)
        );
      }

      return this.setState((state) => ({
        fieldHistory: [
          ...state.fieldHistory,
          this.giveError("bp", { cmd: "PROJECT", noAccepted: 1 }),
        ],
      }));
    } else if (["google", "duckduckgo"].some((s) => s === cmd)) {
      return this.setState(
        (state) => ({
          fieldHistory: [
            ...state.fieldHistory,
            {
              text: params.length
                ? `Searching ${cmd.toUpperCase()} for ${params.join(" ")}...`
                : `Launching ${cmd.toUpperCase()}...`,
              hasBuffer: true,
            },
          ],
        }),
        () =>
          window.open(
            params.length
              ? `https://${cmd}.com/${
                  cmd === "google" ? "search" : ""
                }?q=${params.join("+")}`
              : `https://${cmd}.com/`,
            "_blank"
          )
      );
    }
  }
  handleContextMenuPaste(e) {
    e.preventDefault();

    if ("clipboard" in navigator) {
      navigator.clipboard.readText().then((clipboard) =>
        this.setState((state) => ({
          userInput: `${state.userInput}${clipboard}`,
        }))
      );
    }
  }
  giveError(type, extra) {
    const err = { text: "", isError: true, hasBuffer: true };

    if (type === "nr") {
      err.text = `${extra} : The term or expression '${extra}' is not recognized. Check the spelling and try again. If you don't know what commands are recognized, type HELP.`;
    } else if (type === "nf") {
      err.text = `The ${extra} command requires the use of flags. If you don't know what flags can be used, type HELP ${extra}.`;
    } else if (type === "bf") {
      err.text = `The flags you provided for ${extra} are not valid. If you don't know what flags can be used, type HELP ${extra}.`;
    } else if (type === "bp") {
      err.text = `The ${extra.cmd} command requires ${extra.noAccepted} parameter(s). If you don't know what parameter(s) to use, type HELP ${extra.cmd}.`;
    } else if (type === "up") {
      err.text = `The command ${extra} is not supported by the HELP utility.`;
    }

    return err;
  }

  onChange = (input) => {
    this.setState({ input });
    console.log("Input changed", input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  render() {
    const { theme } = this.props;
    const { fieldHistory, userInput } = this.state;
    var ismobile = false;
    if (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    ) {
      ismobile = true;
    } else {
      ismobile = false;
    }

    return (
      <div
        id="field"
        className={theme.app.backgroundColor === "#333444" ? "dark" : "light"}
        style={theme.field}
        onKeyDown={(e) => this.handleTyping(e)}
        tabIndex={0}
        onContextMenu={(e) => this.handleContextMenuPaste(e)}
      >
        {fieldHistory.map(({ text, isCommand, isError, hasBuffer }) => {
          if (Array.isArray(text)) {
            return (
              <MultiText input={text} isError={isError} hasBuffer={hasBuffer} />
            );
          }

          return (
            <Text
              input={text}
              isCommand={isCommand}
              isError={isError}
              hasBuffer={hasBuffer}
            />
          );
        })}
        <UserText input={userInput} theme={theme.cursor} />
        {/* <UserText input={this.state.input} theme={theme.cursor} /> */}
        {ismobile && (
          <div class="virtualKey">
            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              layoutName={this.state.layoutName}
              layout={{
                default: [
                  "1 2 3 4 5 6 7 8 9 0 - =",
                  "q w e r t y u i o p \\",
                  "☺ a s d f g h j k l {enter}",
                  "{shift} z x c v b n m {bksp}",
                  "{space}",
                ],
                shift: [
                  "~ ! @ # $ % ^ &amp; * ( ) _ +",
                  "Q W E R T Y U I O P |",
                  "☺ A S D F G H J K L {enter}",
                  "{shift} Z X C V B N M {bksp}",
                  "{space}",
                ],
              }}
              display={{
                "{enter}": "⠀↵⠀",
                "{bksp}": "⠀⌫⠀",
                "{shift}": "⠀⇧⠀",
                "{space}": "Space",
              }}
              onChange={this.onChange}
              onKeyPress={(e) => this.handleTypingMobile(e)}
            />
          </div>
        )}
      </div>
    );
  }
}
const Text = ({ input, isCommand, isError, hasBuffer }) => (
  <>
    <div>
      {isCommand && (
        <div id="query">
          <span style={{ color: "#26a269" }}>root@user</span>:
          <span style={{ color: "#08458f" }}>
            <strong>~</strong>
          </span>
          $
        </div>
      )}
      <span className={!isCommand && isError ? "error" : ""}>{input}</span>
    </div>
    {hasBuffer && <div></div>}
  </>
);
const MultiText = ({ input, isError, hasBuffer }) => (
  <>
    {input.map((s) => (
      <Text input={s} isError={isError} />
    ))}
    {hasBuffer && <div></div>}
  </>
);
const UserText = ({ input, theme }) => (
  <div>
    <div id="query">
      <span style={{ color: "#26a269" }}>root@user</span>:
      <span style={{ color: "#08458f" }}>
        <strong>~</strong>
      </span>
      $
    </div>
    <span>{input}</span>
    <div id="cursor" style={theme}></div>
  </div>
);
export default Terminal;
