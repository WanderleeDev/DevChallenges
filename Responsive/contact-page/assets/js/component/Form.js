import Bottom from "./Bottom.js";
import BoxMessage from "./BoxMessage.js";

const Form = () => {
  const inputsForm = [
    {
      label: 'Name',
      placeholder: 'Ethan Johnson',
      type: 'text',
      name: 'name'
    },
    {
      label: 'Company Email',
      placeholder: 'ethan@johnson.com',
      type: 'email',
      name: 'mail'
    }
  ];
  const selectsForm = [
    {
      name: 'Company Size',
      options: [
        '50-100 employees',
        '100-150 employees', 
        '150-200 employees'
      ]
    },
    {
      name: 'Subject',
      options: [
        'Building Landing pages', 
        'Portfolio creation', 
        'High-quality responsive designs'
      ]
    }
  ];

  const nameStyle = 'text-xs font-medium';
  const inputStyle = 'rounded-xl p-4 bg-white text-black w-full outline-transparent outline-none font-medium'
  const focusStyle = 'focus-within:outline focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-green-500';

  return (`
    <form class="bg-[rgb(241_245_249/20%)] grid gap-6 w-responsive p-8 rounded-2xl pb-20 md:grid-cols-2">
      ${inputsForm.map(input => (`
        <label class="grid" for="${input.name}">
          <span class="${nameStyle}">
            ${input.label}
          </span>
          <input
            class="${inputStyle} ${focusStyle}"
            id="${input.name}" 
            placeholder="${input.placeholder}" 
            required name="${input.name}" 
            type="${input.type}"/>
        </label>
      `)).join("")}

      ${selectsForm.map(select => (`
        <label class="grid">
          <span class="${nameStyle} mb-[.05rem]">
            ${select.name}
          </span>
          <div class="bg-white rounded-xl pr-4 ${focusStyle}">
          <select class="${inputStyle}">
            ${select.options.map(option => 
              (`<option class="bg-gray-400" value="${option}">${option}</option>`)).join("")
            }
          </select>
          </div>
        </label>
      `)).join("")}

      ${BoxMessage({nameStyle, inputStyle, focusStyle})}
      ${Bottom({inputStyle, focusStyle})}
    </form>`)
}

export default Form
