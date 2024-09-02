// script.js

const video = document.getElementById('background-video');
const clickToStartOverlay = document.getElementById('click-to-start');
const videoWrapper = document.getElementById('video-wrapper');

// Ensure video is muted at the start (for safety, though it's autoplay muted)
video.muted = true;

// Event listener to handle user interaction
clickToStartOverlay.addEventListener('click', () => {
  video.muted = false; // Unmute the video
  videoWrapper.style.display = 'block'; // Show the video
  video.play(); // Play the video
  clickToStartOverlay.style.display = 'none'; // Hide the "Click to Start" overlay
});
