import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-modern-audio-player";
import audio1 from "./../../music/God.mp3";
import img1 from "./../../music/2pac.png";
import Draggable from "react-draggable";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "./../../Player.css";

// import "react-jinke-music-player/lib/styles/index.less";
const playList = [
  {
    /*
Monolink - Rearange My Mind?
WhoMadeWho - Abu Simbel
NO CIGAR - 1999
Broken Bells - Good Luck

    */
    name: "2pac",
    writer: "God Bless The Dead",
    img: img1,
    src: audio1,
    id: 1,
  },
];

const Player = ({ theme, setTheme }) => {
  const [zIndexD, setzIndexD] = useState(100);

  return (
    <Draggable
      onMouseDown={() => {
        document.getElementById("projects").style.zIndex = "5";
        document.getElementById("deviceInfo").style.zIndex = "4";
        document.getElementById("about").style.zIndex = "5";
        document.getElementById("terminal").style.zIndex = "2";
        document.getElementById("player").style.zIndex = "6";
      }}
    >
      <div className="player" id="player" style={theme.field}>
        <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            Music Player
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            onClick={() => {
              document.getElementById("player").style.display = "none";
            }}
          />
        </div>
        <div className="musicPlayer">
          <h1>This should be a music player</h1>
          <div className="playerSmall">
            {/* <ReactJkMusicPlayer
              mode="full"
              mobileMediaQuery={"(max-width: 568px)"}
            /> */}
            <AudioPlayer
              id="audioPlayer2"
              playList={playList}
              audioInitialState={{
                muted: true,
                volume: 0.2,
                curPlayId: 1,
              }}
              placement={{
                interface: {
                  templateArea: {
                    artwork: "row1-2",
                    playList: "row2-1",
                    trackInfo: "row2-2",
                    trackTimeCurrent: "row3-1",
                    progress: "row3-2",
                    trackTimeDuration: "row3-3",
                    playButton: "row4-2",
                    repeatType: "row4-1",
                    volume: "row4-3",
                  },
                },
                player: "top",

                playList: "bottom",
                volumeSlider: "left",
              }}
              activeUI={{
                all: true,
                progress: "bar",
              }}
              //   activeUI={{
              //     all: true,
              //     progress: "bar",
              //   }}
              rootContainerProps={{
                position: "relative",

                width: "650px",

                // justifyContent: "center",
                // alignItems: "center",
              }}
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Player;
