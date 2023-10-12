import FormBase from '../components/FormBase/FormBase'
import DataUser from '../components/DataUser/DataUser'

const FormStep3 = () => {
  const titleForm = 'summary'

  return (`
    ${FormBase({ titleForm, content: DataUser() })}
  `)
}

export default FormStep3
