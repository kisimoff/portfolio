import React from "react";
import {
  AudioPlayerControlSprite,
  PlayListPanel,
  PlayListProvider,
  AudioPlayer,
  TrackType,
} from "react-audio-player-pro";
import "react-audio-player-pro/dist/style.css";

const audioTrackList = [
  {
    src: "/music/Ambitionz.mp3",
    preload: "auto",
    duration: 100,
    mediaMetadata: {
      title: "Ambitionz az a Ridah ",
      artist: "2pac",
      album: "2pacalypse",
      artwork: [
        { src: "../music/2pac.png", sizes: "64x64", type: "image/png" },
        {
          src: "../music/2pac.png",
          sizes: "128x128",
          type: "image/png",
        },
      ],
    },
  },
  // other tracks here...
];

export default function PlayListProvider2() {
  return (
    <>
      <AudioPlayerControlSprite />
      // No props
      <PlayListProvider>
        // PlayListProvider provide a button to add track to play list
        <AudioPlayer trackList={audioTrackList} />
        // No props
        <PlayListPanel />
      </PlayListProvider>
    </>
  );
}
