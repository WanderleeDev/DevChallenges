import FormBase from '../components/FormBase/FormBase'
import Input from '../shared/Input'

const FormStep1 = (id) => {
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

export default FormStep1
