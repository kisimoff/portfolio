import AudioPlayer from "react-modern-audio-player";
import audio1 from "../music/God.mp3";
import img1 from "../music/2pac.png";
const playList = [
  {
    name: "2pac",
    writer: "God Bless The Dead",
    img: img1,
    src: audio1,
    id: 1,
  },
];
export default function Player23() {
  return (
    <div>
      <AudioPlayer
        playList={playList}
        audioInitialState={{
          muted: true,
          volume: 0.2,
          curPlayId: 1,
        }}
        placement={{
          interface: {
            templateArea: {
              trackTimeDuration: "row1-5",
              progress: "row1-4",
              playButton: "row1-6",
              repeatType: "row1-7",
              volume: "row1-8",
            },
          },
          player: "bottom-left",
        }}
        activeUI={{
          all: true,
          progress: "bar",
        }}
      />
    </div>
  );
}
