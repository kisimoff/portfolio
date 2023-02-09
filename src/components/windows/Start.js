import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Window from "./Window";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";

const Start = ({ theme, setVisibility }) => {
  const [zIndexD, setzIndexD] = useState(100);

  const StringyWindup = () => {
    const [text] = useWindupString(
      "When I was 7, I saw how my father was cooling an overlocked GPU with Carbon-dioxide."
    );
    return <div>{text}</div>;
  };

  return (
    <Draggable>
      <div className="start" id="start">
        <Window
          title="Start"
          elementId="start"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div className="startText">
            <WindupChildren
            //   onFinished={() => {
            //     document.getElementById("start").style.display = "none";
            //   }}
            >
              <Pause ms={1000} />
              <Pace ms={80}>{"Hello,"}</Pace>
              <Pause ms={550} />
              <Pace ms={70}>{" friend."}</Pace> <Pause ms={600} />
              <Pause ms={900} />
              <Pace ms={32}>
                <p>
                  <br></br>
                  {"Welcome to Kisimoff OS."} <br></br>
                </p>
              </Pace>
              <Pause ms={1000} />
              <p>
                <br></br>

                <Pace ms={32}>
                  {"Here, you'll find a Terminal"} <br></br>{" "}
                  {"where commands are king."}
                  <br></br>
                  <Pause ms={800} />
                  {"Projects, where the code"} <br></br>
                  {" speaks for itself. "}
                  <br></br>
                  <Pause ms={800} />
                  {"And if you're curious about "}
                  <br></br>
                  {"the man behind the keyboard..."} <br></br>
                  <Pause ms={500} />
                  {"just click the About icon. "}
                  <Pause ms={1000} />
                  <br></br>
                  <br></br>
                  {"Welcome to my world. "}
                  <Pause ms={1300} />
                  <br></br>
                  {"I'll self destruct shortly... "}
                  <Pause ms={2300} />
                </Pace>
              </p>
            </WindupChildren>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Start;

// Hello, friend

// Welcome to Kisimoff OS.

// Here, you'll find a Terminal, where commands are king.

// Projects, where the code speaks for itself.

// And if you're curious about the man behind the keyboard, just click the About icon.

// Welcome to my world.
