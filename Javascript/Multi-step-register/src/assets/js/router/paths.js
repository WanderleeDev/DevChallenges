import ErrorPage from '../components/ErrorPage/ErrorPage'
import { FormStep1, fnValidate } from '../views/FormStep1'
import { FormStep2, fnValidate2 } from '../views/FormStep2'
import FormStep3 from '../views/FormStep3'

const PATHS = {
  home: {
    path: '/',
    template: FormStep1('formStep1'),
    fnValidate: fnValidate
  },
  stepForm2: {
    path: '/stepForm2',
    template: FormStep2('formStep2'),
    fnValidate: fnValidate2
  },
  stepForm3: {
    path: '/stepForm3',
    template: FormStep3('formStep3')
  },
  error: {
    path: '',
    template: ErrorPage()
  }
}

export default PATHS
