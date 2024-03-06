const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// update play and pause icon
function updatePlayIcon() {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
// update progress and timestamp
function updateProgress() {
  // console.log(video.currentTime);
  // console.log(video.duration);
  progress.value = (video.currentTime / video.duration) * 100;

  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 100) {
    mins = "0" + String(mins);
  }

  // get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 100) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}
// set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
// stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
