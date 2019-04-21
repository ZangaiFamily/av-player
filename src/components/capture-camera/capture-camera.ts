document.addEventListener("DOMContentLoaded", (evt: Event) => {
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  }).then((stream: MediaStream) => {
    const video: HTMLMediaElement = document.querySelector("#video")
    video.srcObject = stream
  })
})