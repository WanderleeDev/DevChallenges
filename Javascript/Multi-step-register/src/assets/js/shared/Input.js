const Input = ({ type, name, placeholder }) => {
  return (`
    <div class="grid gap-2 py-4 relative">
      <label class="text-xs capitalize" for="${name}">
        ${name}
      </label>
      <input class="text-label w-full bg-inherit border-secondary border-2 p-3 rounded-xl placeholder:text-xs" 
        type="${type}"
        id="${name}"
        name="${name}"
        required
        placeholder="${placeholder}">
        <p class="absolute bottom-[-.2rem] left-0 px-3 text-xs  rounded-md font-medium tracking-widest">
        </p>
    </div>
  `)
}

export default Input
