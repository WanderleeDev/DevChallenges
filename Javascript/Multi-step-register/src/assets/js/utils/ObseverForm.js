class ObserverForm {
  constructor () {
    this.subscriptors = []
    this.dataForm = []
  }

  subscribe (sub) {
    this.subscriptors.push(sub)
  }

  unsubscribe (sub) {
    this.subscriptors = this.subscriptors.filter(validateSub => {
      return validateSub !== sub
    })
  }

  notify (updateEvent) {
    this.subscriptors.forEach(sub => {
      sub.call(this, updateEvent)
    })
  }

  call () {
    console.log('sda')
  }
}

export default ObserverForm
