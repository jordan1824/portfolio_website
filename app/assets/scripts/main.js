import '../styles/styles.css'
import HeroBanner from './modules/HeroBanner'
import FadeIn from './modules/FadeIn'
import FormSubmit from './modules/FormSubmit'

new HeroBanner()
new FadeIn(document.querySelector(".about__intro"), 90)
new FadeIn(document.querySelector(".about__skills-container"), 75)
new FadeIn(document.querySelector(".contact-outer-container"), 80)
new FormSubmit()

class MultipleFadeIn {
  constructor(items, appearPoint) {
    this.items = items
    this.appearPoint = appearPoint
    this.visible = false
    this.setup()
    this.events()
  }

  setup() {
    this.items.forEach(item => {
      item.style.opacity = '0';
    })
  }

  events() {
    window.addEventListener("scroll", () => {
      this.items.forEach(item => {
        if (item.style.opacity != '1') {
          let distance = item.getBoundingClientRect().top / window.innerHeight * 100
          if (distance < this.appearPoint) {
            item.classList.add("fade-in-animation")
            item.addEventListener("animationend", () => {
              item.style.opacity = '1';
              item.classList.remove("fade-in-animation")
            })
          }
        }
      })
    })
  }
}

new MultipleFadeIn(document.querySelectorAll(".project"), 60)

if (module.hot) {
  module.hot.accept()
}