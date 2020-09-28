class FormSubmit {
  constructor() {
    this.contactForm = document.querySelector(".contact__form")
    this.subject = document.querySelector("#subject")
    this.email = document.querySelector("#email")
    this.text = document.querySelector("#text")
    this.alert = document.querySelector(".alert")
    this.message = document.querySelector(".alert__message")
    this.events()
  }

  events() {
    this.contactForm.addEventListener("submit", (event) => {
      event.preventDefault()
      let subjectValue = this.subject.value.trim()
      let emailValue = this.email.value.trim()
      let textValue = this.text.value.trim()
      if (subjectValue && emailValue && textValue) {
        // axios.post('/email', {subject: subjectValue, email: emailValue, text: textValue}).then(function() {
        //   console.log("success")
        // }).catch(function() {
        //   console.log("There was an error")
        // })
        this.subject.value = ""
        this.email.value = ""
        this.text.value = ""
        // Show success message
        if (this.alert.classList.contains("alert--error")) {
          this.alert.classList.remove("alert--error")
        }
        this.alert.classList.add("alert--success")
        this.message.innerHTML = "Your message has been sent!"
        this.alert.addEventListener("animationend", () => {
          this.alert.classList.remove("alert--success")
        })
      } else {
        // Show error message
        this.alert.classList.add("alert--error")
        this.message.innerHTML = "You must provide valid input."
        this.alert.addEventListener("animationend", () => {
          this.alert.classList.remove("alert--error")
        })
      }
    })
  }
}

export default FormSubmit