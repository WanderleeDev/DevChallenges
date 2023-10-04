const ListDetails = () => {
  const details = [
    'No credit card required',
    'No software to install'
  ]

  return (`
    <ul class="flex gap-8 text-[var(--a)] text-sm">
      ${details.map( detail => (`
        <li class="grid grid-cols-[auto_1fr] items-center gap-2">
          <span class="bg-imageBasic w-8 h-8 block"></span>
          <p>${detail}</p>
        </li>
      `)).join("")}
    </ul>`)
}

export default ListDetails
