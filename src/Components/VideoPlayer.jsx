// VideoPlayer.js
import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video ref={videoRef} width="600" height="400" controls>
        <source
          src="https://file-examples.com/storage/fee4e04377657b56c9a6785/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
