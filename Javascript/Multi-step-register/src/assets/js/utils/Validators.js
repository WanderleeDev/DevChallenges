class Validador {
  constructor (target) {
    this.form = document.querySelector(target)
    this.btnSubmit = this.form.querySelector('bottom')
  }

  initValidator () {
    this.form.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.target === this.btnSubmit) {
        console.log(this.form)
      }
    })
  }

  validate () {}
}

export default Validador
