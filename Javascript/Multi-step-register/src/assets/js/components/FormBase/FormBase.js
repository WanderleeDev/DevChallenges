import Btn from '../../shared/Btn'
import ProgressBar from '../ProgressBar/ProgressBar'

const FormBase = ({ titleForm, content, id }) => {
  return (`
    <form id="${id}" class="relative grid gap-6 bg-[#212936] rounded-xl w-fluid text-primary px-6 xs:px-10 py-10 border-secondary border-[.1rem]" autocomplete="off">
      <fieldset>
        <legend class="font-black text-xl pb-4 first-letter:uppercase">
          ${titleForm}
        </legend>
        ${content}
      </fieldset>
      ${Btn(id)}
      ${ProgressBar(1)}
    </form>
  `)
}

export default FormBase
