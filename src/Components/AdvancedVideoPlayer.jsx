// AdvancedVideoPlayer.js
import React, { useRef, useState, useEffect } from 'react';

const AdvancedVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(video.duration);
    };

    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!isFullScreen) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="800"
        height="450"
        controls
      >
        <source
          src="https://file-examples.com/storage/fee4e04377657b56c9a6785/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleMuteUnmute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{Math.round(currentTime)}s / {Math.round(duration)}s</span>
        <button onClick={handleFullScreen}>
          {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
};

export default AdvancedVideoPlayer;
