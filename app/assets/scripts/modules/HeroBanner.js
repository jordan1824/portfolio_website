class HeroBanner {
  constructor() {
    this.heroBanner = document.querySelector(".hero-banner-outer-container")
    this.heroBannerHidden = false
    this.events()
  }

  events() {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > window.innerHeight / 2.5) {
        if (!this.heroBannerHidden) {
          this.heroBanner.classList.add("disappear-animation")
          this.heroBannerHidden = true
          this.heroBanner.addEventListener("animationend", () => {
            this.heroBanner.style.opacity = '0'
            this.heroBanner.classList.remove("disappear-animation")
          })
        }
      } else {
        if (this.heroBannerHidden) {
          this.heroBanner.classList.add("appear-animation")
          this.heroBannerHidden = false
          this.heroBanner.addEventListener("animationend", () => {
            this.heroBanner.style.opacity = '1'
            this.heroBanner.classList.remove("appear-animation")
          })
        }
      }
    })
  }
}

export default HeroBanner