import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

class CaptureComponent {
  private source: any
  constructor() {
    this.source = fromEvent(document, 'DOMContentLoaded')
  }

  public load(cb: (val: CustomEvent) => void) {
    this.source.pipe(
        map(
          (evt: CustomEvent) => `load time: ${evt.timeStamp}`),
      )
      .subscribe(cb)
  }

  public observers(id: string, cb: (val: CustomEvent) => void) {
    const source = fromEvent(document.querySelector(`#${id}`), "click")
    const producer = source.pipe(
      map(
        (evt: MouseEvent) => `#${id} Event time: ${evt.timeStamp}`),
    ).subscribe(cb)
  }
}

const comp = new CaptureComponent()

comp.load((_: CustomEvent) => {
  comp.observers("open-camera", (val: CustomEvent) => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    }).then((stream: MediaStream) => {
      const video: HTMLMediaElement = document.querySelector("#video")
      video.srcObject = stream
    })
    console.log(val)
  })

  comp.observers("close-camera", (val: CustomEvent) => {
    const video: HTMLMediaElement = document.querySelector("#video")
    const stream: MediaStream = video.srcObject as MediaStream
    stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
    console.log(val)
  })
})