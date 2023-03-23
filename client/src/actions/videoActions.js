export const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// update play/pause icons
export const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// update progress and timestamp
export const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  // get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
};

// set video time to progress
export const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

export const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};
