import FormBase from '../components/FormBase/FormBase'
import CheckBox from '../shared/CheckBox'

export const FormStep2 = () => {
  const checkBoxData = {
    type: 'checkbox',
    options: [
      {
        id: 'option1',
        value: 'Software Development'
      },
      {
        id: 'option2',
        value: 'User Experience'
      },
      {
        id: 'option3',
        value: 'Graphic Design'
      }
    ]
  }
  const content = checkBoxData.options.map(data => CheckBox(data)).join('')
  const titleForm = 'Which topics you are interested in?'

  return FormBase({ titleForm, content })
}

export const fnValidate2 = () => {
  console.log('form 2')
}
