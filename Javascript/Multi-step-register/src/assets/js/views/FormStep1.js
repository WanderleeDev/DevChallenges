import FormBase from '../components/FormBase/FormBase'
import Input from '../shared/Input'
import ValidatorStep1 from '../utils/ValidateForm1'

export const FormStep1 = (id) => {
  const inputData = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'enter your name'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'example@gmail.com'
    }
  ]
  const titleForm = 'register'
  const content = inputData.map(data => Input(data)).join('')

  return FormBase({ titleForm, content, id })
}

export const fnValidate = () => {
  const validity = new ValidatorStep1('#formStep1', '#btnformStep1')
  validity.checkFormValidity()
  validity.keyupListenerValidator()
}
