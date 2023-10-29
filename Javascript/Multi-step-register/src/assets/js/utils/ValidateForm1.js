import Validador from './Validators'
class ValidatorStep1 extends Validador {
  // applyValidation (inputTarget) {
  //   const input = this.form.querySelector(inputTarget)
  //   console.log(input.name)
  //   this.validityInput(input, inputTarget.slice(1))
  // }

  // keyupListenerValidator (idInput) {
  //   this.form.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     if (e.target.id === idInput.id) {
  //       this.validityInput()
  //     }
  //   })
  // }

  keyupListenerValidator () {
    this.form.addEventListener('keyup', (e) => {
      e.preventDefault()

      if (e.target.name === this.regexValidators.email ||
          this.regexValidators.name) {
        const input = e.target
        this.validityInput(input, input.name)
      }
    })
  }
}

export default ValidatorStep1
