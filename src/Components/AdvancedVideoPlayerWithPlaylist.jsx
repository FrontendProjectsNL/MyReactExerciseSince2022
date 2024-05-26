// AdvancedVideoPlayerWithPlaylist.js
import React, { useRef, useState, useEffect } from 'react';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    src: "https://file-examples.com/storage/fee4e04377657b56c9a6785/2017/04/file_example_MP4_480_1_5MG.mp4",
  },
  {
    id: 2,
    title: 'Video 2',
    src: 'https://download.samplelib.com/mp4/sample-5s.mp4',
  },
  // Add more video entries as needed
];

const AdvancedVideoPlayerWithPlaylist = () => {
  // Ref to the video element
  const videoRef = useRef(null);

  // State variables
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // useEffect for event listeners
  useEffect(() => {
    const video = videoRef.current;

    // Event handler for time updates
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    // Event handler for duration changes
    const handleDurationChange = () => {
      setDuration(video.duration);
    };

    // Event handler for fullscreen changes
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    // Add event listeners
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    document.addEventListener('fullscreenchange', handleFullScreenChange);

    // Cleanup: Remove event listeners
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  // Event handler for play/pause button
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Event handler for mute/unmute button
  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Event handler for volume control
  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  // Event handler for fullscreen button
  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!isFullScreen) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Event handler for selecting a video from the playlist
  const handleVideoChange = (selectedVideo) => {
    setCurrentVideo(selectedVideo);
    setIsPlaying(true);
  };

  return (
    <div>
      {/* Video player section */}
      <div>
        <video
          ref={videoRef}
          width="800"
          height="450"
          controls
          src={currentVideo.src}
        >
          Your browser does not support the video tag.
        </video>
        {/* Controls for play/pause, mute/unmute, volume, time, fullscreen */}
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

      {/* Playlist section */}
      <div>
        <h2>Playlist</h2>
        <ul>
          {/* Map through the videos array to create playlist buttons */}
          {videos.map((video) => (
            <li key={video.id}>
              <button onClick={() => handleVideoChange(video)}>
                {video.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvancedVideoPlayerWithPlaylist;
