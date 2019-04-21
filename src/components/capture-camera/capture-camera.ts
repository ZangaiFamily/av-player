document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#open-camera").addEventListener("click", (evt: MouseEvent) => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    }).then((stream: MediaStream) => {
      const video: HTMLMediaElement = document.querySelector("#video")
      video.srcObject = stream
    })
  })

  document.querySelector("#close-camera").addEventListener("click", (evt: MouseEvent) => {
    const video: HTMLMediaElement = document.querySelector("#video")
    const stream: MediaStream = video.srcObject as MediaStream
    stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
  })

})