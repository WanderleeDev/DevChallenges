class Validador {
  values = [{}]
  regexValidators = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+){0,2}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }

  messageHelp = {
    msnSuccessful: 'Format valid',
    msnError: {
      name: 'No special characters',
      email: 'Example of valid format: xam@gmail.com'
    }
  }

  constructor (target, btnSubmit) {
    this.form = document.querySelector(target)
    this.btnSubmit = document.querySelector(btnSubmit)

    if (!(this.form && this.btnSubmit)) {
      throw new TypeError(`No existe los elementos : ${this.form} ${this.btnSubmit}. ${target} no existe en el documento`)
    }
  }

  checkFormValidity () {
    this.form.addEventListener('click', (e) => {
      e.preventDefault()
      const isValid = this.checkAllValidators()
      if (e.target === this.btnSubmit && isValid) {
        window.history.pushState({}, 'step 2', '/stepForm2')
      } else {
        console.log('sa')
      }
    })
  }

  validityInput (input, regex) {
    if (!input) {
      throw new TypeError(`No existe el elemento identificado con ${input}`)
    }

    const backupValue = { id: input.name, value: '', isValid: false }
    const rgx = new RegExp(this.regexValidators[regex])
    const isInputValid = rgx.test(input.value.trim())
    const msnHelp = input.nextElementSibling

    if (isInputValid) {
      input.classList.remove('invalid')
      msnHelp.classList.remove('msnInvalid')
      msnHelp.classList.add('valid')
      input.classList.add('valid')
      msnHelp.innerHTML = this.messageHelp.msnSuccessful
    } else {
      input.classList.remove('valid')
      msnHelp.classList.remove('msnValid')
      input.classList.add('invalid')
      msnHelp.classList.add('msnInvalid')
      msnHelp.innerHTML = this.messageHelp.msnError[regex]
    }

    backupValue.isValid = isInputValid
    backupValue.value = input.value
    console.log(backupValue)
    this.values.push(backupValue)
  }

  checkAllValidators () {
    return this.values.every(data => data.isValid === true)
  }
}

export default Validador
