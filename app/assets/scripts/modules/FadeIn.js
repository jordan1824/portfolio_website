class FadeIn {
  constructor(item, appearPoint) {
    this.item = item
    this.appearPoint = appearPoint
    this.visible = false
    this.setup()
    this.events()
  }

  setup() {
    this.item.style.opacity = '0';
  }

  events() {
    window.addEventListener("scroll", () => {
      if (!this.visible) {
        let distance = this.item.getBoundingClientRect().top / window.innerHeight * 100
        if (distance < this.appearPoint) {
          this.item.classList.add("fade-in-animation")
          this.item.addEventListener("animationend", () => {
            this.item.style.opacity = '1';
            this.item.classList.remove("fade-in-animation")
            this.visible = true
          })
        }
      }
    })
  }
}

export default FadeIn