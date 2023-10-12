const CheckBox = ({ value, id }) => {
  return (`
  <label tabindex=1 class="bg-checkbox block rounded-xl py-3 px-4 my-5 cursor-pointer border-secondary border-[.1rem] text-label text-sm select-none hover:text-primary hover:border-primary required:text-red-200" 
  for="${id}">
    <input class="hidden" 
      type="checkbox" 
      name="option1" 
      value="${value}" 
      id="${id}">
      ${value}
  </label>
  `)
}

export default CheckBox
