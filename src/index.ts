import './assets/style.css'

interface IComponent {
  mount: (id: string) => void
}

class Component implements IComponent {
  private dom: HTMLDivElement
  constructor() {
    const dom = document.createElement("div")
    dom.innerHTML = "<h2>webrtc lab</h2>"
    this.dom = dom
  }

  public mount(id: string): void {
    document.querySelector(id).appendChild(this.dom)
  }
}

const app = new Component()
app.mount("#app")