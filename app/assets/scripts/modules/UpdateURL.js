class UpdateURL {
  constructor() {
    this.home = document.querySelector(".hero-banner")
    this.about = document.querySelector("#about")
    this.skills = document.querySelector("#skills")
    this.projects = document.querySelector("#projects")
    this.contact = document.querySelector("#contact")
    // this.events()
  }

  events() {
    window.addEventListener("scroll", () => this.scrollAction())
  }

  scrollAction() {
    if (window.scrollY <= window.innerHeight) {
      window.history.replaceState({}, null, '/')
    } else if (this.about.getBoundingClientRect().top <= 0 && (this.about.getBoundingClientRect().top + this.about.clientHeight) > 0) {
      window.history.replaceState({}, null, '/about')
    } else if (this.skills.getBoundingClientRect().top <= 0 && (this.skills.getBoundingClientRect().top + this.skills.clientHeight) > 0) {
      window.history.replaceState({}, null, '/skills')
    } else if (this.projects.getBoundingClientRect().top <= 0 && (this.projects.getBoundingClientRect().top + this.projects.clientHeight) > 0) {
      window.history.replaceState({}, null, '/projects')
    } else if (this.contact.getBoundingClientRect().top <= 0 && (this.contact.getBoundingClientRect().top + this.contact.clientHeight) > 0) {
      window.history.replaceState({}, null, '/contact')
    } else {
      window.history.replaceState({}, null, '/')
    }
  }
}

export default UpdateURL