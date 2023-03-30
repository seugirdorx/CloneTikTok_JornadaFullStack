import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
      ></video>
    </div>
  );
}

export default Video;
