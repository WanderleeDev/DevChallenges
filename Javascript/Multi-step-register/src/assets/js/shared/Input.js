const Input = ({ type, name, placeholder }) => {
  return (`
    <div class="grid gap-2 py-4">
      <label class="text-xs capitalize" for="${name}">
        ${name}
      </label>
      <input class="text-label w-full bg-inherit border-secondary border-2 p-3 rounded-xl placeholder:text-xs" 
        type="${type}"
        id="${name}"
        name="${name}"
        required
        placeholder="${placeholder}">
    </div>
  `)
}

export default Input
